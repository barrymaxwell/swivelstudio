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

const linkedin = "https://www.linkedin.com/in/robinmaxwell/";

function LinkedIn({ className = "" }: { className?: string }) {
  return (
    <a
      className={`inline-flex items-center gap-2 transition-colors ${className}`}
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
      LinkedIn
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const email = "robin@swivelstudio.com";
const pitch = "I look forward to talking about your project.";

function Fine({ year, className = "" }: { year: number; className?: string }) {
  return (
    <p className={`text-sm text-pretty ${className}`}>
      {`© ${year} Swivel Studio · Seattle`}
    </p>
  );
}

/** The invitation and email stacked on the left. LinkedIn and fine print below. */
function FooterSplit({ cta, year }: { cta: boolean; year: number }) {
  return (
    <div className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-5xl px-6">
        {cta && (
          <div className="pt-12 pb-10">
            <h2 className="font-display text-h2">Let&rsquo;s work together.</h2>
            <p className="mt-2 text-pretty text-ink-2">{pitch}</p>
            <div className="mt-5"><CopyEmail email={email} /></div>
          </div>
        )}
        <div className={`flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pb-8 ${cta ? "" : "pt-8"}`}>
          <LinkedIn className="text-sm text-ink-3 hover:text-crest-700" />
          <Fine year={year} className="text-ink-3" />
        </div>
      </div>
    </div>
  );
}

/** One footer for every page. The header already carries the site nav. */
export function Footer({ cta = true }: { cta?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <FooterSplit cta={cta} year={year} />
    </footer>
  );
}
