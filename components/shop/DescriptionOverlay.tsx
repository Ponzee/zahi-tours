"use client";

import CheckoutButton from "@/components/shop/CheckoutButton";

type OverlayProduct = {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  currency: string;
  image_url: string | null;
};

export default function DescriptionOverlay({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: OverlayProduct;
}) {
  if (!open) return null;

  const priceLabel = (product.price_cents / 100).toLocaleString(undefined, {
    style: "currency",
    currency: product.currency.toUpperCase(),
  });

  return (
    <div
      className="absolute inset-0 z-10 bg-white/95 backdrop-blur-sm p-3 md:p-4 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${product.name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#c2410c]">
            Details
          </p>
          <h4 className="mt-0.5 text-sm md:text-base font-bold text-[#1a1612] truncate">
            {product.name}
          </h4>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-2 py-1 text-xs md:text-sm text-[#1a1612] hover:bg-[#f5f2ed] transition-colors"
        >
          Close
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#e5ddd4] pt-3">
        <span className="text-base md:text-lg font-semibold text-[#1a1612]">
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

      <div className="mt-3 flex-1 min-h-0 overflow-y-auto rounded-xl border border-[#e5ddd4] bg-[#faf8f5] p-3">
        {product.description ? (
          <p className="text-xs md:text-sm text-[#3d3529] leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
        ) : (
          <p className="text-xs text-[#8a7c6a]">No description yet.</p>
        )}
      </div>
    </div>
  );
}


