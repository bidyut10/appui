import React, { forwardRef } from "react";

const sources = [
  { name: "Organic Search", pct: 42, color: "bg-blue-500" },
  { name: "Direct", pct: 28, color: "bg-violet-500" },
  { name: "Social Media", pct: 18, color: "bg-fuchsia-500" },
  { name: "Referral", pct: 12, color: "bg-amber-500" },
];

export const TrafficSourcesCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans ${className}`} {...props}>
    <h4 className="text-sm font-semibold text-neutral-900 mb-1">Traffic Sources</h4>
    <p className="text-[11px] text-neutral-400 mb-4">Last 30 days · 24,580 visits</p>
    <div className="flex items-center justify-center mb-4">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          {sources.reduce<{ els: React.ReactNode[]; offset: number }>(
            (acc, s, i) => {
              const dash = s.pct;
              acc.els.push(
                <circle key={i} cx="18" cy="18" r="15.9" fill="none" strokeWidth="3"
                  stroke={["#3b82f6", "#8b5cf6", "#d946ef", "#f59e0b"][i]}
                  strokeDasharray={`${dash} ${100 - dash}`}
                  strokeDashoffset={-acc.offset}
                />
              );
              acc.offset += dash;
              return acc;
            },
            { els: [], offset: 0 }
          ).els}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold text-neutral-900">24K</span>
          <span className="text-[8px] text-neutral-400">visits</span>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      {sources.map((s) => (
        <div key={s.name} className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${s.color}`} />
          <span className="text-[11px] text-neutral-600 flex-1">{s.name}</span>
          <span className="text-[11px] font-mono text-neutral-500">{s.pct}%</span>
        </div>
      ))}
    </div>
  </div>
));
TrafficSourcesCard.displayName = "TrafficSourcesCard";
