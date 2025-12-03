"use client";

import { useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt: string;
}

export default function ImagePreview({ src, alt }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0"
        aria-label={`Open larger photo of ${alt}`}
      >
        <span className="sr-only">View larger photo</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white/90 p-4 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            >
              Close
            </button>
            <div className="relative mt-4 aspect-[3/4] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
