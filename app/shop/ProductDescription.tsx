"use client";

import { useState } from "react";

interface ProductDescriptionProps {
  text: string | null;
}

export default function ProductDescription({ text }: ProductDescriptionProps) {
  const [open, setOpen] = useState(false);

  if (!text) return null;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="text-sm font-semibold text-[#c2410c] underline-offset-4 transition-colors hover:text-[#9a3412]"
      >
        {open ? "Hide item description" : "Show item description"}
      </button>
      <div
        className={`transition-all duration-300 ease-out overflow-hidden ${open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <p className="text-sm md:text-base text-[#3d3529] leading-relaxed bg-white/70 rounded-2xl p-4 border border-[#f0e6da] shadow-sm">
          {text}
        </p>
      </div>
    </div>
  );
}
