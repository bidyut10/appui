import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";

export const WeatherWidgetCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-64 h-72 rounded-3xl overflow-hidden shadow-lg font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600" />
    <div className="absolute top-[10%] right-[15%] w-16 h-16 bg-yellow-300/30 rounded-full blur-xl" />

    <div className="relative z-10 h-full p-5 flex flex-col">
      <div className="flex items-center gap-1.5 text-white/70">
        <Location size={11} />
        <span className="text-xs font-medium">Kolkata, IN</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <svg viewBox="0 0 64 64" width={56} height={56} className="text-yellow-300 mb-2">
          <circle cx="32" cy="32" r="14" fill="currentColor" opacity="0.9" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x="30"
              y="4"
              width="4"
              height="10"
              rx="2"
              fill="currentColor"
              opacity="0.7"
              transform={`rotate(${angle} 32 32)`}
            />
          ))}
        </svg>
        <p className="text-5xl font-extralight text-white tracking-tight">32°</p>
        <p className="text-sm text-white/70 mt-1">Partly Cloudy</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Humidity", val: "68%" },
          { label: "Wind", val: "12 km/h" },
          { label: "UV", val: "High" },
        ].map(({ label, val }) => (
          <div key={label} className="bg-white/15 backdrop-blur-sm rounded-xl p-2 text-center border border-white/10">
            <p className="text-[9px] text-white/50 uppercase tracking-wider">{label}</p>
            <p className="text-xs font-semibold text-white mt-0.5">{val}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
));
WeatherWidgetCard.displayName = "WeatherWidgetCard";
