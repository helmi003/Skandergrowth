"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomLabel: string;
  closeLabel: string;
  caption?: string;
}

// Thumbnail that opens a fullscreen lightbox on press — same look as the results gallery.
// Rendered through a portal so transformed ancestors (hover lifts, reveal animations)
// can't trap the fixed overlay.
export function ZoomableImage({ src, alt, width, height, zoomLabel, closeLabel, caption }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={zoomLabel}
        className="group/zoom relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-md border border-border"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 90vw, 400px"
          className="object-cover object-top transition-transform duration-500 group-hover/zoom:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover/zoom:bg-ink/35">
          <span className="flex h-10 w-10 scale-75 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 shadow-lg transition-all duration-300 group-hover/zoom:scale-100 group-hover/zoom:opacity-100">
            <Maximize2 className="h-4 w-4" />
          </span>
        </span>
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
              style={{ animation: "rise-in 0.3s ease-out both" }}
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={closeLabel}
                className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              <div
                className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes="100vw"
                  className="h-auto max-h-[80vh] w-auto rounded-md object-contain shadow-2xl"
                  style={{ animation: "rise-in 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
                />
                {caption ? <p className="text-center text-sm text-white/80">{caption}</p> : null}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
