"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimationControls } from "@/components/animation-controls";
import type { ScrollCapture } from "@/lib/work";

// Arrival times at Connect, Control, and Grow in portfolio-home-scroll.
const sectionTimes = [2700, 7560, 12960];

export function ScrollingLaptop({ source, poster, alt, sizes, width, height }: {
  source: ScrollCapture;
  poster: string;
  alt: string;
  sizes: string;
  width: number;
  height: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLImageElement>(null);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [jump, setJump] = useState<{ index: number; revision: number } | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion || started || !container.current) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: .25 });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [reducedMotion, started]);

  useEffect(() => {
    if (!jump || reducedMotion) return;
    const animation = strip.current?.getAnimations()[0];
    if (animation) animation.currentTime = sectionTimes[jump.index];
  }, [jump, reducedMotion]);

  function toggle() {
    setStarted(true);
    setPaused(value => !value);
  }

  const offsets = [source.connectOffset, source.controlOffset, source.endOffset];

  function navigate(direction: number) {
    let current = jump?.index ?? 0;
    const image = strip.current;
    if (!reducedMotion && image && started && image.clientHeight) {
      const transform = window.getComputedStyle(image).transform;
      const offset = transform === "none" ? 0 : -new DOMMatrixReadOnly(transform).m42 / image.clientHeight * 100;
      current = offsets.reduce((closest, value, index) =>
        Math.abs(value - offset) < Math.abs(offsets[closest] - offset) ? index : closest, 0);
    }
    setStarted(true);
    setJump(value => ({
      index: (current + direction + offsets.length) % offsets.length,
      revision: (value?.revision ?? 0) + 1,
    }));
  }

  return (
    <div ref={container} className="portfolio-animation relative pb-14 sm:pb-0">
      <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }} role="img" aria-label={alt}>
        <Image src={poster} alt="" fill sizes={sizes} className="object-contain" />
        <div
          aria-hidden="true"
          className="absolute overflow-hidden"
          style={{ left: `${238 / 1536 * 100}%`, top: `${186 / 1024 * 100}%`, width: `${1061 / 1536 * 100}%`, height: `${627 / 1024 * 100}%` }}
        >
          <Image src={source.nav} alt="" width={1061} height={37} sizes={sizes} className="absolute top-0 left-0 w-full" style={{ height: `${37 / 627 * 100}%` }} />
          <div className="absolute right-0 bottom-0 left-0 overflow-hidden" style={{ height: `${590 / 627 * 100}%` }}>
            <Image
              ref={strip}
              src={source.strip}
              alt=""
              width={source.stripW}
              height={source.stripH}
              sizes={sizes}
              className="portfolio-scroll-image block h-auto w-full max-w-none"
              style={{
                "--scroll-connect": `${-source.connectOffset}%`,
                "--scroll-control": `${-source.controlOffset}%`,
                "--scroll-end": `${-source.endOffset}%`,
                "--scroll-end-settle": `${-source.endOffset + .18}%`,
                animationName: started && !reducedMotion ? "portfolio-home-scroll" : "none",
                animationPlayState: paused ? "paused" : "running",
                transform: reducedMotion && jump ? `translateY(${-offsets[jump.index]}%)` : undefined,
              } as CSSProperties}
            />
          </div>
        </div>
      </div>
      <AnimationControls
        vertical
        paused={paused}
        onToggle={toggle}
        onPrevious={() => navigate(-1)}
        onNext={() => navigate(1)}
      />
    </div>
  );
}
