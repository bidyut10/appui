import React, { forwardRef } from "react";
import Image from "next/image";
import bg from "@/public/bg.png";

export const AppleMapsExplore = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 rounded-[1.25rem] overflow-hidden shadow-xl shadow-black/10 font-sans ${className}`} {...props}>
    <div className="relative h-48">
      <Image src={bg} alt="Map area" fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
      <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
        <span className="text-[12px] font-semibold text-neutral-900">🗺️ Explore</span>
      </div>
      <div className="absolute bottom-0 p-4">
        <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Guide</p>
        <h3 className="text-xl font-bold text-white mt-0.5 leading-tight">Sundarbans</h3>
        <p className="text-[13px] text-white/70 mt-1">Nature · Wildlife · 47 places</p>
        <div className="flex gap-2 mt-3">
          {["🌿 Parks", "🍽️ Food", "🏨 Stay"].map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-medium text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
));
AppleMapsExplore.displayName = "AppleMapsExplore";
