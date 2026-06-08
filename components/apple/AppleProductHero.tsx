import React, { forwardRef } from "react";
import Image from "next/image";
import product from "@/public/dbg.png";

export const AppleProductHero = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-96 overflow-hidden rounded-3xl bg-[#fbfbfd] text-center font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="px-6 pt-8">
      <p className="text-[12px] font-semibold tracking-wide text-[#bf4800] uppercase">
        New
      </p>
      <h2 className="mt-1 text-xl leading-tight font-semibold tracking-tight text-neutral-900">
        IPhone 16 Pro
      </h2>
      <p className="mt-1 text-sm font-light text-neutral-500">
        Titanium. So strong. So light. So Pro.
      </p>
      <p className="mt-3 text-sm text-neutral-900">
        From $999 or $41.62/mo. for 24 mo.*
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button className="h-9 cursor-pointer rounded-full bg-[#007AFF] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#0066d6]">
          Learn more
        </button>
        <button className="h-9 cursor-pointer px-5 text-[13px] font-medium text-[#007AFF] hover:underline">
          Buy ›
        </button>
      </div>
    </div>
    <div className="relative mt-4 h-48">
      <Image
        src={product}
        alt="iPhone"
        fill
        className="object-contain object-bottom"
      />
    </div>
  </div>
));
AppleProductHero.displayName = "AppleProductHero";
