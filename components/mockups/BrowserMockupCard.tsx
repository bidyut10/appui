import React, { forwardRef } from "react";
import Image from "next/image";
import screenContent from "@/public/bh.png";

export const BrowserMockupCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 font-sans ${className}`} {...props}>
    <div className="flex items-center gap-2 rounded-t-xl bg-neutral-200 px-3 py-2">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex h-6 flex-1 items-center rounded-md bg-white px-2">
        <span className="font-mono text-[9px] text-neutral-400">
          appui.dev/components
        </span>
      </div>
    </div>
    <div className="relative h-44 overflow-hidden rounded-b-xl border-x border-b border-neutral-200 bg-white">
      <Image
        src={screenContent}
        alt="Website"
        fill
        className="object-cover object-top"
      />
    </div>
  </div>
));
BrowserMockupCard.displayName = "BrowserMockupCard";
