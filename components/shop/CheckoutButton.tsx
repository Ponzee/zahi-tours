"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  productId: string;
  productName: string;
  disabled?: boolean;
}

export default function CheckoutButton({
  productId,
  productName,
  disabled = false,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (loading || disabled) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/stripe/create-shop-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={handleCheckout}
        disabled={loading || disabled}
        className={`rounded-full bg-[#c2410c] text-white px-4 py-2 text-sm font-medium transition-all ${
          loading || disabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-[#9a3412] active:scale-95"
        }`}
        aria-label={`Buy ${productName}`}
      >
        {loading ? "Loading..." : "Buy Now"}
      </button>
      {error && (
        <p className="text-xs text-red-600 text-right max-w-[200px]">{error}</p>
      )}
    </div>
  );
}


