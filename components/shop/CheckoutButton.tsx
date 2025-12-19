"use client";

import { useCart } from "@/context/CartContext";

interface CheckoutButtonProps {
  productId: string;
  productName: string;
  priceCents: number;
  currency: string;
  imageUrl: string | null;
  disabled?: boolean;
}

export default function CheckoutButton({
  productId,
  productName,
  priceCents,
  currency,
  imageUrl,
  disabled = false,
}: CheckoutButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      productId,
      productName,
      priceCents,
      currency,
      imageUrl,
    });
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={handleAddToCart}
        disabled={disabled}
        className="rounded-full bg-[#c2410c] text-white px-4 py-2 text-sm font-medium transition-all hover:bg-[#9a3412] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        aria-label={`Add ${productName} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
}


