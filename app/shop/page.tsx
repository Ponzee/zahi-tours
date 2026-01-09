import { fetchActiveProducts } from "@/lib/shop";
import ShopGridClient from "./ShopGridClient";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await fetchActiveProducts();

  return (
    <div>
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
          <div className="mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src="/icons/holy_land_shop_logo.webp"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover shrink-0"
                  aria-hidden="true"
                />
                <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612] min-w-0">
                  The Holy Land shop
                </h1>
              </div>

              <p className="text-sm md:text-base text-[#3d3529] sm:ml-auto max-w-2xl sm:max-w-none sm:flex-1">
                Thoughtful journals, prints, and digital resources inspired by Zahi’s tours. Reserve
                your favorites below and be the first to know when they ship.
              </p>
            </div>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#e5ddd4] bg-white/50 p-8 text-center text-sm text-[#8a7c6a]">
              Zahi’s next handcrafted item is being photographed. Check back soon.
            </div>
          ) : (
            <ShopGridClient products={products} />
          )}

          <div className="mt-8 text-center text-sm text-[#3d3529]">
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
    </div>
  );
}
