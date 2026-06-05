import React, { forwardRef } from "react";
import Image from "next/image";
import screenContent from "@/public/bh.png";

export const BrowserMockupCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 font-sans ${className}`} {...props}>
    <div className="bg-neutral-200 rounded-t-xl px-3 py-2 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex-1 h-6 bg-white rounded-md flex items-center px-2">
        <span className="text-[9px] font-mono text-neutral-400">appui.dev/components</span>
      </div>
    </div>
    <div className="relative h-44 bg-white border-x border-b border-neutral-200 rounded-b-xl overflow-hidden">
      <Image src={screenContent} alt="Website" fill className="object-cover object-top" />
    </div>
  </div>
));
BrowserMockupCard.displayName = "BrowserMockupCard";
