"use client";

import { useEffect, useRef, useState } from "react";

/** Don't start hiding until the header has fully cleared the viewport top. */
const HIDE_AFTER = 120;
/** Ignore scrolls smaller than this, so a trackpad twitch can't flicker it. */
const DELTA = 8;

export function StickyHeader({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;

      if (Math.abs(diff) > DELTA) {
        // Always available at the top; otherwise hide going down, reveal going up.
        setHidden(y > HIDE_AFTER && diff > 0);
        lastY.current = y;
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "sticky top-0 z-50 bg-ground/95 backdrop-blur-md transition-transform duration-200 ease-out " +
        (hidden ? "-translate-y-full" : "translate-y-0")
      }
    >
      {children}
    </div>
  );
}
