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
    className={`group w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative h-44 overflow-hidden">
      <Image src={afterImg} alt="After" fill className="object-cover" />
      <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white">
        <div className="relative h-full w-[200%]">
          <Image
            src={beforeImg}
            alt="Before"
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg">
        <div className="flex gap-0.5">
          <div className="h-3 w-0.5 rounded-full bg-neutral-400" />
          <div className="h-3 w-0.5 rounded-full bg-neutral-400" />
        </div>
      </div>
      <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2 pt-1 pb-0.5 font-mono text-[9px] text-white backdrop-blur-sm">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2 pt-1 pb-0.5 font-mono text-[9px] text-white backdrop-blur-sm">
        After
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-neutral-900">
        Photo Enhancement
      </h3>
      <p className="mt-1 text-[11px] text-neutral-500">
        Drag slider to compare original vs edited
      </p>
    </div>
  </div>
));
BeforeAfterImageCard.displayName = "BeforeAfterImageCard";
