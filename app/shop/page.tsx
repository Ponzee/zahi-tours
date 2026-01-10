import { fetchActiveProducts } from "@/lib/shop";
import ShopGridClient from "./ShopGridClient";

export const revalidate = 60;

export default async function ShopPage() {
  const products = await fetchActiveProducts();

  const shopIntro = (
    <>
      I choose these pieces with care in Jerusalem, and many are blessed at holy sites here in the
      city. For some purchases, I’ll film a short blessing video so you can share the moment from
      the Holy Land. Thank you for your support – it helps me keep creating.
    </>
  );

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

                {/* A/B/C styling variants for live review */}
                <div className="mt-5 max-w-2xl mx-auto">
                  <div className="rounded-2xl border border-[#e5ddd4] bg-[#faf8f5] px-6 py-4 shadow-sm text-left">
                    <div className="flex items-center justify-end">
                      <span className="text-[#c2410c]/70" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M7.2 17.2H4.4c-1 0-1.8-.8-1.8-1.8v-2.9C2.6 9.7 4.1 7.1 6.8 5.4c.7-.4 1.6-.2 2 .5.4.7.2 1.6-.5 2-1.8 1.1-2.8 2.8-2.8 4.6v.2h1.7c1 0 1.8.8 1.8 1.8v2.7c0 1-.8 1.8-1.8 1.8zm14.2 0h-2.8c-1 0-1.8-.8-1.8-1.8v-2.9c0-2.8 1.5-5.4 4.2-7.1.7-.4 1.6-.2 2 .5.4.7.2 1.6-.5 2-1.8 1.1-2.8 2.8-2.8 4.6v.2h1.7c1 0 1.8.8 1.8 1.8v2.7c0 1-.8 1.8-1.8 1.8z" />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] md:text-base leading-relaxed text-[#3d3529] italic">
                      {shopIntro}
                    </p>
                  </div>
                </div>
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
