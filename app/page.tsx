import { Header, Cta, Footer } from "@/components/chrome";
import { WorkCard } from "@/components/work-card";
import { featured, capabilities, clients } from "@/lib/work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-14 sm:pt-28">
          <h1 className="max-w-[26ch] font-display text-[2.75rem] leading-[1.06] tracking-[-0.021em] text-balance sm:text-display">
            Branding and graphic design, out of Seattle.
          </h1>
          <p className="mt-7 max-w-xl text-lede text-ink-2">
            I&rsquo;m Robin Maxwell. For over two decades I&rsquo;ve helped organizations grow
            through design &mdash; for Fortune 500s, biotech and banks, and the nonprofits
            doing the hardest work in the city.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t-2 border-crest pt-4">
                <h2 className="text-base font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-2 text-mid text-ink-2">{c.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-rule bg-surface">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
              Selected work
            </h2>
            <div className="mt-8 grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {featured.map((p) => (
                <WorkCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
            Twenty years of clients
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-[2] text-ink-2">
            {clients.join("  ·  ")}
          </p>
        </section>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
