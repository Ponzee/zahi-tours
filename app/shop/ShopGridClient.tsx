"use client";

import { useState } from "react";
import ProductGallery from "./ProductGallery";
import CheckoutButton from "@/components/shop/CheckoutButton";

type ShopProductClient = {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  currency: string;
  image_url: string | null;
  image_urls?: string[] | null;
};

export default function ShopGridClient({ products }: { products: ShopProductClient[] }) {
  return (
    <>
      <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

function ShopProductCard({ product }: { product: ShopProductClient }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const priceLabel = (product.price_cents / 100).toLocaleString(undefined, {
    style: "currency",
    currency: product.currency.toUpperCase(),
  });

  const sidePanel = (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#c2410c]">
        View item
      </p>
      <h3 className="mt-1 text-lg md:text-2xl font-bold tracking-tight text-[#1a1612]">
        {product.name}
      </h3>

      <div className="mt-4 flex items-baseline justify-between gap-3 border-b border-[#e5ddd4] pb-3">
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
          <h4 className="text-sm font-semibold text-[#1a1612]">Description</h4>
          <p className="mt-2 text-sm md:text-base text-[#3d3529] leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
        </div>
      ) : (
        <p className="mt-4 text-sm text-[#8a7c6a]">No description yet.</p>
      )}

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="w-full rounded-full bg-[#1a1612] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <article className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      <ProductGallery
        alt={product.name}
        imageUrl={product.image_url}
        imageUrls={product.image_urls || undefined}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        open={open}
        setOpen={setOpen}
        hoverLabel="View item"
        sidePanel={sidePanel}
      />

      <div className="p-3 md:p-4 flex-1 flex flex-col min-h-0">
        <h3 className="font-bold text-base md:text-lg tracking-tight text-[#1a1612] mb-1">
          {product.name}
        </h3>

        {product.description ? (
          <p className="text-xs md:text-sm text-[#3d3529] leading-relaxed clamp-2">
            {product.description}
          </p>
        ) : (
          <p className="text-xs text-[#8a7c6a]">No description yet.</p>
        )}

        <div className="mt-1">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-xs md:text-sm font-semibold text-[#c2410c] hover:text-[#9a3412] transition-colors"
          >
            View item
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-[#e5ddd4] flex items-center justify-between gap-2">
          <span className="text-lg md:text-xl font-semibold text-[#1a1612]">
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
      </div>
    </article>
  );
}


