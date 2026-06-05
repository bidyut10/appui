import React, { forwardRef } from "react";

export const QuickStatsRow = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`grid grid-cols-2 gap-2 w-72 font-sans ${className}`} {...props}>
    {[
      { label: "Page Views", value: "48.2K", change: "+12%", up: true },
      { label: "Bounce Rate", value: "32.4%", change: "-3%", up: false },
      { label: "Avg. Session", value: "4m 12s", change: "+8%", up: true },
      { label: "Conversion", value: "3.8%", change: "+0.4%", up: true },
    ].map(({ label, value, change, up }) => (
      <div key={label} className="p-3 bg-white border border-neutral-100 rounded-xl shadow-sm">
        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{label}</p>
        <p className="text-lg font-semibold text-neutral-900 mt-0.5">{value}</p>
        <span className={`text-[10px] font-medium ${up ? "text-emerald-600" : "text-red-500"}`}>{change}</span>
      </div>
    ))}
  </div>
));
QuickStatsRow.displayName = "QuickStatsRow";
