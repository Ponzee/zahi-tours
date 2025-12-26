"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = () => {
    // Checkout functionality will be implemented with AllPay
    setError("Checkout is coming soon. Payment integration is being set up.");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto mb-6 text-[#e5ddd4]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612] mb-4">
                Your cart is empty
              </h1>
              <p className="text-base md:text-lg text-[#3d3529] mb-8">
                Add some holy items to your cart to get started.
              </p>
              <Link
                href="/shop"
                className="inline-block rounded-full bg-[#c2410c] text-white px-6 py-3 text-sm font-medium hover:bg-[#9a3412] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const currency = items[0]?.currency || "usd";

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612] mb-2">
              Shopping Cart
            </h1>
            <p className="text-base text-[#3d3529]">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="rounded-2xl border border-[#e5ddd4] bg-white p-4 md:p-6 flex gap-4"
                >
                  {item.imageUrl && (
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-[#f5f2ed]">
                      <Image
                        src={item.imageUrl}
                        alt={item.productName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg md:text-xl tracking-tight text-[#1a1612] mb-2">
                      {item.productName}
                    </h3>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-[#e5ddd4] bg-white hover:bg-[#f5f2ed] transition-colors flex items-center justify-center text-[#1a1612]"
                          aria-label="Decrease quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-base font-medium text-[#1a1612] min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-[#e5ddd4] bg-white hover:bg-[#f5f2ed] transition-colors flex items-center justify-center text-[#1a1612]"
                          aria-label="Increase quantity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg md:text-xl font-semibold text-[#1a1612]">
                          {((item.priceCents * item.quantity) / 100).toLocaleString(undefined, {
                            style: "currency",
                            currency: currency.toUpperCase(),
                          })}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-[#8a7c6a]">
                            {(item.priceCents / 100).toLocaleString(undefined, {
                              style: "currency",
                              currency: currency.toUpperCase(),
                            })}{" "}
                            each
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="mt-3 text-sm text-[#c2410c] hover:text-[#9a3412] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-[#e5ddd4] bg-white p-6 sticky top-24">
                <h2 className="text-xl font-bold tracking-tight text-[#1a1612] mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-[#3d3529]">
                    <span>Subtotal</span>
                    <span>
                      {(totalPrice / 100).toLocaleString(undefined, {
                        style: "currency",
                        currency: currency.toUpperCase(),
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-[#3d3529]">
                    <span>Shipping</span>
                    <span className="text-[#8a7c6a]">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-[#e5ddd4] pt-3">
                    <div className="flex justify-between text-lg font-bold text-[#1a1612]">
                      <span>Total</span>
                      <span>
                        {(totalPrice / 100).toLocaleString(undefined, {
                          style: "currency",
                          currency: currency.toUpperCase(),
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={true}
                  className="w-full rounded-full bg-[#c2410c] text-white px-4 py-3 text-sm font-medium opacity-60 cursor-not-allowed"
                >
                  Checkout Coming Soon
                </button>
                {error && (
                  <p className="mt-3 text-xs text-red-600 text-center">{error}</p>
                )}
                <Link
                  href="/shop"
                  className="block mt-4 text-center text-sm text-[#c2410c] hover:text-[#9a3412] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

