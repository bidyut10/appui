import React, { forwardRef } from "react";

export const AnalyticsMiniCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-64 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 font-sans ${className}`}
    {...props}
  >
    <div className="mb-3 flex items-center justify-between">
      <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
        Live Visitors
      </p>
      <span className="flex items-center gap-1 text-[10px] text-emerald-400">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />{" "}
        Live
      </span>
    </div>
    <p className="text-3xl font-light tracking-tight text-white">847</p>
    <div className="mt-3 flex h-8 items-end gap-px">
      {[
        30, 45, 35, 60, 50, 70, 55, 80, 65, 90, 75, 95, 85, 70, 60, 75, 90, 100,
        85, 95, 80, 90, 95, 100,
      ].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-emerald-500/60"
          style={{
            height: `${h}%`,
            opacity: i >= 20 ? 1 : 0.3 + (i / 24) * 0.7,
          }}
        />
      ))}
    </div>
    <div className="mt-2 flex justify-between">
      <span className="font-mono text-[9px] text-neutral-600">12am</span>
      <span className="font-mono text-[9px] text-neutral-600">Now</span>
    </div>
  </div>
));
AnalyticsMiniCard.displayName = "AnalyticsMiniCard";
