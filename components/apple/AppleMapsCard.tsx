import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";

export const AppleMapsCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white rounded-[1.25rem] overflow-hidden shadow-xl shadow-black/10 font-sans ${className}`} {...props}>
    <div className="relative h-44 bg-[#e8e4dc]">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "linear-gradient(#c8c4bc 1px, transparent 1px), linear-gradient(90deg, #c8c4bc 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 176">
        <path d="M20,140 Q80,80 140,100 T260,60" fill="none" stroke="#007AFF" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="140" r="6" fill="#007AFF" />
        <circle cx="260" cy="60" r="6" fill="#FF3B30" />
      </svg>
      <div className="absolute top-3 right-3 flex flex-col gap-1.5">
        <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-sm cursor-pointer">+</button>
        <button className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center text-sm cursor-pointer">−</button>
      </div>
      <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm flex items-center gap-1.5">
        <Location size={11} className="text-[#007AFF]" />
        <span className="text-[11px] font-medium text-neutral-800">Park Street</span>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-[15px] font-semibold text-neutral-900">Kolkata → Howrah</h4>
          <p className="text-[13px] text-neutral-500 mt-0.5">12 min · 4.2 km</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center text-white cursor-pointer shadow-sm shadow-blue-200">
          ▶
        </button>
      </div>
      <div className="flex gap-2">
        {["🚗 Drive", "🚶 Walk", "🚇 Transit"].map((mode, i) => (
          <button key={mode} className={`flex-1 py-2 rounded-xl text-[11px] font-medium cursor-pointer transition-colors ${
            i === 0 ? "bg-[#007AFF] text-white" : "bg-[#f2f2f7] text-neutral-700"
          }`}>{mode}</button>
        ))}
      </div>
    </div>
  </div>
));
AppleMapsCard.displayName = "AppleMapsCard";
