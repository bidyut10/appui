import React, { forwardRef } from "react";
import Image from "next/image";
import coverImage from "@/public/dithar.png";
import { ArrowRight } from "@/icons/ArrowRight";

export const MagazineCoverCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative h-96 w-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg ${className}`}
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
      <span className="inline-block rounded-full border border-white/20 bg-white/15 px-2.5 pt-1 pb-0.5 text-[10px] font-medium tracking-widest text-white uppercase backdrop-blur-md">
        Featured
      </span>
    </div>

    <div className="absolute right-0 bottom-0 left-0 p-5">
      <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase">
        Issue #24 · Design
      </p>
      <h3 className="mb-3 text-xl leading-tight font-light tracking-tight text-white">
        The Art of
        <br />
        <span className="font-semibold">Minimal Interfaces</span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/50">By John Doe · 8 min read</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900">
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  </div>
));
MagazineCoverCard.displayName = "MagazineCoverCard";
