import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";
import { Sun } from "@/icons/Sun";

export const WeatherWidgetCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative h-72 w-64 overflow-hidden rounded-3xl font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600" />
    <div className="absolute top-[10%] right-[15%] h-16 w-16 rounded-full bg-yellow-300/30 blur-xl" />

    <div className="relative z-10 flex h-full flex-col p-5">
      <div className="flex items-center gap-1.5 text-white/70">
        <Location size={11} />
        <span className="text-xs font-medium">Kolkata, IN</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <Sun size={56} className="mb-2 fill-yellow-300 text-yellow-300" />
        <p className="text-5xl font-extralight tracking-tight text-white">
          32°
        </p>
        <p className="mt-1 text-sm text-white/70">Partly Cloudy</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Humidity", val: "68%" },
          { label: "Wind", val: "12 km/h" },
          { label: "UV", val: "High" },
        ].map(({ label, val }) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/15 p-2 text-center backdrop-blur-sm"
          >
            <p className="text-[9px] tracking-wider text-white/50 uppercase">
              {label}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-white">{val}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
));
WeatherWidgetCard.displayName = "WeatherWidgetCard";
