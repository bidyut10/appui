import React, { forwardRef } from "react";

export const QuickStatsRow = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`grid w-72 grid-cols-2 gap-2 font-sans ${className}`}
    {...props}
  >
    {[
      { label: "Page Views", value: "48.2K", change: "+12%", up: true },
      { label: "Bounce Rate", value: "32.4%", change: "-3%", up: false },
      { label: "Avg. Session", value: "4m 12s", change: "+8%", up: true },
      { label: "Conversion", value: "3.8%", change: "+0.4%", up: true },
    ].map(({ label, value, change, up }) => (
      <div
        key={label}
        className="rounded-xl border border-neutral-100 bg-white p-3 shadow-lg"
      >
        <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          {label}
        </p>
        <p className="mt-0.5 text-lg font-semibold text-neutral-900">{value}</p>
        <span
          className={`text-[10px] font-medium ${up ? "text-emerald-600" : "text-red-500"}`}
        >
          {change}
        </span>
      </div>
    ))}
  </div>
));
QuickStatsRow.displayName = "QuickStatsRow";
