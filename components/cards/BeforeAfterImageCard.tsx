import React, { forwardRef } from "react";
import Image from "next/image";
import beforeImg from "@/public/dbg.png";
import afterImg from "@/public/bh.png";

export const BeforeAfterImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="relative h-44 overflow-hidden">
      <Image src={afterImg} alt="After" fill className="object-cover" />
      <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white">
        <div className="relative w-[200%] h-full">
          <Image
            src={beforeImg}
            alt="Before"
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
        <div className="flex gap-0.5">
          <div className="w-0.5 h-3 bg-neutral-400 rounded-full" />
          <div className="w-0.5 h-3 bg-neutral-400 rounded-full" />
        </div>
      </div>
      <span className="absolute top-3 left-3 px-2 pt-1 pb-0.5 bg-black/60 backdrop-blur-sm text-[9px] font-mono text-white rounded-full">
        Before
      </span>
      <span className="absolute top-3 right-3 px-2 pt-1 pb-0.5 bg-black/60 backdrop-blur-sm text-[9px] font-mono text-white rounded-full">
        After
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-neutral-900">
        Photo Enhancement
      </h3>
      <p className="text-[11px] text-neutral-500 mt-1">
        Drag slider to compare original vs edited
      </p>
    </div>
  </div>
));
BeforeAfterImageCard.displayName = "BeforeAfterImageCard";
