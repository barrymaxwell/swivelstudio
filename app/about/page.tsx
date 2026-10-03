import Image from "next/image";
import { Header, Cta, Footer } from "@/components/chrome";
import { clients } from "@/lib/work";

export const metadata = {
  title: "About",
  description:
    "Robin Maxwell is a graphic designer and art director in Seattle, working in brand identity, event design and print for over two decades.",
};

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-[168px_1fr] sm:gap-12">
          <Image
            src="/work/_studio/robinmaxwell-2f.webp"
            alt="Robin Maxwell"
            width={967}
            height={972}
            sizes="168px"
            className="h-42 w-42 rounded-xs object-cover"
            priority
          />
          <div>
            <h1 className="font-display text-4xl tracking-tight">Robin Maxwell</h1>
            <p className="mt-4 max-w-[58ch] text-lede text-ink-2">
              I&rsquo;m principal and art director of Swivel Studio &mdash; a graphic designer
              and creative thinker working out of Seattle, Washington.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          <section>
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">Ethos</h2>
            <p className="mt-3 leading-[1.7] text-ink-2">
              I&rsquo;m most driven when working on projects that align with my own values of
              community, equity, and inclusivity. This doesn&rsquo;t mean that you have to be a
              nonprofit for us to be a good fit; it does mean that I want these things to be
              important to you, too.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">Sweet spots</h2>
            <p className="mt-3 leading-[1.7] text-ink-2">
              My two great loves are identity creation and event branding, but I work across
              naming, placemaking and environmental graphics, websites, campaigns and
              brochures &mdash; for clients in banking, biomedical and technology, through to
              action sports, education, hospitality, and other creatives.
            </p>
          </section>

          <section className="sm:col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">How I work</h2>
            <p className="mt-3 max-w-[62ch] leading-[1.7] text-ink-2">
              Through each stage of a project &mdash; research, strategy, creative ideation,
              execution and delivery &mdash; my goal is to craft visual design solutions that
              achieve your brand and communication goals, helping you build the relationships
              that will sustain and grow your organization. I ask questions, I&rsquo;m curious,
              and I&rsquo;m empathetic. I&rsquo;m told that things run more smoothly when
              I&rsquo;m involved.
            </p>
            <p className="mt-4 max-w-[62ch] leading-[1.7] text-ink-2">
              I can work solo or integrate seamlessly into a team, and bring in copywriters,
              illustrators, photographers and developers as a project needs them.
            </p>
          </section>
        </div>

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">Clients</h2>
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
