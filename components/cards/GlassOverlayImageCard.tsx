import React, { forwardRef } from "react";
import Image from "next/image";
import bgImage from "@/public/bg.png";
import { Heart } from "@/icons/Heart";
import { Share } from "@/icons/Share";
import { Location } from "@/icons/Location";
import { ArrowRight } from "@/icons/ArrowRight";

export const GlassOverlayImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative h-80 w-72 overflow-hidden rounded-3xl shadow-lg ${className}`}
    {...props}
  >
    <Image
      src={bgImage}
      alt="Scenic landscape"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute top-3 right-3 flex gap-2">
      <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30">
        <Heart size={14} />
      </button>

      <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30">
        <Share size={14} />
      </button>
    </div>

    <div className="absolute right-3 bottom-3 left-3">
      <div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-xl">
        <div className="mb-1.5 flex items-center gap-1.5 text-[10px] text-white/70">
          <Location size={10} />
          <span>Bishnupur, West Bengal</span>
        </div>

        <h3 className="mb-2 text-sm leading-snug font-semibold text-white">
          Where the river meets the mangrove forest
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex -space-x-2.5">
              {["JD", "BK", "AS"].map((initial, i) => (
                <div
                  key={initial}
                  className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/20 bg-neutral-600 text-[9px] font-semibold text-white backdrop-blur-sm"
                  style={{ zIndex: 10 - i }}
                >
                  {initial}
                </div>
              ))}
            </div>

            <span className="ml-3 text-[10px] text-white/60">+12 saved</span>
          </div>

          <span className="flex items-center gap-1 font-mono text-[10px] tracking-wider text-white/50 uppercase">
            Explore
            <ArrowRight size={10} className="relative -top-px" />
          </span>
        </div>
      </div>
    </div>
  </div>
));

GlassOverlayImageCard.displayName = "GlassOverlayImageCard";
