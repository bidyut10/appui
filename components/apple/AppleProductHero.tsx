import React, { forwardRef } from "react";
import Image from "next/image";
import product from "@/public/dbg.png";

export const AppleProductHero = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 bg-[#fbfbfd] rounded-[1.5rem] overflow-hidden font-sans text-center ${className}`} {...props}>
    <div className="pt-8 px-6">
      <p className="text-[12px] font-semibold text-[#bf4800] uppercase tracking-wide">New</p>
      <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mt-1 leading-tight">
        iPhone 16 Pro
      </h2>
      <p className="text-lg text-neutral-500 mt-1 font-light">Titanium. So strong. So light. So Pro.</p>
      <p className="text-sm text-neutral-900 mt-3">From $999 or $41.62/mo. for 24 mo.*</p>
      <div className="flex items-center justify-center gap-3 mt-4">
        <button className="h-9 px-5 bg-[#007AFF] text-white text-[13px] font-medium rounded-full cursor-pointer hover:bg-[#0066d6] transition-colors">
          Learn more
        </button>
        <button className="h-9 px-5 text-[#007AFF] text-[13px] font-medium cursor-pointer hover:underline">
          Buy ›
        </button>
      </div>
    </div>
    <div className="relative h-48 mt-4">
      <Image src={product} alt="iPhone" fill className="object-contain object-bottom" />
    </div>
  </div>
));
AppleProductHero.displayName = "AppleProductHero";
