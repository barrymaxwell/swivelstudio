"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimationControls } from "@/components/animation-controls";

const slideDuration = 3000;

export function ImageCarousel({ frames, alt, width, height, sizes }: {
  frames: string[];
  alt: string;
  width: number;
  height: number;
  sizes: string;
}) {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [slide, setSlide] = useState({ current: 0, previous: 0 });

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || frames.length < 2) return;
    const timeout = window.setTimeout(() => {
      setSlide(({ current }) => ({ previous: current, current: (current + 1) % frames.length }));
    }, slideDuration);
    return () => window.clearTimeout(timeout);
  }, [paused, reducedMotion, frames.length, slide.current]);

  function navigate(direction: number) {
    setSlide(({ current }) => ({
      previous: current,
      current: (current + direction + frames.length) % frames.length,
    }));
  }

  return (
    <div className="portfolio-animation relative pb-14 sm:pb-0">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }} role="img" aria-label={alt}>
        {frames.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes={sizes}
            className={"portfolio-carousel-slide object-contain" + (index === slide.current && slide.current !== slide.previous ? " is-active" : "")}
            style={{
              opacity: index === slide.current || index === slide.previous ? 1 : 0,
              zIndex: index === slide.current ? 2 : index === slide.previous ? 1 : 0,
            }}
          />
        ))}
      </div>
      {frames.length > 1 && <AnimationControls
        paused={paused}
        onToggle={() => setPaused(value => !value)}
        onPrevious={() => navigate(-1)}
        onNext={() => navigate(1)}
      />}
    </div>
  );
}
