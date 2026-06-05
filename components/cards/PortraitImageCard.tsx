import React, { forwardRef } from "react";
import Image from "next/image";
import portrait from "@/public/dithar.png";
import { Heart } from "@/icons/Heart";

export const PortraitImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`group relative w-56 h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer ${className}`} {...props}>
    <Image src={portrait} alt="Portrait" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
      <Heart size={14} />
    </button>
    <div className="absolute bottom-0 p-4">
      <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">Portrait Series</p>
      <h3 className="text-white text-base font-semibold leading-tight">Golden Hour</h3>
      <p className="text-white/60 text-[11px] mt-1">Shot on Sony A7IV · 85mm f/1.4</p>
    </div>
  </div>
));
PortraitImageCard.displayName = "PortraitImageCard";
