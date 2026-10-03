import Link from "next/link";
import { Mark } from "./logo";
import { CopyEmail } from "./copy-email";

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="inline-flex items-center" aria-label="Swivel Studio, home">
          <Mark className="h-9 w-9 text-crest" />
        </Link>
        <nav className="flex gap-7 text-base text-ink-2">
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
        <h2 className="font-display text-h2 tracking-tight">Let&rsquo;s work together.</h2>
        <p className="mt-3 max-w-md text-ink-2">
          Tell me about your project or goals &mdash; I look forward to talking.
        </p>
        <div className="mt-6">
          <CopyEmail email="robin@swivelstudio.com" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-3">
        <span>Swivel Studio &middot; Robin Maxwell, Principal &middot; Seattle, Washington</span>
        <a
          className="text-ink-3 transition-colors hover:text-crest-700"
          href="https://www.linkedin.com/in/robinmaxwell/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Robin Maxwell on LinkedIn (opens in a new tab)"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
