import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export default function ShopSuccessPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="rounded-2xl border border-[#e5ddd4] bg-white p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612] mb-4">
                Order Confirmed!
              </h1>
              <p className="text-base md:text-lg text-[#3d3529] mb-8">
                Thank you for your purchase. We've received your order and will send you a confirmation email shortly.
              </p>
              <p className="text-sm text-[#8a7c6a] mb-8">
                Your order is being processed and will ship soon. You'll receive tracking information once your item is on its way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="rounded-full bg-[#c2410c] text-white px-6 py-3 text-sm font-medium hover:bg-[#9a3412] transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="rounded-full border border-[#e5ddd4] bg-white text-[#1a1612] px-6 py-3 text-sm font-medium hover:bg-[#faf8f5] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

