"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  // /work also owns /work/[slug], so a case study still marks Work as current.
  const current = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={
        "rounded-xs px-3 py-2.5 transition-colors hover:text-crest-700 " +
        (current ? "font-medium text-ink" : "text-ink-2")
      }
    >
      {children}
    </Link>
  );
}
