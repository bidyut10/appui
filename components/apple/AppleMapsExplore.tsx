import React, { forwardRef } from "react";
import Image from "next/image";
import bg from "@/public/bg.png";
import { MapPinned } from "@/icons/MapPinned";
import { House } from "@/icons/House";
import { Leaf } from "@/icons/Leaf";
import { Soup } from "@/icons/Soup";

export const AppleMapsExplore = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-[1.25rem] font-sans shadow-xl shadow-black/10 ${className}`}
    {...props}
  >
    <div className="relative h-48">
      <Image src={bg} alt="Map area" fill className="object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

      <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
        <span className="flex items-center gap-1.5 text-[12px] font-semibold text-neutral-900">
          <MapPinned size={12} />
          Explore
        </span>
      </div>

      <div className="absolute bottom-0 p-4">
        <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
          Guide
        </p>

        <h3 className="mt-0.5 text-xl leading-tight font-bold text-white">
          Sundarbans
        </h3>

        <p className="mt-1 text-[13px] text-white/70">
          Nature · Wildlife · 47 places
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <Leaf size={11} />
            Parks
          </span>

          <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <Soup size={11} />
            Food
          </span>

          <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <House size={11} />
            Stay
          </span>
        </div>
      </div>
    </div>
  </div>
));

AppleMapsExplore.displayName = "AppleMapsExplore";
