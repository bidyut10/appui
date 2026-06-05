import React, { forwardRef } from "react";

export const AnalyticsMiniCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 p-4 bg-neutral-950 border border-neutral-800 rounded-2xl font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-3">
      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Live Visitors</p>
      <span className="flex items-center gap-1 text-[10px] text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
      </span>
    </div>
    <p className="text-3xl font-light text-white tracking-tight">847</p>
    <div className="flex items-end gap-px h-8 mt-3">
      {[30, 45, 35, 60, 50, 70, 55, 80, 65, 90, 75, 95, 85, 70, 60, 75, 90, 100, 85, 95, 80, 90, 95, 100].map((h, i) => (
        <div key={i} className="flex-1 bg-emerald-500/60 rounded-sm" style={{ height: `${h}%`, opacity: i >= 20 ? 1 : 0.3 + (i / 24) * 0.7 }} />
      ))}
    </div>
    <div className="flex justify-between mt-2">
      <span className="text-[9px] font-mono text-neutral-600">12am</span>
      <span className="text-[9px] font-mono text-neutral-600">Now</span>
    </div>
  </div>
));
AnalyticsMiniCard.displayName = "AnalyticsMiniCard";
