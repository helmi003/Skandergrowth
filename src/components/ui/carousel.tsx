"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  /** Width of each slide, e.g. "w-[85%] md:w-[calc((100%-1.25rem)/2)]". */
  slideClassName: string;
  labels: { prev: string; next: string };
  className?: string;
}

// Swipeable scroll-snap carousel with arrows and dots. Native scrolling does the
// work (touch, trackpad, keyboard); the controls just scroll by one slide.
// Works in RTL, where scrollLeft runs from 0 down to negative values.
export function Carousel({ children, slideClassName, labels, className }: CarouselProps) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const offset = Math.abs(track.scrollLeft);
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(offset <= 4);
    setAtEnd(offset >= max - 4);
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
    // At the far end, the last dot should light up even if several slides fit.
    setActive(offset >= max - 4 ? slides.length - 1 : Math.round(offset / step));
  }, [slides.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    const rtl = getComputedStyle(track).direction === "rtl";
    const start = rtl ? track.clientWidth - slide.offsetLeft - slide.offsetWidth : slide.offsetLeft;
    track.scrollTo({ left: rtl ? -start : start, behavior: "smooth" });
  };

  const step = (dir: 1 | -1) => goTo(Math.min(Math.max(active + dir, 0), slides.length - 1));

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-paper text-ink shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className="relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pt-2 pb-6 [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div key={i} className={cn("flex shrink-0 snap-start *:w-full", slideClassName)}>
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${i + 1} / ${slides.length}`}
              aria-current={i === active ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label={labels.prev} className={arrow}>
            <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
          <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label={labels.next} className={arrow}>
            <ChevronRight className="h-5 w-5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
