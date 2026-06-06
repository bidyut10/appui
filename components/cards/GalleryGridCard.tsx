import React, { forwardRef } from "react";
import Image from "next/image";
import img1 from "@/public/dithar.png";
import img2 from "@/public/bg.png";
import img3 from "@/public/bh.png";
import { Sun } from "@/icons/Sun";

export const GalleryGridCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="p-3 pb-2 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900">
          Summer Collection
        </h3>
        <p className="text-[10px] text-neutral-400">24 photos · Jun 2026</p>
      </div>
      <Sun className="text-neutral-500" size={16} />
    </div>
    <div className="grid grid-cols-3 gap-1 px-3 pb-3">
      <div className="col-span-2 row-span-2 relative aspect-square rounded-xl overflow-hidden">
        <Image
          src={img1}
          alt=""
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image src={img2} alt="" fill className="object-cover" />
      </div>
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image src={img3} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white text-xs font-semibold">+21</span>
        </div>
      </div>
    </div>
  </div>
));
GalleryGridCard.displayName = "GalleryGridCard";
