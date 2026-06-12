import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Battery } from "@/icons/Battery";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type AppleWidgetCalendar = {
  label?: string;
  day?: string;
  weekday?: string;
  event?: string;
};

export type AppleWidgetBattery = {
  label?: string;
  level?: string;
  status?: string;
};

export type AppleWidgetScreenTime = {
  label?: string;
  duration?: string;
  change?: string;
  progress?: number;
};

export type AppleWidgetStackProps = {
  calendar?: AppleWidgetCalendar;
  battery?: AppleWidgetBattery;
  screenTime?: AppleWidgetScreenTime;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultCalendar: AppleWidgetCalendar = {
  label: "Calendar",
  day: "6",
  weekday: "Saturday",
  event: "Team Standup · 10am",
};

const defaultBattery: AppleWidgetBattery = {
  label: "Battery",
  level: "87%",
  status: "Fully charged",
};

const defaultScreenTime: AppleWidgetScreenTime = {
  label: "Screen Time",
  duration: "2h 14m",
  change: "↓ 18% from last week",
  progress: 60,
};

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const AppleWidgetStack = forwardRef<
  HTMLDivElement,
  AppleWidgetStackProps
>(
  (
    {
      className,
      calendar = defaultCalendar,
      battery = defaultBattery,
      screenTime = defaultScreenTime,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-widget-stack"
      className={cn("grid w-72 grid-cols-2 gap-3 font-sans", className)}
      {...props}
    >
      <div
        data-slot="apple-widget-stack-calendar"
        className="flex h-36 flex-col justify-between rounded-[1.25rem] bg-linear-to-br from-[#FF6B6B] to-[#FF8E53] p-4 shadow-lg"
      >
        <p className="text-[10px] font-semibold text-white/70 uppercase">
          {calendar.label}
        </p>
        <div>
          <p className="text-3xl font-extralight text-white">{calendar.day}</p>
          <p className="text-sm font-medium text-white/80">{calendar.weekday}</p>
        </div>
        <p className="text-[10px] text-white/60">{calendar.event}</p>
      </div>

      <div
        data-slot="apple-widget-stack-battery"
        className="flex h-36 flex-col justify-between rounded-[1.25rem] bg-[#1c1c1e] p-4 shadow-lg"
      >
        <p className="text-[10px] font-semibold text-white/40 uppercase">
          {battery.label}
        </p>
        <div className="flex items-center gap-2 text-white">
          <div className="text-3xl">
            <Battery className="rotate-270" size={28} />
          </div>
          <p className="text-2xl font-light text-white">{battery.level}</p>
        </div>
        <p className="text-[10px] text-[#34C759]">{battery.status}</p>
      </div>

      <div
        data-slot="apple-widget-stack-screen-time"
        className="col-span-2 flex h-24 items-center justify-between rounded-[1.25rem] bg-linear-to-r from-[#667eea] to-[#764ba2] p-4 shadow-lg"
      >
        <div>
          <p className="text-[10px] font-semibold text-white/60 uppercase">
            {screenTime.label}
          </p>
          <p className="mt-0.5 text-xl font-semibold text-white">
            {screenTime.duration}
          </p>
          <p className="text-[10px] text-white/50">{screenTime.change}</p>
        </div>
        <div className="h-16 w-16">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeDasharray={`${screenTime.progress ?? 60} 100`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  ),
);

AppleWidgetStack.displayName = "AppleWidgetStack";
