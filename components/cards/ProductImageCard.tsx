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
    className={`group w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative h-44 overflow-hidden bg-neutral-50">
      <Image
        src={productImage}
        alt="Product"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 rounded-full bg-neutral-50/20 px-2 py-0.5 font-mono text-[10px] tracking-wider text-white uppercase">
        New
      </span>
      <button className="absolute top-3 right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 hover:scale-110">
        <Heart size={13} className="text-neutral-600" />
      </button>
      <div className="absolute inset-x-0 bottom-0 flex h-12 items-end justify-center bg-linear-to-t from-black/30 to-transparent pb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-[10px] font-medium tracking-wide text-white uppercase">
          Quick View
        </span>
      </div>
    </div>

    <div className="p-4">
      <p className="mb-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
        Studio Collection
      </p>
      <h3 className="mb-2 text-sm leading-snug font-semibold text-neutral-900">
        Minimal Desk Lamp — Matte Black
      </h3>
      <div className="mb-3 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={10} className="text-amber-400" />
        ))}
        <span className="ml-1 text-[10px] text-neutral-400">(128)</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-base font-semibold text-neutral-900">$89</span>
          <span className="ml-1.5 text-xs text-neutral-400 line-through">
            $120
          </span>
        </div>
        <button className="cursor-pointer rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95">
          Add
        </button>
      </div>
    </div>
  </div>
));
ProductImageCard.displayName = "ProductImageCard";
