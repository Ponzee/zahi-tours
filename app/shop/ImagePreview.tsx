"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt: string;
}

export default function ImagePreview({ src, alt }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0 flex cursor-zoom-in items-center justify-center bg-transparent"
        aria-label={`Open larger photo of ${alt}`}
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition group-hover:border-[#c2410c]/60" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View
        </span>
        <span className="sr-only">View larger photo</span>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/40 bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] w-full bg-[#f8f0e4]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 75vw"
                  priority
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center bg-[#1a1612] py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
