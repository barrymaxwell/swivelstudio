import { Header, Cta, Footer } from "@/components/chrome";
import { Archive } from "./archive";

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
          Branding, events, logos, websites, campaigns, brochures, and environments.
          For over two decades, I’ve designed for organizations across sectors,
          from nonprofits to Fortune 500 companies. These case studies are a small
          selection; more work is available upon request.
        </p>
        <Archive />
      </main>
      <Cta />
      <Footer />
    </>
  );
}
