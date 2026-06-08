import React, { forwardRef } from "react";
import Image from "next/image";
import portrait from "@/public/dithar.png";
import { Heart } from "@/icons/Heart";

export const PortraitImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative h-80 w-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg ${className}`}
    {...props}
  >
    <Image
      src={portrait}
      alt="Portrait"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
    <button className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
      <Heart size={14} />
    </button>
    <div className="absolute bottom-0 p-4">
      <p className="mb-1 font-mono text-[10px] tracking-widest text-white/50 uppercase">
        Portrait Series
      </p>
      <h3 className="text-base leading-tight font-semibold text-white">
        Golden Hour
      </h3>
      <p className="mt-1 text-[11px] text-white/60">
        Shot on Sony A7IV · 85mm f/1.4
      </p>
    </div>
  </div>
));
PortraitImageCard.displayName = "PortraitImageCard";
