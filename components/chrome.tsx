import Link from "next/link";
import { Mark } from "./logo";

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Swivel Studio, home">
          <Mark className="h-7 w-7 text-crest" />
          <span className="font-display text-[1.0625rem] tracking-tight">Swivel Studio</span>
        </Link>
        <nav className="flex gap-7 text-sm text-ink-2">
          <Link className="hover:text-crest-700" href="/work">Work</Link>
          <Link className="hover:text-crest-700" href="/about">About</Link>
          <Link className="hover:text-crest-700" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function Cta() {
  return (
    <section className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight">Let&rsquo;s work together.</h2>
        <p className="mt-3 max-w-md text-ink-2">
          Tell me about your project or goals &mdash; I look forward to talking.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a className="font-medium text-crest-700 underline underline-offset-4" href="mailto:robin@swivelstudio.com">
            robin@swivelstudio.com
          </a>
          <a className="text-crest-700 underline underline-offset-4" href="tel:+12063563063">
            (206) 356-3063
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-ink-3">
        <span>Swivel Studio &middot; Robin Maxwell, Principal &middot; Seattle, Washington</span>
        <a
          className="text-crest-700 underline underline-offset-2"
          href="https://www.linkedin.com/in/robinmaxwell/"
          rel="noopener"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
