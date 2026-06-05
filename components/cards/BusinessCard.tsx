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
    className={`w-96 h-52 p-8 bg-neutral-900 shadow-lg rounded-2xl relative overflow-hidden group ${className}`}
    {...props}
  >
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <h2 className="text-white text-xl font-light tracking-widest uppercase">
          John Doe
        </h2>
        <p className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase mt-1">
          Software Developer
        </p>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-neutral-400 text-xs">
          <User size={11} /> john@example.com
        </div>
        <div className="flex items-center gap-2 text-neutral-400 text-xs">
          <Phone size={11} /> +91 98765 43210
        </div>
        <div className="flex items-center gap-2 text-neutral-400 text-xs">
          <Location size={11} /> West Bengal, India
        </div>
        <div className="flex items-center gap-2 text-neutral-400 text-xs">
          <Mail size={11} /> example.com
        </div>
      </div>
    </div>
    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center font-bold text-white text-lg">
        JD
      </div>
    </div>
    <div className="absolute bottom-[-30%] right-[-5%] w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
  </div>
));
BusinessCard.displayName = "BusinessCard";
