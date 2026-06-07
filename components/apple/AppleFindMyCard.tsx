import React, { forwardRef } from "react";
import { Key } from "@/icons/Key";
import { MapPinned } from "@/icons/MapPinned";

export const AppleFindMyCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white rounded-[1.25rem] overflow-hidden shadow-xl shadow-black/10 font-sans ${className}`} {...props}>
    <div className="relative h-40 bg-[#e8e4dc]">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "linear-gradient(#c8c4bc 1px, transparent 1px), linear-gradient(90deg, #c8c4bc 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-[#007AFF]/20 border-2 border-[#007AFF]/40 flex items-center justify-center animate-pulse">
          <div className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center shadow-lg shadow-blue-300">
            <span className="text-white text-sm"><MapPinned/></span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[#f2f2f7] flex items-center justify-center text-lg"><Key/></div>
        <div>
          <h4 className="text-[15px] font-semibold text-neutral-900">AirTag — Keys</h4>
          <p className="text-[13px] text-[#34C759] font-medium">Nearby · Living Room</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 h-10 bg-[#007AFF] text-white text-[13px] font-medium rounded-xl cursor-pointer hover:bg-[#0066d6] transition-colors">
          Play Sound
        </button>
        <button className="flex-1 h-10 bg-[#f2f2f7] text-[#007AFF] text-[13px] font-medium rounded-xl cursor-pointer hover:bg-neutral-200 transition-colors">
          Directions
        </button>
      </div>
      <p className="text-[11px] text-neutral-400 text-center mt-3">Last seen: Just now</p>
    </div>
  </div>
));
AppleFindMyCard.displayName = "AppleFindMyCard";
