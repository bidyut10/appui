import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";

export const AppleWeatherPremium = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative h-80 w-72 overflow-hidden rounded-4xl font-sans shadow-2xl ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-b from-[#1a3a5c] via-[#2d5f8a] to-[#4a90c2]" />
    <div className="absolute top-[15%] left-[20%] h-24 w-24 rounded-full bg-white/10 blur-2xl" />

    <div className="relative z-10 flex h-full flex-col p-6">
      <div className="flex items-center gap-1 text-white/60">
        <Location size={12} />
        <span className="text-sm font-medium">Kolkata</span>
      </div>

      <div className="-mt-4 flex flex-1 flex-col items-center justify-center">
        <p className="text-[5.5rem] leading-none font-extralight tracking-tighter text-white">
          32°
        </p>
        <p className="mt-1 text-lg text-white/70">Partly Cloudy</p>
        <p className="mt-1 text-sm text-white/40">H:35° L:26°</p>
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { label: "UV", val: "6", sub: "High" },
            { label: "Humidity", val: "68%", sub: "" },
            { label: "Wind", val: "12", sub: "km/h" },
            { label: "Rain", val: "10%", sub: "" },
          ].map(({ label, val, sub }) => (
            <div key={label}>
              <p className="text-[9px] tracking-wider text-white/40 uppercase">
                {label}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">{val}</p>
              {sub && <p className="text-[9px] text-amber-300">{sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
));
AppleWeatherPremium.displayName = "AppleWeatherPremium";
