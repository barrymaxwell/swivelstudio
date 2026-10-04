import Link from "next/link";
import { Mark } from "./logo";
import { CopyEmail } from "./copy-email";
import { StickyHeader } from "./sticky-header";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <StickyHeader>
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:py-6">
          <Link
            href="/"
            className="-m-2 inline-flex items-center p-2"
            aria-label="Swivel Studio, home"
          >
            <Mark className="h-10 w-10 text-crest" />
          </Link>
          {/* Three items fit at 375px, so no disclosure menu — hiding them behind
              a tap would cost discoverability for nothing. The links carry
              vertical padding instead, for a 44px target. */}
          <nav className="-mr-3 flex items-center gap-1 text-base text-ink-2 sm:gap-3">
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
    </StickyHeader>
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
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Mark className="h-8 w-8 text-crest" />
            <p className="mt-4 text-mid text-ink-2">
              <span className="font-semibold text-ink">Swivel Studio</span>
              <br />
              Robin Maxwell, Principal
              <br />
              Seattle, Washington
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">Site</h2>
            <ul className="mt-3 space-y-2 text-mid">
              <li><Link className="text-ink-2 hover:text-crest-700" href="/work">Work</Link></li>
              <li><Link className="text-ink-2 hover:text-crest-700" href="/about">About</Link></li>
              <li><Link className="text-ink-2 hover:text-crest-700" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div>
            {/* No email here: every page carries it in the CTA band directly
                above, and /contact leads with it. */}
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-3">Elsewhere</h2>
            <div className="mt-3 flex flex-col items-start gap-2.5">
              <a
                className="inline-flex items-center gap-2 text-mid text-ink-2 transition-colors hover:text-crest-700"
                href="https://www.linkedin.com/in/robinmaxwell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-rule pt-6 text-sm text-ink-3">
          &copy; {year} Swivel Studio
        </p>
      </div>
    </footer>
  );
}
