"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt: string;
  images?: string[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  open?: boolean;
  setOpen?: (value: boolean) => void;
}

export default function ImagePreview({
  src,
  alt,
  images,
  selectedIndex,
  onSelect,
  open,
  setOpen,
}: ImagePreviewProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalIndex, setInternalIndex] = useState(0);

  const modalOpen = open !== undefined ? open : internalOpen;
  const setModalOpen = setOpen !== undefined ? setOpen : setInternalOpen;

  const activeIndex = selectedIndex !== undefined ? selectedIndex : internalIndex;
  const setActiveIndex = onSelect !== undefined ? onSelect : setInternalIndex;

  const gallery = images && images.length > 0 ? images : [src];
  const currentImage = gallery[activeIndex] || gallery[0];

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
      if (event.key === "ArrowRight" && gallery.length > 1) {
        setActiveIndex((activeIndex + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft" && gallery.length > 1) {
        setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen, activeIndex, gallery.length, setActiveIndex, setModalOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="absolute inset-0 flex cursor-zoom-in items-center justify-center bg-transparent"
        aria-label={`Open larger photo of ${alt}`}
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition group-hover:border-[#c2410c]/60" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-[76px] left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View
        </span>
        <span className="sr-only">View larger photo</span>
      </button>
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative overflow-hidden rounded-[30px] shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-white/15 to-black/40 blur-2xl opacity-40 pointer-events-none" />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[30px] bg-[#0b0b0b] max-h-[80vh]">
                <Image
                  src={currentImage}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                  priority
                />
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute bottom-[98px] left-1/2 -translate-x-1/2 rounded-full bg-[#1a1612]/85 px-12 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-black"
                >
                  Close
                </button>
                {gallery.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-4">
                    {gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-[72px] w-[72px] rounded-full border-2 border-white/70 shadow-sm transition ${
                          activeIndex === idx ? "bg-white" : "bg-white/30"
                        }`}
                        aria-label={`Show image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
