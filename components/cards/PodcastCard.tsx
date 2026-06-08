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
    className={`group w-72 overflow-hidden rounded-2xl bg-neutral-900 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative h-32 overflow-hidden">
      <Image
        src={coverImage}
        alt="Podcast cover"
        fill
        className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      <div className="absolute bottom-3 left-4">
        <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase">
          Episode 42
        </span>
      </div>
    </div>

    <div className="p-4">
      <h3 className="mb-1 text-sm leading-snug font-semibold text-white">
        Building Design Systems That Scale
      </h3>
      <p className="mb-4 text-[11px] text-neutral-500">
        with Sarah Chen · 48 min
      </p>

      <div className="flex items-center gap-3">
        <button className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-transform hover:scale-105">
          <Play />
        </button>
        <div className="flex-1">
          <div className="h-1 overflow-hidden rounded-full bg-neutral-800">
            <div className="h-full w-[35%] rounded-full bg-emerald-500" />
          </div>
          <div className="mt-1 flex justify-between">
            <span className="font-mono text-[9px] text-neutral-600">16:42</span>
            <span className="font-mono text-[9px] text-neutral-600">48:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
));
PodcastCard.displayName = "PodcastCard";
