"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";
import { Sun } from "@/icons/Sun";
import { Moon } from "@/icons/Moon";

const FORECAST: { day: string; high: number; low: number; icon: ReactNode }[] =
  [
    { day: "Mon", high: 28, low: 18, icon: <Sun size={14} /> },
    {
      day: "Tue",
      high: 26,
      low: 17,
      icon: <Sun size={14} className="opacity-70" />,
    },
    { day: "Wed", high: 24, low: 16, icon: <Moon size={14} /> },
    { day: "Thu", high: 27, low: 19, icon: <Sun size={14} /> },
    { day: "Fri", high: 29, low: 20, icon: <Sun size={14} /> },
  ];

export type MinimalWeatherWidgetProps = {
  temp?: number;
  condition?: string;
  city?: string;
} & ComponentPropsWithoutRef<"div">;

export const MinimalWeatherWidget = forwardRef<
  HTMLDivElement,
  MinimalWeatherWidgetProps
>(
  (
    {
      className,
      temp = 30,
      condition = "Partly Cloudy",
      city = "Toronto",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="minimal-weather-widget"
      className={cn(
        "w-72 overflow-hidden rounded-[2rem] bg-black p-4 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="font-mono text-4xl font-black tracking-wider">
            {temp}°
          </p>
          <p className="text-sm text-neutral-400">{condition}</p>
          <p className="text-xs text-neutral-500">{city}</p>
        </div>
        <Sun size={24} className="text-white" />
      </div>

      <div className="flex justify-between border-t border-neutral-800 pt-3">
        {FORECAST.map((d) => (
          <div key={d.day} className="text-center">
            <p className="text-[9px] text-neutral-500">{d.day}</p>
            <div className="my-1 flex justify-center text-neutral-300">
              {d.icon}
            </div>
            <p className="text-[9px] font-bold">{d.high}°</p>
            <p className="text-[9px] text-neutral-500">{d.low}°</p>
          </div>
        ))}
      </div>
    </div>
  ),
);

MinimalWeatherWidget.displayName = "MinimalWeatherWidget";
