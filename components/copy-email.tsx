"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type State = "idle" | "copied" | "failed";

async function copy(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through — permissions, or an insecure context */
  }
  // Fallback for older Safari and non-HTTPS origins.
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.cssText = "position:fixed;top:-9999px;opacity:0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  } catch {
    return false;
  }
}

/** Last resort: put the address under the user's cursor so the hint works. */
function selectEmailText() {
  const el = document.querySelector("[data-copy-email]");
  if (!el) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

export function CopyEmail({
  email,
  variant = "inline",
}: {
  email: string;
  variant?: "display" | "inline";
}) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const onClick = useCallback(async () => {
    const ok = await copy(email);
    if (!ok) selectEmailText();
    setState(ok ? "copied" : "failed");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }, [email]);

  const display = variant === "display";
  const done = state === "copied";
  const mod =
    typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform)
      ? "\u2318"
      : "Ctrl+";

  return (
    <span className={display ? "inline-flex flex-wrap items-center gap-x-3 gap-y-1" : "inline-flex items-center gap-2"}>
      <button
        type="button"
        onClick={onClick}
        aria-label={`Copy email address ${email}`}
        className={
          display
            ? "group inline-flex items-center gap-3 font-display text-2xl text-crest-700 transition-colors hover:text-crest-800"
            : "group inline-flex items-center gap-2 text-base font-medium text-crest-700 transition-colors hover:text-crest-800"
        }
      >
        <span
          data-copy-email
          className={
            display
              ? "underline decoration-crest-200 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-crest"
              : "underline decoration-crest-200 underline-offset-4 transition-colors group-hover:decoration-crest"
          }
        >
          {email}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={display ? "h-5 w-5 shrink-0" : "h-4 w-4 shrink-0"}
        >
          {done ? (
            <polyline points="4 12.5 9.5 18 20 6.5" />
          ) : (
            <>
              <rect x="9" y="9" width="12" height="12" rx="2.5" />
              <path d="M5.5 15H4.8A1.8 1.8 0 0 1 3 13.2V4.8A1.8 1.8 0 0 1 4.8 3h8.4A1.8 1.8 0 0 1 15 4.8v.7" />
            </>
          )}
        </svg>
      </button>

      {/* Always mounted so screen readers announce the change; the text itself
          is what appears and disappears. An opacity toggle was unreliable. */}
      <span aria-live="polite" className={display ? "text-sm" : "text-xs"}>
        {done && (
          <span className="inline-flex items-center gap-1.5 text-crest-700">
            Copied
          </span>
        )}
        {state === "failed" && (
          <span className="text-ink-3">Press {mod}C to copy</span>
        )}
      </span>
    </span>
  );
}
