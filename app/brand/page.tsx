import { Header, Footer } from "@/components/chrome";
import { Mark, Lockup, Wordmark } from "@/components/logo";
import { Swatches } from "./swatches";
import { Downloads } from "./downloads";

// Internal reference. Unlisted: no nav link, not in the sitemap, noindex.
// Anyone with the URL can see it, and the repo is public. Nothing here is secret.
export const metadata = {
  title: "Brand",
  robots: { index: false, follow: false },
};

const eyebrow = "eyebrow text-ink-3";

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-rule py-14">
      <h2 className="font-display text-h2">{title}</h2>
      {intro && <p className="mt-3 max-w-[62ch] text-mid text-ink-2">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

const grounds = [
  { label: "On white", bg: "bg-surface border border-rule", fg: "text-crest" },
  { label: "On dark", bg: "bg-crest-900", fg: "text-surface" },
  { label: "On blue", bg: "bg-crest", fg: "text-surface" },
];

const scale = [
  { token: "display", size: "44–56px", use: "Page headlines. 44px on phones.", sample: "Branding & visual design", className: "font-display text-display" },
  { token: "h2", size: "28px", use: "Section headings", sample: "Cutting trees to grow healthy forests", className: "font-display text-h2" },
  { token: "lede", size: "19px", use: "Intro paragraphs", sample: "For over two decades I’ve helped organizations grow through design.", className: "text-lede" },
  { token: "base", size: "16px", use: "Body, nav", sample: "You get me at every stage — research, strategy, ideation, execution, and delivery.", className: "text-base" },
  { token: "mid", size: "15px", use: "Card text, secondary body", sample: "Collateral, reports, exhibits, signage, packaging.", className: "text-mid" },
  { token: "xs", size: "12px", use: "Eyebrows and meta. Uppercase, medium, 0.12em tracking.", sample: "Selected work", className: "eyebrow" },
];

export default function Brand() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <div className="pt-16 pb-14">
          <p className={eyebrow}>Internal · Not linked from the site</p>
          <h1 className="mt-4 font-display text-display">Brand</h1>
          <p className="mt-5 max-w-[52ch] text-lede text-ink-2">
            The Swivel Studio mark, colors, and type. Use it to make LinkedIn posts, decks,
            and anything else that should look like the site.
          </p>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-base">
            {[
              ["#logo", "Logo"],
              ["#color", "Color"],
              ["#type", "Type"],
              ["#voice", "Voice"],
              ["#open", "Open decisions"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-crest-700 underline decoration-crest-200 underline-offset-4 hover:decoration-crest-700">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <Section
          id="logo"
          title="Logo"
          intro="The lockup is the mark and the “swivel” wordmark. Each also works alone. Use the mark where the name already appears, or where space is tight. The header uses the mark at 40px."
        >
          <div className="space-y-14">
            {[
              { name: "Lockup", Art: Lockup, art: "h-auto w-3/4", src: "/brand/swivel-logo.svg", slug: "swivel-lockup", baseWidth: 1200, ratio: 124.126 / 533.978 },
              { name: "Wordmark", Art: Wordmark, art: "h-auto w-3/5", src: "/brand/swivel-wordmark.svg", slug: "swivel-wordmark", baseWidth: 1200, ratio: 92.533 / 362.107 },
              { name: "Mark", Art: Mark, art: "h-16 w-16", src: "/brand/swivel-mark.svg", slug: "swivel-mark", baseWidth: 512, ratio: 1 },
            ].map(({ name, Art, art, ...dl }) => (
              <div key={name}>
                <h3 className={eyebrow}>{name}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {grounds.map((g) => (
                    <figure key={g.label}>
                      <div className={`flex aspect-[3/2] items-center justify-center rounded-xs ${g.bg}`}>
                        <Art className={`${art} ${g.fg}`} />
                      </div>
                      <figcaption className="mt-2 text-xs text-ink-3">{g.label}</figcaption>
                    </figure>
                  ))}
                </div>
                <Downloads {...dl} />
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="color"
          title="Color"
          intro="Click a swatch to copy its hex value. The brand blue measures 2.65:1 on white, so it can't carry text. Use crest-700 for links and small text."
        >
          <Swatches />
        </Section>

        <Section
          id="type"
          title="Type"
          intro="Fraunces Light for headlines, Nunito Sans for everything else. Both are free on Google Fonts. The jumps between sizes carry the hierarchy, so nothing sits between 19 and 28px, or 28 and 56px."
        >
          <dl className="divide-y divide-rule border-y border-rule">
            {scale.map((s) => (
              <div key={s.token} className="grid gap-2 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <dt className="text-sm">
                  <span className="font-medium">{s.token}</span> <span className="text-ink-3">{s.size}</span>
                  <span className="mt-1 block text-xs text-ink-3">{s.use}</span>
                </dt>
                <dd className={`${s.className} min-w-0`}>{s.sample}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="voice" title="Voice">
          <ul className="max-w-[62ch] list-disc space-y-2 pl-5 text-base text-ink-2">
            <li>Calm and assured, warm and approachable.</li>
            <li>Lead with the client&rsquo;s need and the design response. Say what Robin did.</li>
            <li>Specific details over big claims. Let the images carry the work.</li>
            <li>Oxford commas. Em dashes are rare, with a space on each side.</li>
          </ul>
          <p className="mt-6 text-base">
            <a
              href="https://github.com/barrymaxwell/swivelstudio/blob/main/VOICE-AND-TONE.md"
              className="text-crest-700 underline decoration-crest-200 underline-offset-4 hover:decoration-crest-700"
            >
              Read the full voice guide
            </a>
          </p>
        </Section>

        <Section id="open" title="Open decisions">
          <ul className="max-w-[62ch] list-disc space-y-2 pl-5 text-base text-ink-2">
                        <li>Clear space and minimum size for the lockup.</li>
            <li>LinkedIn templates for Illustrator and Figma.</li>
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
