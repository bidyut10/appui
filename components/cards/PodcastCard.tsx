import React, { forwardRef } from "react";
import Image from "next/image";
import coverImage from "@/public/bh.png";
import { Play } from "@/icons/Play";

export const PodcastCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-72 bg-neutral-900 rounded-2xl overflow-hidden shadow-lg font-sans ${className}`}
    {...props}
  >
    <div className="relative h-32 overflow-hidden">
      <Image
        src={coverImage}
        alt="Podcast cover"
        fill
        className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      <div className="absolute bottom-3 left-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
          Episode 42
        </span>
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-sm font-semibold text-white leading-snug mb-1">
        Building Design Systems That Scale
      </h3>
      <p className="text-[11px] text-neutral-500 mb-4">with Sarah Chen · 48 min</p>

      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shrink-0">
          <Play/>
        </button>
        <div className="flex-1">
          <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full w-[35%] bg-emerald-500 rounded-full" />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] font-mono text-neutral-600">16:42</span>
            <span className="text-[9px] font-mono text-neutral-600">48:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
));
PodcastCard.displayName = "PodcastCard";
