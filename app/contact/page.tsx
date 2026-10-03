import { Header, Footer } from "@/components/chrome";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with Robin Maxwell — brand identity, event design and print, from Seattle.",
};

const helpful = [
  "What you’re making, and who it’s for",
  "When you need it, and what’s driving the date",
  "Roughly what you’ve set aside for it",
  "Who else is involved — a team, a board, a committee",
];

const fits = [
  "Identity work, from a single mark to a full system with standards",
  "Events and campaigns that need to hold together across print, signage and social",
  "Reports and publications where the information has to do the convincing",
  "Overflow or embedded work alongside an in-house team",
];

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="font-display text-4xl tracking-tight">Let&rsquo;s work together.</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
          Tell me about your project or goals. I read every note myself and
          usually reply within a day or two.
        </p>

        <p className="mt-6">
          <a
            className="font-display text-2xl text-crest-700 underline decoration-crest-200 decoration-2 underline-offset-[6px] transition-colors hover:decoration-crest"
            href="mailto:robin@swivelstudio.com?subject=Project%20enquiry"
          >
            robin@swivelstudio.com
          </a>
        </p>

        <div className="mt-16 grid gap-12 border-t border-rule pt-10 sm:grid-cols-2">
          <section>
            <h2 className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">
              Helpful to know up front
            </h2>
            <ul className="mt-4 space-y-2.5">
              {helpful.map((h) => (
                <li key={h} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-crest" />
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-3">
              None of it has to be settled. A sentence about where you&rsquo;re stuck
              is a fine place to start.
            </p>
          </section>

          <section>
            <h2 className="text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">
              Projects I take on
            </h2>
            <ul className="mt-4 space-y-2.5">
              {fits.map((f) => (
                <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                  <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-crest" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-3">
              I work solo or inside a team, and bring in copywriters,
              illustrators, photographers and developers as a project needs them.
            </p>
          </section>
        </div>

        <p className="mt-14 border-t border-rule pt-8 text-sm text-ink-3">
          Swivel Studio is based in Seattle and works with clients anywhere.
        </p>
      </main>
      <Footer />
    </>
  );
}
