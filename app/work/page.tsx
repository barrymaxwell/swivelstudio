import { Header, Cta, Footer } from "@/components/chrome";
import { WorkCard } from "@/components/work-card";
import { projects } from "@/lib/work";

export const metadata = {
  title: "Work",
  description:
    "Brand identity, event design, annual reports and websites for Pacific Crest Savings Bank, Plum Creek, TrueBlue, Concord International School and more.",
};

export default function Work() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-display text-4xl tracking-tight">All work</h1>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.slug} p={p} compact />
          ))}
        </div>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
