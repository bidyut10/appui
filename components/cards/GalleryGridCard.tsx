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
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between p-3 pb-2">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900">
          Summer Collection
        </h3>
        <p className="text-[10px] text-neutral-400">24 photos · Jun 2026</p>
      </div>
      <Sun className="text-neutral-500" size={16} />
    </div>
    <div className="grid grid-cols-3 gap-1 px-3 pb-3">
      <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-xl">
        <Image
          src={img1}
          alt=""
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image src={img2} alt="" fill className="object-cover" />
      </div>
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image src={img3} alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <span className="text-xs font-semibold text-white">+21</span>
        </div>
      </div>
    </div>
  </div>
));
GalleryGridCard.displayName = "GalleryGridCard";
