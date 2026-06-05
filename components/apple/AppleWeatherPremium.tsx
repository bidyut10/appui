import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";

export const AppleWeatherPremium = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`relative w-72 h-80 rounded-[2rem] overflow-hidden shadow-2xl font-sans ${className}`} {...props}>
    <div className="absolute inset-0 bg-linear-to-b from-[#1a3a5c] via-[#2d5f8a] to-[#4a90c2]" />
    <div className="absolute top-[15%] left-[20%] w-24 h-24 bg-white/10 rounded-full blur-2xl" />

    <div className="relative z-10 h-full p-6 flex flex-col">
      <div className="flex items-center gap-1 text-white/60">
        <Location size={12} />
        <span className="text-sm font-medium">Kolkata</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-4">
        <p className="text-[5.5rem] font-extralight text-white leading-none tracking-tighter">32°</p>
        <p className="text-lg text-white/70 mt-1">Partly Cloudy</p>
        <p className="text-sm text-white/40 mt-1">H:35° L:26°</p>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4">
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { label: "UV Index", val: "6", sub: "High" },
            { label: "Humidity", val: "68%", sub: "" },
            { label: "Wind", val: "12", sub: "km/h" },
            { label: "Rain", val: "10%", sub: "" },
          ].map(({ label, val, sub }) => (
            <div key={label}>
              <p className="text-[9px] text-white/40 uppercase tracking-wider">{label}</p>
              <p className="text-sm font-semibold text-white mt-0.5">{val}</p>
              {sub && <p className="text-[9px] text-amber-300">{sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
));
AppleWeatherPremium.displayName = "AppleWeatherPremium";
