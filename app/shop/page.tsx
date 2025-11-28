export default function ShopPage() {
  const products = [
    {
      id: 1,
      title: "Holy Land Travel Journal",
      description: "Beautifully designed journal for documenting your journey through the Holy Land.",
      price: "$24.99",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-journal",
    },
    {
      id: 2,
      title: "Jerusalem Map Print",
      description: "High-quality print of Zahi's favorite Jerusalem locations.",
      price: "$19.99",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-map",
    },
    {
      id: 3,
      title: "Digital Photo Pack",
      description: "Downloadable collection of Zahi's best Holy Land photography.",
      price: "$9.99",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-photos",
    },
    {
      id: 4,
      title: "Bible Sites Guidebook",
      description: "Comprehensive guidebook to biblical sites in the Holy Land.",
      price: "$29.99",
      image: "/placeholder-product.jpg",
      link: "https://example.com/zahi-guidebook",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Shop Holy Land Gifts
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Browse our collection of journals, maps, guides, and digital resources inspired by Zahi's tours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-[4/3] bg-neutral-200 flex items-center justify-center">
                <span className="text-sm text-neutral-500">Product Image</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg tracking-tight mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-700 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{product.price}</span>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-neutral-600">
          <p>More products coming soon!</p>
        </div>
      </div>
    </div>
  );
}

