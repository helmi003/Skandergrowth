"use client";

import { useEffect, useRef } from "react";

// A vertical track whose fill follows how far the parent list has been
// scrolled through. Position it with className (e.g. `absolute start-6`).
export function ScrollProgressLine({ className }: { className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = track.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      fill.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={trackRef} aria-hidden="true" className={className}>
      <div className="h-full w-full rounded-full bg-[var(--color-border)]" />
      <div
        ref={fillRef}
        className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
