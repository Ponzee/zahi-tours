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
        className="w-full text-base md:text-lg font-semibold text-[#c2410c] hover:text-[#9a3412] transition-colors py-2 px-3 rounded-lg hover:bg-[#f5f2ed] flex items-center justify-center gap-2"
      >
        <span>{open ? "Hide item description" : "Show item description"}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-out overflow-hidden ${open ? "max-h-96 opacity-100 mt-3 overflow-y-auto custom-scrollbar" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <p className="text-sm md:text-base text-[#3d3529] leading-relaxed bg-white/70 rounded-2xl p-4 border border-[#f0e6da] shadow-sm">
          {text}
        </p>
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 12px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f5f2ed;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #c2410c;
            border-radius: 10px;
            border: 2px solid #f5f2ed;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #9a3412;
          }
        `}</style>
      </div>
    </div>
  );
}
