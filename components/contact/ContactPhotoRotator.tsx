"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt?: string;
  /** ms */
  intervalMs?: number;
  /** ms */
  fadeMs?: number;
  className?: string;
};

export default function ContactPhotoRotator({
  images,
  alt = "Zahi Shaked",
  intervalMs = 4200,
  fadeMs = 700,
  className,
}: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mql) return;
    const onChange = () => setReduceMotion(!!mql.matches);
    onChange();
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    if (reduceMotion) return;
    const t = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [safeImages.length, intervalMs, reduceMotion]);

  if (safeImages.length === 0) return null;

  const active = idx % safeImages.length;

  return (
    <div className={className} aria-hidden="true">
      {safeImages.map((src, i) => {
        const isActive = i === active;
        return (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: reduceMotion ? "none" : `opacity ${fadeMs}ms ease-out`,
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 35vw, 100vw"
              quality={95}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}
    </div>
  );
}


