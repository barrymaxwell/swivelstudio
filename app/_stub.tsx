import Link from "next/link";

export function Stub({ title, note }: { title: string; note: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link href="/" className="text-xs uppercase tracking-[0.14em] text-ink-3">
        &larr; Swivel Studio
      </Link>
      <h1 className="mt-10 font-display text-4xl leading-[1.1] tracking-tight text-balance">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{note}</p>
      <p className="mt-8 text-sm">
        <a className="text-crest underline underline-offset-4" href="mailto:robin@swivelstudio.com">
          robin@swivelstudio.com
        </a>
        <span className="mx-3 text-ink-3">&middot;</span>
        <a className="text-crest underline underline-offset-4" href="tel:+12063563063">
          (206) 356-3063
        </a>
      </p>
    </main>
  );
}
