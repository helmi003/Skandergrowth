"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  width: number;
  height: number;
  platform: string;
  metric: string;
  title: string;
}

interface Labels {
  all: string;
  close: string;
  prev: string;
  next: string;
  zoom: string;
  showMore: string;
  showLess: string;
}

const INITIAL_COUNT = 6;

const platformTone: Record<string, string> = {
  Meta: "bg-[#0866ff]/10 text-[#0866ff]",
  Google: "bg-[#ea4335]/10 text-[#c5221f]",
  TikTok: "bg-[#0b1220]/10 text-[#0b1220]",
  Snapchat: "bg-[#fffc00]/60 text-[#5c5a00]",
  Organic: "bg-[var(--color-primary-soft)] text-[var(--color-primary)]",
  Tracking: "bg-[var(--color-accent)]/15 text-[#8a5a14]",
};

export function ResultsGallery({ items, labels }: { items: GalleryItem[]; labels: Labels }) {
  const platforms = useMemo(
    () => Array.from(new Set(items.map((i) => i.platform))),
    [items]
  );
  const [filter, setFilter] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const filtered = filter ? items.filter((i) => i.platform === filter) : items;

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (open === null) return;
    const rtl = document.documentElement.dir === "rtl";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const current = open !== null ? filtered[open] : null;

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist">
        {[null, ...platforms].map((p) => {
          const active = filter === p;
          return (
            <button
              key={p ?? "all"}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(p)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-300",
                active
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-white shadow-md"
                  : "border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-ink-soft)] hover:-translate-y-0.5 hover:border-[var(--color-ink)]/40 hover:text-[var(--color-ink)]"
              )}
            >
              {p ?? labels.all}
            </button>
          );
        })}
      </div>

      {/* Phones: swipeable snap carousel with every item (the next card peeks
          in as a hint). Tablet/desktop: grid, first INITIAL_COUNT until
          "show more". */}
      <div className="-mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setOpen(i)}
            aria-label={`${labels.zoom}: ${item.title}`}
            className={cn(
              "group flex h-full w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-paper)] text-start shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-ink)]/10 sm:w-full",
              !expanded && i >= INITIAL_COUNT && "sm:hidden"
            )}
            style={{ animation: "rise-in 0.6s cubic-bezier(0.16,1,0.3,1) both", animationDelay: `${Math.min(i, 8) * 60}ms` }}
          >
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-paper-soft)]">
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute end-3 top-3 flex h-9 w-9 scale-75 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink)] opacity-0 shadow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xl font-bold text-[var(--color-ink)]" dir="auto">
                  {item.metric}
                </span>
                <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-bold", platformTone[item.platform])}>
                  {item.platform}
                </span>
              </div>
              <p className="line-clamp-2 min-h-[2lh] text-sm leading-relaxed text-[var(--color-ink-soft)]">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length > INITIAL_COUNT ? (
        <div className="mt-4 hidden justify-center sm:flex">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-ink)]/40 hover:shadow-md"
          >
            {expanded ? labels.showLess : `${labels.showMore} (+${filtered.length - INITIAL_COUNT})`}
          </button>
        </div>
      ) : null}

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-ink)]/90 p-4 backdrop-blur-sm sm:p-8"
          style={{ animation: "rise-in 0.3s ease-out both" }}
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label={labels.close}
            className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.title}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="h-auto max-h-[75vh] w-auto rounded-[var(--radius-md)] object-contain shadow-2xl"
              style={{ animation: "rise-in 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
            />
            <div className="flex w-full items-center justify-between gap-4 text-white">
              <button
                onClick={() => step(-1)}
                aria-label={labels.prev}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </button>
              <div className="text-center">
                <div className="text-lg font-bold" dir="auto">
                  {current.metric}
                </div>
                <p className="text-sm text-white/75">{current.title}</p>
                <p className="mt-1 text-xs text-white/50" dir="ltr">
                  {(open ?? 0) + 1} / {filtered.length}
                </p>
              </div>
              <button
                onClick={() => step(1)}
                aria-label={labels.next}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
