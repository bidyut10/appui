"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Moon } from "lucide-react";

const MASCOT = "#38BDF8";
const ACCENT = "#7DD3FC";
const DIAL = { cx: 88, cy: 84, r: 56 } as const;

export type SleepScoreWidgetProps = Readonly<
  {
    score?: number;
    quality?: string;
    duration?: string;
    label?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// Sleep score — DND-style face card with closed eyes and a calm dial.
export const SleepScoreWidget = forwardRef<
  HTMLDivElement,
  SleepScoreWidgetProps
>(
  (
    {
      className,
      score = 87,
      quality = "Good",
      duration = "7h 24m",
      label = "Sleep",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="sleep-score-widget"
        className={cn(
          "relative h-44 w-44 overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg shadow-black/5 select-none",
          className,
        )}
        {...props}
      >
        <svg
          viewBox="0 0 176 176"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <rect width="176" height="176" fill="#020617" />
          <circle cx="88" cy="142" r="58" fill={MASCOT} />
          <path
            d="M64 122 Q68 118 72 122"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M104 122 Q108 118 112 122"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M78 138 Q88 143 98 138"
            stroke="white"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <circle
            cx={DIAL.cx}
            cy={DIAL.cy}
            r={DIAL.r}
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            opacity="0.28"
          />
        </svg>

        <span className="absolute top-3.5 right-3.5 z-10" aria-hidden>
          <Moon size={14} color={ACCENT} fill={ACCENT} />
        </span>

        <div className="absolute inset-x-0 top-[32%] z-10 px-3 text-center">
          <p className="text-base leading-none font-semibold text-white tabular-nums">
            {score}
          </p>
          <p className="mt-1 text-[10px] font-medium tracking-wide text-white/40 uppercase">
            {quality} {label}
          </p>
        </div>

        <p className="absolute inset-x-0 bottom-3.5 z-10 text-center text-[10px] text-white/30 tabular-nums">
          {duration}
        </p>
      </div>
    );
  },
);

SleepScoreWidget.displayName = "SleepScoreWidget";
