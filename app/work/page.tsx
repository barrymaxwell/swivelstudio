import { Header, Cta, Footer } from "@/components/chrome";
import { Archive } from "./archive";
import { archive } from "@/lib/work";

export const metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
  description:
    "Every project — brand identity, event branding, annual reports, campaigns and websites for Pacific Crest Savings Bank, Plum Creek, TrueBlue, Concord International School and more.",
};

export default function Work() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-display text-[2.5rem] leading-[1.08] tracking-[-0.02em]">
          All work
        </h1>
        <p className="mt-4 max-w-[52ch] text-lede text-ink-2">
          {archive.length} pieces of work across branding, events, print and digital.
          The homepage has the longer stories.
        </p>
        <Archive />
      </main>
      <Cta />
      <Footer />
    </>
  );
}
