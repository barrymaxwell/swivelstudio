import { Header, Footer } from "@/components/chrome";
import { CopyEmail } from "@/components/copy-email";

export const metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Start a project with Robin Maxwell — branding and graphic design, from Seattle.",
};

const helpful = [
  "What you're making, and who it's for",
  "When you need it, and what's driving the date",
  "Roughly what you've set aside for it",
  "Who else is involved — a team, a board, a committee",
];

const fits = [
  "Identity work, from a single mark to a full system with standards",
  "Events and campaigns that hold together across print, signage and social",
  "Reports and publications where the information has to do the convincing",
  "Overflow or embedded work alongside an in-house team",
];

function List({ title, items, note }: { title: string; items: string[]; note: string }) {
  return (
    <section>
      <h2 className="font-display text-h2 tracking-tight">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-base leading-relaxed text-ink-2">
            <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-crest" />
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-5 max-w-[46ch] text-mid text-ink-3">{note}</p>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-display text-[2.5rem] leading-[1.08] tracking-[-0.02em]">
          Let&rsquo;s work together.
        </h1>
        <p className="mt-5 max-w-[48ch] text-lede text-ink-2">
          Tell me about your project or goals. I&rsquo;m based in Seattle and work with
          clients anywhere. I read every note myself and usually reply within a day
          or two.
        </p>

        <div className="mt-8">
          <CopyEmail email="robin@swivelstudio.com" variant="display" />
        </div>

        <div className="mt-16 grid gap-12 border-t border-rule pt-12 sm:grid-cols-2 sm:gap-14">
          <List
            title="Helpful to know"
            items={helpful}
            note="None of it has to be settled. A sentence about where you're stuck is a fine place to start."
          />
          <List
            title="Projects I take on"
            items={fits}
            note="I work solo or inside a team, and bring in copywriters, illustrators, photographers and developers as a project needs them."
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
