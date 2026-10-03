import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Cta, Footer } from "@/components/chrome";
import { projects, bySlug } from "@/lib/work";

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
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
            {p.client} · {p.disciplines.join(" · ")}
          </p>
          <h1 className="mt-5 max-w-[20ch] font-display text-[2.5rem] leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-xl text-lede text-ink-2">{p.summary}</p>
        </div>

        <div className="relative aspect-21/9 w-full bg-rule-2">
          <Image src={p.hero.src} alt={p.hero.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="max-w-[62ch] text-lede leading-[1.7] text-ink-2">{p.intro}</p>
        </div>

        {p.sections.map((s) => (
          <section key={s.heading} className="mx-auto max-w-5xl px-6 pb-16">
            <h2 className="font-display text-h2 tracking-tight">{s.heading}</h2>
            {s.body && (
              <p className="mt-4 max-w-[62ch] leading-[1.7] text-ink-2">{s.body}</p>
            )}
            {s.images && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {s.images.map((img) => (
                  <figure key={img.src} className="overflow-hidden rounded-xs bg-rule-2">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.w}
                      height={img.h}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-auto w-full"
                    />
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}

        <nav className="mx-auto flex max-w-5xl justify-between gap-6 border-t border-rule px-6 py-8 text-base">
          {prev ? (
            <Link className="text-crest-700 hover:underline underline-offset-4" href={`/work/${prev.slug}`}>
              &larr; {prev.client}
            </Link>
          ) : <span />}
          {next && (
            <Link className="text-crest-700 hover:underline underline-offset-4" href={`/work/${next.slug}`}>
              {next.client} &rarr;
            </Link>
          )}
        </nav>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
