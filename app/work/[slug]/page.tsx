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
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title: `${p.client} — ${p.title}`, description: p.summary, images: [p.hero.src] },
  };
}

const paras = (body: string | string[]) => (Array.isArray(body) ? body : [body]);

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={"h-4 w-4 shrink-0 " + (dir === "left" ? "rotate-180" : "")}
    >
      <path d="M3.5 10h13M11.5 5l5 5-5 5" />
    </svg>
  );
}

/** Only genuinely panoramic artwork earns the full measure. A 2:1 logo does
 *  not need 976px, and tall phone screens run away without a cap. */
const isWide = (w: number, h: number) => w / h >= 1.9;
/** Only genuinely extreme shapes - roll-up banners, phone screens. At 0.75 the
 *  threshold split a matched pair of report spreads, capping one and not the
 *  other. */
const isTall = (w: number, h: number) => w / h < 0.6;

type Img = { src: string; alt: string; w: number; h: number };

/**
 * Group consecutive images by whether they span. A plain two-column grid
 * stretches every row to its tallest figure, which left a 360px void under
 * short artwork; the narrow runs are packed as masonry columns instead.
 */
function runs(images: Img[]) {
  const out: { wide: boolean; items: Img[] }[] = [];
  for (const img of images) {
    const wide = isWide(img.w, img.h);
    const last = out[out.length - 1];
    if (last && last.wide === wide) last.items.push(img);
    else out.push({ wide, items: [img] });
  }
  return out;
}

function Figure({ img, sizes }: { img: Img; sizes: string }) {
  const tall = isTall(img.w, img.h);
  return (
    <figure className="mb-8 break-inside-avoid">
      <div
        className={
          "overflow-hidden rounded-xs " +
          (tall ? "flex justify-center" : "bg-rule-2")
        }
      >
        <Image
          src={img.src}
          alt=""
          width={img.w}
          height={img.h}
          sizes={sizes}
          className={
            // Fixed height, not max-height: a low-res tall source was rendering
            // at its natural 267px beside 476px siblings.
            tall ? "h-[40rem] w-auto rounded-xs object-contain" : "h-auto w-full"
          }
        />
      </div>
      <figcaption className="mt-2.5 text-mid text-ink-3">{img.alt}</figcaption>
    </figure>
  );
}

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
                      <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xs bg-surface">
                        <Image
                          src={img.src}
                          alt=""
                          width={img.w}
                          height={img.h}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <figcaption className="mt-2.5 text-mid text-ink-3">{img.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {s.images && !s.gallery && (
                <div className="mt-10">
                  {runs(s.images).map((run, i) =>
                    run.wide ? (
                      <div key={i}>
                        {run.items.map((img) => (
                          <Figure key={img.src} img={img} sizes="(max-width: 640px) 100vw, 976px" />
                        ))}
                      </div>
                    ) : (
                      <div key={i} className="gap-x-6 sm:columns-2">
                        {run.items.map((img) => (
                          <Figure
                            key={img.src}
                            img={img}
                            sizes={
                              isTall(img.w, img.h)
                                ? "(max-width: 640px) 70vw, 320px"
                                : "(max-width: 640px) 100vw, 480px"
                            }
                          />
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </section>
        ))}

        <nav
          aria-label="More work"
          className="mx-auto flex max-w-5xl items-center justify-between gap-6 border-t border-rule px-6 py-6 text-mid"
        >
          {prev ? (
            <Link
              className="inline-flex max-w-[46%] items-center gap-2 text-ink-2 transition-colors hover:text-crest-700 sm:max-w-none"
              href={`/work/${prev.slug}`}
            >
              <Arrow dir="left" />
              {prev.client}
            </Link>
          ) : <span />}
          {/* Three items don't fit at 375px; the footer nav covers this link. */}
          <Link
            className="hidden text-ink-3 transition-colors hover:text-crest-700 sm:inline"
            href="/work"
          >
            All work
          </Link>
          {next ? (
            <Link
              className="inline-flex max-w-[46%] items-center gap-2 text-ink-2 transition-colors hover:text-crest-700 sm:max-w-none"
              href={`/work/${next.slug}`}
            >
              {next.client}
              <Arrow dir="right" />
            </Link>
          ) : <span />}
        </nav>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
