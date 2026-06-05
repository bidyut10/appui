import React, { forwardRef } from "react";
import Image from "next/image";
import landscape from "@/public/bg.png";
import { Location } from "@/icons/Location";
import { Pin } from "@/icons/Pin";

export const TravelPostcardCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-[#fffdf5] border border-[#e8e0d0] shadow-[4px_4px_0_#e8e0d0] rounded-sm overflow-hidden font-serif ${className}`} {...props}>
    <div className="relative h-40">
      <Image src={landscape} alt="Travel" fill className="object-cover sepia-[0.2]" />
      <div className="absolute top-2 right-2 w-8 h-10 bg-white/90 border border-neutral-200 flex flex-col items-center justify-center shadow-sm">
        <Pin size={10} className="text-red-500" />
        <span className="text-[6px] font-mono text-neutral-500 mt-0.5">INDIA</span>
      </div>
    </div>
    <div className="p-4 relative">
      <div className="absolute top-3 right-4 w-16 h-20 border-2 border-red-400/40 rounded-sm rotate-3 opacity-30" />
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a09080] mb-2">Postcard</p>
      <h3 className="text-lg italic text-[#3d3530] leading-snug mb-2">Greetings from Sundarbans!</h3>
      <div className="flex items-center gap-1.5 text-[11px] text-[#8a7e70]">
        <Location size={10} />
        <span>West Bengal, India</span>
      </div>
      <p className="text-[10px] text-[#b0a595] mt-3 text-right font-mono">— JD · 06.2026</p>
    </div>
  </div>
));
TravelPostcardCard.displayName = "TravelPostcardCard";
