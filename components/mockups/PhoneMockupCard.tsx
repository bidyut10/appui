import React, { forwardRef } from "react";
import Image from "next/image";
import screenContent from "@/public/dbg.png";

export const PhoneMockupCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex flex-col items-center font-sans ${className}`} {...props}>
    <div className="relative w-44 h-[320px] bg-neutral-900 rounded-[2rem] p-2 shadow-2xl shadow-neutral-900/30">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-900 rounded-full z-10" />
      <div className="relative w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
        <Image src={screenContent} alt="App screen" fill className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 inset-x-4">
          <p className="text-white text-xs font-semibold">AppUI Mobile</p>
          <p className="text-white/60 text-[9px] mt-0.5">Component preview</p>
        </div>
      </div>
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-700 rounded-full" />
    </div>
    <p className="text-[10px] font-mono text-neutral-400 mt-3 uppercase tracking-wider">iPhone 15 Pro</p>
  </div>
));
PhoneMockupCard.displayName = "PhoneMockupCard";
