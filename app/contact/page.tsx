import { Header, Footer } from "@/components/chrome";
import { CopyEmail } from "@/components/copy-email";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
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

function Rail({ title, items, note }: { title: string; items: string[]; note: string }) {
  return (
    <section>
      <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-mid text-ink-2">
            <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-crest" />
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-mid text-ink-3">{note}</p>
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
        <p className="mt-5 max-w-[46ch] text-lede text-ink-2">
          Tell me about your project or goals. I read every note myself and usually
          reply within a day or two.
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <div>
            <h2 className="font-display text-h2 tracking-tight">Send a note</h2>
            <div className="mt-6 max-w-[34rem]">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:border-l lg:border-rule lg:pl-10">
            <section>
              <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">
                Or email me
              </h3>
              <div className="mt-3">
                <CopyEmail email="robin@swivelstudio.com" />
              </div>
            </section>

            <Rail
              title="Helpful to know up front"
              items={helpful}
              note="None of it has to be settled. A sentence about where you're stuck is a fine place to start."
            />

            <Rail
              title="Projects I take on"
              items={fits}
              note="I work solo or inside a team, and bring in copywriters, illustrators, photographers and developers as a project needs them."
            />

            <p className="text-mid text-ink-3">
              Swivel Studio is based in Seattle and works with clients anywhere.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
