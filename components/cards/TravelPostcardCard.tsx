import React, { forwardRef } from "react";
import Image from "next/image";
import landscape from "@/public/bg.png";
import { Location } from "@/icons/Location";
import { Pin } from "@/icons/Pin";

export const TravelPostcardCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden border border-[#e8e0d0] bg-[#fffdf5] font-serif shadow-[4px_4px_0_#e8e0d0] ${className}`}
    {...props}
  >
    <div className="relative h-40">
      <Image
        src={landscape}
        alt="Travel"
        fill
        className="object-cover sepia-[0.2]"
      />
      <div className="absolute top-2 right-2 flex h-10 w-8 flex-col items-center justify-center border border-neutral-200 bg-white/90 shadow-sm">
        <Pin size={10} className="text-red-500" />
        <span className="mt-0.5 font-mono text-[6px] text-neutral-500">
          INDIA
        </span>
      </div>
    </div>
    <div className="relative p-4">
      <div className="absolute top-3 right-4 h-20 w-16 rotate-3 rounded-sm border-2 border-red-400/40 opacity-30" />
      <p className="mb-2 font-mono text-[10px] tracking-[0.3em] text-[#a09080] uppercase">
        Postcard
      </p>
      <h3 className="mb-2 text-lg leading-snug text-[#3d3530] italic">
        Greetings from Sundarbans!
      </h3>
      <div className="flex items-center gap-1.5 text-[11px] text-[#8a7e70]">
        <Location size={10} />
        <span>West Bengal, India</span>
      </div>
      <p className="mt-3 text-right font-mono text-[10px] text-[#b0a595]">
        — JD · 06.2026
      </p>
    </div>
  </div>
));
TravelPostcardCard.displayName = "TravelPostcardCard";
