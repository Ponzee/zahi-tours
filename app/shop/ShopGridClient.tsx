"use client";

import { useMemo, useState } from "react";
import ProductGallery from "./ProductGallery";
import CheckoutButton from "@/components/shop/CheckoutButton";
import QuickViewModal from "@/components/shop/QuickViewModal";

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
  const [quickViewId, setQuickViewId] = useState<string | null>(null);

  const quickViewProduct = useMemo(() => {
    if (!quickViewId) return null;
    return products.find((p) => p.id === quickViewId) ?? null;
  }, [products, quickViewId]);

  return (
    <>
      <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => {
          const priceLabel = (product.price_cents / 100).toLocaleString(undefined, {
            style: "currency",
            currency: product.currency.toUpperCase(),
          });

          return (
            <article
              key={product.id}
              className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <ProductGallery
                alt={product.name}
                imageUrl={product.image_url}
                imageUrls={product.image_urls || undefined}
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

                <div className="mt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setQuickViewId(product.id)}
                    className="text-xs md:text-sm font-semibold text-[#c2410c] hover:text-[#9a3412] transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <QuickViewModal
        open={!!quickViewId}
        onClose={() => setQuickViewId(null)}
        product={
          quickViewProduct
            ? {
                id: quickViewProduct.id,
                name: quickViewProduct.name,
                description: quickViewProduct.description,
                price_cents: quickViewProduct.price_cents,
                currency: quickViewProduct.currency,
                image_url: quickViewProduct.image_url,
              }
            : null
        }
      />
    </>
  );
}


