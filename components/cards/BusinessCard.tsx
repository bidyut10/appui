import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";
import { Mail } from "@/icons/Mail";
import { User } from "@/icons/User";
import { Phone } from "@/icons/Phone";

export const BusinessCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative h-52 w-96 overflow-hidden rounded-2xl bg-neutral-900 p-8 shadow-lg ${className}`}
    {...props}
  >
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        <h2 className="text-xl font-light tracking-widest text-white uppercase">
          John Doe
        </h2>
        <p className="mt-1 text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
          Software Developer
        </p>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <User size={11} /> john@example.com
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Phone size={11} /> +91 98765 43210
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Location size={11} /> West Bengal, India
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Mail size={11} /> example.com
        </div>
      </div>
    </div>
    <div className="absolute top-6 right-6 opacity-20 transition-opacity duration-300 group-hover:opacity-100">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-lg font-bold text-white">
        JD
      </div>
    </div>
    <div className="pointer-events-none absolute right-[-5%] bottom-[-30%] h-48 w-48 rounded-full bg-white/5 blur-3xl" />
  </div>
));
BusinessCard.displayName = "BusinessCard";
