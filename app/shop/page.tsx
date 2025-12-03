import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      title: "Holy Land Travel Journal",
      description: "Beautifully designed journal for documenting your journey through the Holy Land.",
      price: "$24.99",
      status: "Ships worldwide soon",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-journal",
    },
    {
      id: 2,
      title: "Jerusalem Map Print",
      description: "High-quality print of Zahi's favorite Jerusalem locations.",
      price: "$19.99",
      status: "Limited run planned",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-map",
    },
    {
      id: 3,
      title: "Digital Photo Pack",
      description: "Downloadable collection of Zahi's best Holy Land photography.",
      price: "$9.99",
      status: "Instant download",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-photos",
    },
    {
      id: 4,
      title: "Bible Sites Guidebook",
      description: "Comprehensive guidebook to biblical sites in the Holy Land.",
      price: "$29.99",
      status: "Pre-orders opening soon",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-guidebook",
    },
  ];

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

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="rounded-2xl border border-[#e5ddd4] bg-[#f5f2ed] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-[#c2410c] text-sm font-medium">
                  Product preview
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg tracking-tight text-[#1a1612]">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#3d3529] mt-3 mb-4 leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="text-sm text-[#8a7c6a] mb-4">{product.status}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#1a1612]">{product.price}</span>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#c2410c] text-white px-4 py-2 text-sm font-medium hover:bg-[#9a3412] transition-colors"
                    >
                      Join list
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

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
