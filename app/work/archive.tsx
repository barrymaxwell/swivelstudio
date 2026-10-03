"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { archive, allTags } from "@/lib/work";

type Filter = "All" | (typeof allTags)[number];

export function Archive() {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: archive.length };
    for (const t of allTags) c[t] = archive.filter((e) => e.tags.includes(t)).length;
    return c;
  }, []);

  const shown = filter === "All" ? archive : archive.filter((e) => e.tags.includes(filter));

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter work">
        {(["All", ...allTags] as Filter[]).map((t) => {
          const on = t === filter;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              aria-pressed={on}
              className={
                "rounded-xs border px-3 py-1.5 text-mid transition-colors " +
                (on
                  ? "border-crest-700 bg-crest-700 text-white"
                  : "border-rule text-ink-2 hover:border-crest-600 hover:text-crest-700")
              }
            >
              {t}
              <span className={"ml-1.5 tabular-nums " + (on ? "text-crest-100" : "text-ink-3")}>
                {counts[t]}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {shown.length} {shown.length === 1 ? "project" : "projects"} shown
      </p>

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((e) => (
          <Link key={e.key} href={e.href} className="group block">
            <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-rule-2">
              <Image
                src={e.image.src}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-ink-3">
              {e.client}
            </p>
            <h2 className="mt-1 text-mid font-semibold tracking-tight group-hover:text-crest-700">
              {e.title}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}
