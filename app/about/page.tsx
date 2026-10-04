import Image from "next/image";
import { Header, Cta, Footer } from "@/components/chrome";
import { clients } from "@/lib/work";

export const metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description:
    "Robin Maxwell is a graphic designer and art director in Seattle — brand identity, event branding, print and digital, for over twenty years.",
};

const sections = [
  {
    heading: "What I do best",
    body: [
      "Identity creation and event branding are my two great loves. I also work in naming, placemaking and environmental graphics, websites, campaigns, brochures, packaging and reports.",
      "I've done it for banking, biomedical and technology, and for action sports, education, hospitality and other creatives. Most recently, more of it in ag tech and the nonprofit world.",
    ],
  },
  {
    heading: "How I work",
    body: [
      "You get me at every stage — research, strategy, ideation, execution and delivery. Nobody hands your project to someone else once the work is won.",
      "I ask a lot of questions. Understanding your world is usually what makes the design work, and I'm told things run more smoothly when I'm involved.",
      "I work on my own or inside your team, and bring in copywriters, illustrators, photographers and developers when a project needs them.",
    ],
  },
  {
    heading: "What I care about",
    body: [
      "I do my best work with people who care about community, equity and inclusivity. You don't have to be a nonprofit for us to be a good fit. It helps if those things matter to you too.",
    ],
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-14">
          <div className="grid items-start gap-10 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
            <Image
              src="/work/_studio/robinmaxwell-2f.webp"
              alt="Robin Maxwell"
              width={967}
              height={972}
              sizes="(max-width: 640px) 60vw, 240px"
              className="w-40 rounded-xs object-cover sm:w-full"
              priority
            />
            <div>
              <h1 className="font-display text-[2.5rem] leading-[1.08] tracking-[-0.02em]">
                Robin Maxwell
              </h1>
              <p className="mt-5 max-w-[46ch] text-lede text-ink-2">
                I&rsquo;m principal and art director of Swivel Studio &mdash; a graphic
                designer working out of Seattle. For more than twenty years I&rsquo;ve
                helped organizations grow through design.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-rule">
          {sections.map((s) => (
            <section key={s.heading} className="border-b border-rule">
              <div className="mx-auto grid max-w-5xl gap-4 px-6 py-12 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
                <h2 className="font-display text-h2 tracking-tight text-balance">
                  {s.heading}
                </h2>
                <div className="flex max-w-[58ch] flex-col gap-4">
                  {s.body.map((p) => (
                    <p key={p} className="leading-[1.7] text-ink-2">{p}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-14">
            <h2 className="font-display text-h2 tracking-tight">Clients</h2>
            <div>
              <p className="text-base leading-[1.9] text-ink-2">{clients.join("  ·  ")}</p>
              <p className="mt-6 text-mid text-ink-3">
                Based in Seattle, working with clients anywhere.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
