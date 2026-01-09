import { fetchActiveProducts } from "@/lib/shop";
import ShopGridClient from "./ShopGridClient";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await fetchActiveProducts();

  return (
    <div>
      <main id="main-content">
        <section className="py-4 md:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4">
                  <img
                    src="/icons/holy_land_shop_logo.webp"
                    alt=""
                    className="h-[72px] w-[72px] rounded-full object-cover"
                    aria-hidden="true"
                  />
                  <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612]">
                    The Holy Land shop
                  </h1>
                </div>
                <p className="mt-3 text-sm md:text-base text-[#3d3529] max-w-2xl mx-auto leading-relaxed">
                  I choose these pieces with care in Jerusalem and often bless them on location. For
                  some purchases, I’ll film a short blessing video so you can share the moment from
                  the Holy Land. Thank you for your support – it helps me keep creating.
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

            <div className="mt-8 text-sm text-[#3d3529]">
              <p>
                Want to suggest merch ideas? Email{" "}
                <a
                  href="mailto:zahishaked@gmail.com"
                  className="text-[#c2410c] font-semibold hover:text-[#9a3412]"
                >
                  zahishaked@gmail.com
                </a>{" "}
                with your request.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
