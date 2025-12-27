"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import CheckoutButton from "@/components/shop/CheckoutButton";

type QuickViewProduct = {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  currency: string;
  image_url: string | null;
};

export default function QuickViewModal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: QuickViewProduct | null;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const priceLabel = useMemo(() => {
    if (!product) return "";
    return (product.price_cents / 100).toLocaleString(undefined, {
      style: "currency",
      currency: product.currency.toUpperCase(),
    });
  }, [product]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Close on route change/unmount safety
  useEffect(() => {
    return () => {
      try {
        dialogRef.current?.close();
      } catch {
        // ignore
      }
    };
  }, []);

  if (!product) return null;

  return (
    <dialog
      ref={dialogRef}
      className="w-[min(860px,92vw)] rounded-2xl p-0 backdrop:bg-black/40"
      onClose={onClose}
    >
      <div className="bg-white">
        <div className="flex items-start justify-between gap-4 p-4 md:p-6 border-b border-[#e5ddd4]">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c2410c]">
              Quick View
            </p>
            <h3 className="mt-1 text-lg md:text-2xl font-bold tracking-tight text-[#1a1612] truncate">
              {product.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm text-[#1a1612] hover:bg-[#f5f2ed] transition-colors"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="p-4 md:p-6 grid gap-5 md:gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="relative w-full overflow-hidden rounded-xl border border-[#e5ddd4] bg-[#f5f2ed]">
            <div className="relative w-full aspect-[3/4]">
              {product.image_url ? (
                <Image
                  src={product.image_url.replace(/\.avif$/, ".webp")}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 380px, 80vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-[#8a7c6a]">
                  No image
                </div>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-baseline justify-between gap-3 border-b border-[#e5ddd4] pb-3">
              <span className="text-xl md:text-2xl font-bold text-[#1a1612]">
                {priceLabel}
              </span>
              <CheckoutButton
                productId={product.id}
                productName={product.name}
                priceCents={product.price_cents}
                currency={product.currency}
                imageUrl={product.image_url}
              />
            </div>

            {product.description ? (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#1a1612]">
                  Description
                </h4>
                <p className="mt-2 text-sm md:text-base text-[#3d3529] leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            ) : (
              <p className="mt-4 text-sm text-[#8a7c6a]">No description yet.</p>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}


