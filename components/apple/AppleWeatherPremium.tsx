import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Location } from "@/icons/Location";

/**
 * Apple Weather Premium built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleWeatherStat = {
  label: string;
  value: string;
  sub?: string;
};

export type AppleWeatherPremiumProps = {
  location?: string;
  temperature?: string;
  condition?: string;
  highLow?: string;
  stats?: AppleWeatherStat[];
} & ComponentPropsWithoutRef<"div">;

const defaultStats: AppleWeatherStat[] = [
  { label: "UV", value: "6", sub: "High" },
  { label: "Humidity", value: "68%" },
  { label: "Wind", value: "12", sub: "km/h" },
  { label: "Rain", value: "10%" },
];

export const AppleWeatherPremium = forwardRef<
  HTMLDivElement,
  AppleWeatherPremiumProps
>(
  (
    {
      className,
      location = "Kolkata",
      temperature = "32°",
      condition = "Partly Cloudy",
      highLow = "H:35° L:26°",
      stats = defaultStats,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-weather-premium"
      className={cn(
        "relative h-80 w-72 overflow-hidden rounded-4xl font-sans shadow-2xl",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#1a3a5c] via-[#2d5f8a] to-[#4a90c2]" />
      <div className="absolute top-[15%] left-[20%] h-24 w-24 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10 flex h-full flex-col p-6">
        <div
          data-slot="apple-weather-premium-location"
          className="flex items-center gap-1 text-white/60"
        >
          <Location size={12} />
          <span className="text-sm font-medium">{location}</span>
        </div>

        <div
          data-slot="apple-weather-premium-main"
          className="-mt-4 flex flex-1 flex-col items-center justify-center"
        >
          <p className="text-[5.5rem] leading-none font-extralight tracking-tighter text-white">
            {temperature}
          </p>
          <p className="mt-1 text-lg text-white/70">{condition}</p>
          <p className="mt-1 text-sm text-white/40">{highLow}</p>
        </div>

        <div
          data-slot="apple-weather-premium-stats"
          className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
        >
          <div className="grid grid-cols-4 gap-3 text-center">
            {stats.map(({ label, value, sub }) => (
              <div key={label}>
                <p className="text-[9px] tracking-wider text-white/40 uppercase">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {value}
                </p>
                {sub && <p className="text-[9px] text-amber-300">{sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
);

AppleWeatherPremium.displayName = "AppleWeatherPremium";
