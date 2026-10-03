import Link from "next/link";

const capabilities = [
  { title: "Brand Identity & Systems", copy: "Naming, marks, visual systems, standards, voice." },
  { title: "Digital", copy: "Websites, campaigns, social, product, decks." },
  { title: "Print & Environmental", copy: "Reports, publications, packaging, signage." },
];

const clients = [
  "Gates Ag One", "Weyerhaeuser", "Philips Healthcare", "Seattle Genetics",
  "Realtor.com", "TrueBlue", "F5 Networks", "Seattle Cancer Care Alliance",
  "Gates Notes", "Dendreon", "SightLife", "Vera Whole Health",
  "Accelerator Corporation", "Life Science Washington", "First Sound Bank",
  "Pacific Crest Savings Bank", "Visit Bellevue", "Microclimates",
  "Concord International School", "YWCA",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <header className="flex items-center justify-between border-b border-rule pb-6">
        <span className="font-display text-lg tracking-tight">Swivel Studio</span>
        <span className="text-xs uppercase tracking-[0.14em] text-ink-3">Seattle</span>
      </header>

      <section className="pt-14">
        <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Brand identity and event design, out of Seattle.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
          I&rsquo;m Robin Maxwell. For over two decades I&rsquo;ve helped organizations grow
          through design &mdash; from Fortune 500s and biotech to the nonprofits doing the
          hardest work in the city.
        </p>
      </section>

      <section className="mt-16 grid gap-8 sm:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c.title} className="border-t-2 border-rule pt-4">
            <h2 className="text-sm font-semibold">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{c.copy}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 border-t border-rule pt-8">
        <h2 className="text-xs uppercase tracking-[0.14em] text-ink-3">Selected clients</h2>
        <p className="mt-4 text-sm leading-loose text-ink-2">
          {clients.join(" · ")}
        </p>
      </section>

      <section className="mt-16 border-t border-rule pt-8">
        <h2 className="font-display text-2xl tracking-tight">Let&rsquo;s work together.</h2>
        <p className="mt-3 text-ink-2">
          A fuller portfolio is on its way. In the meantime, work samples and
          availability on request.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a className="text-crest underline underline-offset-4" href="mailto:robin@swivelstudio.com">
            robin@swivelstudio.com
          </a>
          <a className="text-crest underline underline-offset-4" href="tel:+12063563063">
            (206) 356-3063
          </a>
          <a
            className="text-crest underline underline-offset-4"
            href="https://www.linkedin.com/in/robinmaxwell/"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="mt-20 border-t border-rule pt-6 text-xs text-ink-3">
        Swivel Studio &middot; Robin Maxwell, Principal &middot; Seattle, Washington
        <span className="ml-3">
          <Link className="underline underline-offset-2" href="/work">Work</Link>
          {" · "}
          <Link className="underline underline-offset-2" href="/about">About</Link>
        </span>
      </footer>
    </main>
  );
}
