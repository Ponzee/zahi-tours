import Image from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { fetchActiveProducts } from "@/lib/shop";
import ImagePreview from "./ImagePreview";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await fetchActiveProducts();

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
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
              {products.map((product) => (
                <article
                  key={product.id}
                  className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-amber-50">
                    {product.image_url ? (
                      <>
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="object-cover object-[50%_80%]"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        <ImagePreview src={product.image_url} alt={product.name} />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#c2410c] text-sm font-medium">
                        Photo coming soon
                      </div>
                    )}
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-xl tracking-tight text-[#1a1612]">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#3d3529] mt-3 mb-4 leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-semibold text-[#1a1612]">
                        {(product.price_cents / 100).toLocaleString(undefined, {
                          style: "currency",
                          currency: product.currency.toUpperCase(),
                        })}
                      </span>
                      <button
                        className="rounded-full bg-[#c2410c] text-white px-4 py-2 text-sm font-medium opacity-60 cursor-not-allowed"
                        disabled
                      >
                        Checkout coming soon
                      </button>
                    </div>
                  </div>
                </article>
              ))}
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
