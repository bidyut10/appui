"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { MoveLeft } from "@/icons/MoveLeft";

export type TurnByTurnNavWidgetProps = {
  distance?: string;
  eta?: string;
  timeLeft?: string;
  distanceLeft?: string;
  ringPercent?: number;
} & ComponentPropsWithoutRef<"div">;

export const TurnByTurnNavWidget = forwardRef<
  HTMLDivElement,
  TurnByTurnNavWidgetProps
>(
  (
    {
      className,
      distance = "300m",
      eta = "10:21",
      timeLeft = "18 min",
      distanceLeft = "4.2 km",
      ringPercent = 64,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="turn-by-turn-nav-widget"
      className={cn(
        "w-72 rounded-3xl bg-neutral-900 p-4 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <MoveLeft size={20} className="text-white" />
          <span className="text-3xl font-bold">{distance}</span>
        </div>
        <div className="relative flex h-14 w-14 items-center justify-center">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#404040" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeDasharray={`${ringPercent} 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-[8px] font-bold">64 km</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-neutral-700 pt-3">
        <div>
          <p className="text-[10px] text-neutral-400">ETA</p>
          <p className="text-xs font-semibold">{eta}</p>
        </div>
        <div>
          <p className="text-[10px] text-neutral-400">Time left</p>
          <p className="text-xs font-semibold">{timeLeft}</p>
        </div>
        <div>
          <p className="text-[10px] text-neutral-400">Distance</p>
          <p className="text-xs font-semibold">{distanceLeft}</p>
        </div>
      </div>
    </div>
  ),
);

TurnByTurnNavWidget.displayName = "TurnByTurnNavWidget";
