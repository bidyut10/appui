import React, { forwardRef } from "react";
import Image from "next/image";
import productImage from "@/public/dbg.png";
import { Star } from "@/icons/Star";
import { Heart } from "@/icons/Heart";

export const ProductImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-60 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="relative h-44 overflow-hidden bg-neutral-50">
      <Image
        src={productImage}
        alt="Product"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono uppercase tracking-wider rounded-full">
        New
      </span>
      <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-110">
        <Heart size={13} className="text-neutral-600" />
      </button>
      <div className="absolute bottom-0 inset-x-0 h-12 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
        <span className="text-[10px] text-white font-medium tracking-wide uppercase">
          Quick View
        </span>
      </div>
    </div>

    <div className="p-4">
      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
        Studio Collection
      </p>
      <h3 className="text-sm font-semibold text-neutral-900 mb-2 leading-snug">
        Minimal Desk Lamp — Matte Black
      </h3>
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={10} className="text-amber-400" />
        ))}
        <span className="text-[10px] text-neutral-400 ml-1">(128)</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-base font-semibold text-neutral-900">$89</span>
          <span className="text-xs text-neutral-400 line-through ml-1.5">
            $120
          </span>
        </div>
        <button className="px-3.5 py-1.5 bg-neutral-900 text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors cursor-pointer active:scale-95">
          Add
        </button>
      </div>
    </div>
  </div>
));
ProductImageCard.displayName = "ProductImageCard";
