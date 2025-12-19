"use client";

import { useState } from "react";

interface ProductDescriptionProps {
  text: string | null;
}

export default function ProductDescription({ text }: ProductDescriptionProps) {
  const [open, setOpen] = useState(false);

  if (!text) return null;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-base md:text-lg font-semibold text-[#c2410c] hover:text-[#9a3412] transition-colors py-2 px-3 rounded-lg hover:bg-[#f5f2ed] flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2"
        aria-expanded={open}
        aria-controls="product-description"
      >
        <span>{open ? "Hide item description" : "Show item description"}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id="product-description"
        className={`transition-all duration-300 ease-out overflow-hidden ${open ? "opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <p className="text-sm md:text-base text-[#3d3529] leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
