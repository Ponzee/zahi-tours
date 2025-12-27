"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  src: string;
  alt: string;
  images?: string[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  open?: boolean;
  setOpen?: (value: boolean) => void;
  hoverLabel?: string;
  sidePanel?: React.ReactNode;
}

export default function ImagePreview({
  src,
  alt,
  images,
  selectedIndex,
  onSelect,
  open,
  setOpen,
  hoverLabel = "View item",
  sidePanel,
}: ImagePreviewProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalIndex, setInternalIndex] = useState(0);

  const modalOpen = open !== undefined ? open : internalOpen;
  const setModalOpen = setOpen !== undefined ? setOpen : setInternalOpen;

  const activeIndex = selectedIndex !== undefined ? selectedIndex : internalIndex;
  const setActiveIndex = onSelect !== undefined ? onSelect : setInternalIndex;

  const gallery = images && images.length > 0 ? images : [src];
  const currentImage = useMemo(
    () => gallery[activeIndex] || gallery[0],
    [activeIndex, gallery]
  );

  // Preload all images when modal opens
  useEffect(() => {
    if (!modalOpen) return;
    
    gallery.forEach((imgSrc) => {
      const img = new window.Image();
      img.src = imgSrc;
    });
  }, [modalOpen, gallery]);

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
        <span className="pointer-events-none absolute bottom-[60px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/70 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {hoverLabel}
        </span>
        <span className="sr-only">View larger photo</span>
      </button>
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] items-start">
              <div className="relative overflow-hidden rounded-[30px] shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-b from-white/15 to-black/40 blur-2xl opacity-40 pointer-events-none" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[30px] bg-[#0b0b0b] max-h-[80vh]">
                  {/* Render only the active image (preload effect above handles the rest) */}
                  <Image
                    key={currentImage}
                    src={currentImage}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 60vw"
                    priority
                  />

                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute top-4 right-4 rounded-full bg-[#1a1612]/75 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-black"
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

              {sidePanel && (
                <div className="max-h-[80vh] overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <div className="max-h-[80vh] overflow-y-auto p-5 md:p-6">
                    {sidePanel}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
