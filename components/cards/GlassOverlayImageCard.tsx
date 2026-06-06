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
    className={`group relative w-72 h-80 rounded-3xl overflow-hidden shadow-lg ${className}`}
    {...props}
  >
    <Image
      src={bgImage}
      alt="Scenic landscape"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute top-3 right-3 flex gap-2">
      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer">
        <Heart size={14} />
      </button>

      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer">
        <Share size={14} />
      </button>
    </div>

    <div className="absolute bottom-3 left-3 right-3">
      <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-4">
        <div className="flex items-center gap-1.5 text-white/70 text-[10px] mb-1.5">
          <Location size={10} />
          <span>Bishnupur, West Bengal</span>
        </div>

        <h3 className="text-white font-semibold text-sm leading-snug mb-2">
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

            <span className="text-[10px] text-white/60 ml-3">+12 saved</span>
          </div>

          <span className="text-[10px] flex items-center gap-1 font-mono text-white/50 uppercase tracking-wider">
            Explore
            <ArrowRight size={10} className="relative -top-px" />
          </span>
        </div>
      </div>
    </div>
  </div>
));

GlassOverlayImageCard.displayName = "GlassOverlayImageCard";
