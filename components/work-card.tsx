import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/work";

export function WorkCard({
  p,
  compact = false,
  /** Set when another featured card shares this client, so the two TrueBlue
   *  entries don't appear as two identical headings. */
  disambiguate = false,
}: {
  p: Project;
  compact?: boolean;
  disambiguate?: boolean;
}) {
  return (
    <Link href={`/work/${p.slug}`} className="group block">
      <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-rule-2">
        <Image
          src={p.card.src}
          alt={p.card.alt ?? ""}
          fill
          sizes={compact ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: p.card.position }}
        />
      </div>
      <h3 className={`mt-4 font-semibold tracking-tight ${compact ? "text-mid" : "text-base"}`}>
        {p.client}
        {disambiguate && (
          <span className="font-normal text-ink-2"> &mdash; {p.title}</span>
        )}
      </h3>
      {!compact && (
        <>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-ink-3">
            {p.cardCaption ?? p.disciplines.slice(0, 3).join(" · ")}
          </p>
          <p className="mt-2 max-w-sm text-mid text-ink-2">
            {p.blurb.split(/(\*[^*]+\*)/g).map((part, index) =>
              part.startsWith("*") && part.endsWith("*")
                ? <em key={index}>{part.slice(1, -1)}</em>
                : part
            )}
          </p>
        </>
      )}
    </Link>
  );
}
