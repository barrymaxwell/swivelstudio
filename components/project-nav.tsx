import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/work";

function Arrow({ dir = "right", className = "" }: { dir?: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${dir === "left" ? "rotate-180" : ""} ${className}`}
    >
      <path d="M3.5 10h13M11.5 5l5 5-5 5" />
    </svg>
  );
}

function Cover({ p, sizes }: { p: Project; sizes: string }) {
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-rule-2">
      <Image
        src={p.card.src}
        alt=""
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        style={{
          objectPosition: p.card.position,
          transform: p.card.scale ? `scale(${p.card.scale})` : undefined,
          transformOrigin: p.card.origin,
        }}
      />
    </div>
  );
}

const allWork =
  "inline-flex items-center gap-2 text-mid text-crest-700 underline decoration-crest-200 underline-offset-4 transition-colors hover:decoration-crest";

/** Previous and next as two small tiles under one heading row. */
function Pair({ prev, next }: { prev: Project; next: Project }) {
  const tile = (p: Project, dir: "left" | "right") => (
    <Link
      href={`/work/${p.slug}`}
      className={`group flex min-w-0 items-center gap-4 rounded-sm border border-rule bg-surface p-3 transition-colors hover:border-crest-200 ${dir === "right" ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      <div className="w-20 shrink-0 sm:w-28">
        <Cover p={p} sizes="112px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className={`flex items-center gap-1.5 eyebrow text-ink-3 ${dir === "right" ? "sm:justify-end" : ""}`}>
          {dir === "left" && <Arrow dir="left" className="h-3 w-3" />}
          {dir === "left" ? "Previous" : "Next"}
          {dir === "right" && <Arrow className="h-3 w-3" />}
        </p>
        <h3 className="mt-1 truncate text-base font-semibold transition-colors group-hover:text-crest-700">{p.client}</h3>
        <p className="mt-0.5 truncate text-mid text-ink-2">{p.cardCaption ?? p.disciplines.slice(0, 3).join(" · ")}</p>
      </div>
    </Link>
  );
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="eyebrow text-ink-3">More work</h2>
        <Link href="/work" className={allWork}>All work</Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {tile(prev, "left")}
        {tile(next, "right")}
      </div>
    </div>
  );
}

export function ProjectNav({ slug, projects }: { slug: string; projects: Project[] }) {
  const n = projects.length;
  const i = projects.findIndex((x) => x.slug === slug);
  // Wraps, so the last project still leads somewhere.
  const prev = projects[(i - 1 + n) % n];
  const next = projects[(i + 1) % n];
  return (
    <nav aria-label="More work" className="rule-contained">
      <Pair prev={prev} next={next} />
    </nav>
  );
}
