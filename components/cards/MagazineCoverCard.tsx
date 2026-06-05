import React, { forwardRef } from "react";
import Image from "next/image";
import coverImage from "@/public/bh.png";
import { ArrowRight } from "@/icons/ArrowRight";

export const MagazineCoverCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer ${className}`}
    {...props}
  >
    <Image
      src={coverImage}
      alt="Magazine cover"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute top-4 left-4">
      <span className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-medium text-white uppercase tracking-widest">
        Featured
      </span>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-5">
      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 mb-2">
        Issue #24 · Design
      </p>
      <h3 className="text-white text-xl font-light leading-tight tracking-tight mb-3">
        The Art of
        <br />
        <span className="font-semibold">Minimal Interfaces</span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/50">By John Doe · 8 min read</p>
        <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-neutral-900 text-white transition-all duration-300">
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  </div>
));
MagazineCoverCard.displayName = "MagazineCoverCard";
