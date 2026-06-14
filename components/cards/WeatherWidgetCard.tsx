"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { Location } from "@/icons/Location";
import { Sun } from "@/icons/Sun";

/**
 * Weather widget with expandable forecast and Celsius/Fahrenheit toggle.
 *
 * Replace the demo weather information with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type WeatherForecastDay = {
  label: string;
  high: number;
  low: number;
  icon?: ReactNode;
};

export type WeatherWidgetCardProps = {
  location?: string;
  temperature?: number;
  condition?: string;
  humidity?: string;
  windSpeed?: string;
  uvIndex?: string;
  weatherIcon?: ReactNode;
  forecast?: WeatherForecastDay[];
  defaultUnit?: "C" | "F";
  onUnitChange?: (unit: "C" | "F") => void;
} & ComponentPropsWithoutRef<"div">;

const defaultForecast: WeatherForecastDay[] = [
  { label: "Mon", high: 33, low: 26 },
  { label: "Tue", high: 31, low: 25 },
  { label: "Wed", high: 30, low: 24 },
  { label: "Thu", high: 32, low: 25 },
  { label: "Fri", high: 34, low: 27 },
];

function toFahrenheit(celsius: number) {
  return Math.round((celsius * 9) / 5 + 32);
}

export const WeatherWidgetCard = forwardRef<
  HTMLDivElement,
  WeatherWidgetCardProps
>(
  (
    {
      className,
      location = "Kolkata, IN",
      temperature = 32,
      condition = "Partly Cloudy",
      humidity = "68%",
      windSpeed = "12 km/h",
      uvIndex = "High",
      weatherIcon,
      forecast = defaultForecast,
      defaultUnit = "C",
      onUnitChange,
      ...props
    },
    ref,
  ) => {
    const [expanded, setExpanded] = useState(false);
    const [unit, setUnit] = useState<"C" | "F">(defaultUnit);

    const displayTemp = unit === "C" ? temperature : toFahrenheit(temperature);

    const formatTemp = (value: number) =>
      unit === "C" ? value : toFahrenheit(value);

    const toggleUnit = () => {
      const next = unit === "C" ? "F" : "C";
      setUnit(next);
      onUnitChange?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="weather-widget-card"
        className={cn(
          "relative w-64 overflow-hidden rounded-3xl font-sans shadow-lg transition-[height] duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)]",
          expanded ? "h-96" : "h-72",
          className,
        )}
        {...props}
      >
        <div
          data-slot="weather-widget-card-background"
          className="absolute inset-0 bg-linear-to-br from-sky-400 via-blue-500 to-blue-600 transition-transform duration-700"
          style={{ transform: expanded ? "scale(1.05)" : "scale(1)" }}
        />

        <div
          data-slot="weather-widget-card-glow"
          className="absolute top-[10%] right-[15%] h-16 w-16 rounded-full bg-yellow-300/30 blur-xl"
        />

        <div
          data-slot="weather-widget-card-content"
          className="relative z-10 flex h-full flex-col p-5"
        >
          <div className="flex items-center justify-between">
            <div
              data-slot="weather-widget-card-location"
              className="flex items-center gap-1.5 text-white/70"
            >
              <Location size={11} />
              <span className="text-xs font-medium">{location}</span>
            </div>
            <button
              type="button"
              onClick={toggleUnit}
              aria-label={`Switch to ${unit === "C" ? "Fahrenheit" : "Celsius"}`}
              data-slot="weather-widget-card-unit-toggle"
              className="cursor-pointer rounded-full border border-white/20 bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm transition-transform active:scale-95"
            >
              °{unit}
            </button>
          </div>

          <div
            data-slot="weather-widget-card-current"
            className="flex flex-1 flex-col items-center justify-center"
          >
            {weatherIcon ?? (
              <Sun
                size={56}
                className="mb-2 fill-yellow-300 text-yellow-300 transition-transform duration-500"
                style={{
                  transform: expanded ? "rotate(12deg) scale(1.05)" : undefined,
                }}
              />
            )}

            <p className="text-5xl font-extralight tracking-tight text-white">
              {displayTemp}°
            </p>
            <p className="mt-1 text-sm text-white/70">{condition}</p>
          </div>

          <div
            data-slot="weather-widget-card-stats"
            className="grid grid-cols-3 gap-2"
          >
            {[
              { label: "Humidity", value: humidity },
              { label: "Wind", value: windSpeed },
              { label: "UV", value: uvIndex },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/15 p-2 text-center backdrop-blur-sm"
              >
                <p className="text-[9px] tracking-wider text-white/50 uppercase">
                  {label}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            data-slot="weather-widget-card-expand"
            className="mt-3 cursor-pointer rounded-xl border border-white/15 bg-white/10 py-2 text-[11px] font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {expanded ? "Hide 5-day forecast" : "Show 5-day forecast"}
          </button>

          <div
            data-slot="weather-widget-card-forecast"
            className={cn(
              "mt-3 grid grid-cols-5 gap-1 overflow-hidden transition-all duration-500",
              expanded ? "max-h-20 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            {forecast.map((day) => (
              <div
                key={day.label}
                className="rounded-lg bg-white/10 p-1.5 text-center backdrop-blur-sm"
              >
                <p className="text-[9px] text-white/60">{day.label}</p>
                <Sun size={14} className="mx-auto my-0.5 text-white/80" />
                <p className="text-[10px] font-semibold text-white">
                  {formatTemp(day.high)}°
                </p>
                <p className="text-[9px] text-white/50">
                  {formatTemp(day.low)}°
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

WeatherWidgetCard.displayName = "WeatherWidgetCard";
