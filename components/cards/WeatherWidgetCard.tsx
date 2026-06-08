import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Location } from "@/icons/Location";
import { Sun } from "@/icons/Sun";

/*
| Weather widget card built with Next.js, React, TypeScript,
| and Tailwind CSS.
|
| Replace the demo weather information with your own data.
| Supports custom location, temperature, condition, stats,
| and weather icon.
*/

export type WeatherWidgetCardProps = {
  location?: string;
  temperature?: string | number;
  condition?: string;

  humidity?: string;
  windSpeed?: string;
  uvIndex?: string;

  weatherIcon?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const WeatherWidgetCard = forwardRef<
  HTMLDivElement,
  WeatherWidgetCardProps
>(
  (
    {
      className,

      location = "Kolkata, IN",
      temperature = "32",
      condition = "Partly Cloudy",

      humidity = "68%",
      windSpeed = "12 km/h",
      uvIndex = "High",

      weatherIcon,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="weather-widget-card"
      className={cn(
        "relative h-72 w-64 overflow-hidden rounded-3xl font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Background */}
      <div
        data-slot="weather-widget-card-background"
        className="absolute inset-0 bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600"
      />

      {/* Glow */}
      <div
        data-slot="weather-widget-card-glow"
        className="absolute top-[10%] right-[15%] h-16 w-16 rounded-full bg-yellow-300/30 blur-xl"
      />

      {/* Content */}
      <div
        data-slot="weather-widget-card-content"
        className="relative z-10 flex h-full flex-col p-5"
      >
        {/* Location */}
        <div
          data-slot="weather-widget-card-location"
          className="flex items-center gap-1.5 text-white/70"
        >
          <Location size={11} />

          <span className="text-xs font-medium">{location}</span>
        </div>

        {/* Weather */}
        <div
          data-slot="weather-widget-card-current"
          className="flex flex-1 flex-col items-center justify-center"
        >
          {weatherIcon ?? (
            <Sun size={56} className="mb-2 fill-yellow-300 text-yellow-300" />
          )}

          <p className="text-5xl font-extralight tracking-tight text-white">
            {temperature}°
          </p>

          <p className="mt-1 text-sm text-white/70">{condition}</p>
        </div>

        {/* Stats */}
        <div
          data-slot="weather-widget-card-stats"
          className="grid grid-cols-3 gap-2"
        >
          {[
            {
              label: "Humidity",
              value: humidity,
            },
            {
              label: "Wind",
              value: windSpeed,
            },
            {
              label: "UV",
              value: uvIndex,
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/15 p-2 text-center backdrop-blur-sm"
            >
              <p className="text-[9px] tracking-wider text-white/50 uppercase">
                {label}
              </p>

              <p className="mt-0.5 text-xs font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
);

WeatherWidgetCard.displayName = "WeatherWidgetCard";
