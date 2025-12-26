import SiteFooter from "@/components/SiteFooter";
import { fetchActiveProducts } from "@/lib/shop";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";
import CheckoutButton from "@/components/shop/CheckoutButton";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await fetchActiveProducts();

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <main id="main-content" className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12 md:mb-16">
            <p className="uppercase text-xs font-semibold tracking-wide text-[#c2410c]">
              Coming soon
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1612] mb-4">
              Shop Holy Land Gifts
            </h1>
            <p className="text-base md:text-lg text-[#3d3529] max-w-2xl mx-auto">
              Thoughtful journals, prints, and digital resources inspired by Zahi’s tours.
              Reserve your favorites below and be the first to know when they ship.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#e5ddd4] bg-white/50 p-8 text-center text-sm text-[#8a7c6a]">
              Zahi’s next handcrafted item is being photographed. Check back soon.
            </div>
          ) : (
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                return (
                <article
                  key={product.id}
                  className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col"
                >
                  <ProductGallery
                    alt={product.name}
                    imageUrl={product.image_url}
                    imageUrls={(product as any).image_urls || undefined}
                  />
                  <div className="p-5 md:p-6 flex-1 flex flex-col min-h-0">
                    <h3 className="font-bold text-xl tracking-tight text-[#1a1612] mb-4">
                      {product.name}
                    </h3>
                    {/* Price and button - always visible at top */}
                    <div className="mb-4 pb-4 border-b border-[#e5ddd4] flex items-baseline justify-between flex-shrink-0">
                      <span className="text-2xl font-semibold text-[#1a1612]">
                        {(product.price_cents / 100).toLocaleString(undefined, {
                          style: "currency",
                          currency: product.currency.toUpperCase(),
                        })}
                      </span>
                      <CheckoutButton
                        productId={product.id}
                        productName={product.name}
                        priceCents={product.price_cents}
                        currency={product.currency}
                        imageUrl={product.image_url}
                      />
                    </div>
                    {/* Description - expands below price/button */}
                    <div className="flex-1 w-full min-h-0 overflow-hidden">
                      <ProductDescription text={product.description} />
                    </div>
                  </div>
                </article>
              );
            })}
            </div>
          )}

          <div className="mt-12 text-center text-sm text-[#3d3529]">
            <p>
              Want to suggest merch ideas? Email{" "}
              <a href="mailto:zahishaked@gmail.com" className="text-[#c2410c] font-semibold hover:text-[#9a3412]">
                zahishaked@gmail.com
              </a>{" "}
              with your request.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
