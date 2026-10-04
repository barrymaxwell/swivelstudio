import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Cta, Footer } from "@/components/chrome";
import { projects, bySlug, sectionId } from "@/lib/work";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) return {};
  return {
    title: `${p.client} — ${p.title}`,
    description: p.summary,
    openGraph: { title: `${p.client} — ${p.title}`, description: p.summary, images: [p.hero.src] },
  };
}

const paras = (body: string | string[]) => (Array.isArray(body) ? body : [body]);

/** Only genuinely panoramic artwork earns the full measure. A 2:1 logo does
 *  not need 976px, and tall phone screens run away without a cap. */
const isWide = (w: number, h: number) => w / h >= 1.9;
const isTall = (w: number, h: number) => w / h < 0.75;

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === slug);
  const prev = projects[i - 1];
  const next = projects[i + 1];

  return (
    <>
      <Header />
      <main>
        {/* Summary block — the five-second read, above the hero. */}
        <div className="mx-auto max-w-5xl px-6 pt-14 pb-10">
          {p.client !== p.title && (
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
              {p.client}
            </p>
          )}
          <h1 className="mt-4 max-w-[20ch] font-display text-[2.5rem] leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-[46ch] text-lede text-ink-2">{p.summary}</p>
        </div>

        <div className="relative aspect-21/9 w-full bg-rule-2">
          <Image src={p.hero.src} alt={p.hero.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        {/* Intro: disciplines rail on the left, the setup on the right. */}
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
                What I did
              </h2>
              <ul className="mt-3 flex flex-col gap-1 text-mid text-ink-2">
                {p.disciplines.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
            <p className="max-w-[58ch] text-lede leading-[1.65] text-ink-2">{p.intro}</p>
          </div>
        </div>

        {p.sections.map((s) => (
          <section
            key={s.heading}
            id={sectionId(s.heading)}
            className="scroll-mt-28 border-t border-rule py-14"
          >
            <div className="mx-auto max-w-5xl px-6">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
                <h2 className="font-display text-h2 tracking-tight text-balance">{s.heading}</h2>
                <div className="flex max-w-[58ch] flex-col gap-4">
                  {paras(s.body).filter(Boolean).map((t) => (
                    <p key={t} className="leading-[1.7] text-ink-2">{t}</p>
                  ))}
                </div>
              </div>

              {s.images && s.gallery && (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  {s.images.map((img) => (
                    <figure key={img.src}>
                      <div className="flex aspect-4/3 items-center justify-center rounded-xs bg-surface p-6">
                        <Image
                          src={img.src}
                          alt=""
                          width={img.w}
                          height={img.h}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <figcaption className="mt-2.5 text-mid text-ink-3">{img.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {s.images && !s.gallery && (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                  {s.images.map((img) => (
                    <figure
                      key={img.src}
                      className={isWide(img.w, img.h) ? "sm:col-span-2" : undefined}
                    >
                      <div
                        className={
                          "overflow-hidden rounded-xs bg-rule-2 " +
                          (isTall(img.w, img.h) ? "flex max-h-[34rem] justify-center" : "")
                        }
                      >
                        <Image
                          src={img.src}
                          alt=""
                          width={img.w}
                          height={img.h}
                          sizes={isWide(img.w, img.h)
                            ? "(max-width: 640px) 100vw, 976px"
                            : "(max-width: 640px) 100vw, 480px"}
                          className={
                            isTall(img.w, img.h)
                              ? "h-auto max-h-[34rem] w-auto object-contain"
                              : "h-auto w-full"
                          }
                        />
                      </div>
                      <figcaption className="mt-2.5 text-mid text-ink-3">{img.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        <nav className="mx-auto flex max-w-5xl justify-between gap-6 border-t border-rule px-6 py-8 text-base">
          {prev ? (
            <Link className="text-crest-700 hover:underline underline-offset-4" href={`/work/${prev.slug}`}>
              &larr; {prev.client}
            </Link>
          ) : <span />}
          <Link className="text-ink-2 hover:text-crest-700" href="/work">All work</Link>
          {next ? (
            <Link className="text-crest-700 hover:underline underline-offset-4" href={`/work/${next.slug}`}>
              {next.client} &rarr;
            </Link>
          ) : <span />}
        </nav>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
