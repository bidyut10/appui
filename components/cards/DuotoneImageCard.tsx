import React, { forwardRef } from "react";
import Image from "next/image";
import photo from "@/public/bh.png";

export const DuotoneImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`group relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer ${className}`} {...props}>
    <Image src={photo} alt="Duotone" fill className="object-cover" />
    <div className="absolute inset-0 bg-indigo-600 mix-blend-color opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-linear-to-t from-indigo-950/90 via-indigo-900/30 to-transparent" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-indigo-300 mb-3">Duotone</span>
      <h3 className="text-2xl font-light text-white leading-tight tracking-tight">
        Visual
        <br />
        <span className="font-bold">Identity</span>
      </h3>
      <p className="text-indigo-200/60 text-xs mt-3 leading-relaxed">Bold color overlays for editorial photography</p>
    </div>
  </div>
));
DuotoneImageCard.displayName = "DuotoneImageCard";
