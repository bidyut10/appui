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
  <div
    ref={ref}
    className={`w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <h4 className="mb-1 text-sm font-semibold text-neutral-900">
      Traffic Sources
    </h4>
    <p className="mb-4 text-[11px] text-neutral-400">
      Last 30 days · 24,580 visits
    </p>
    <div className="mb-4 flex items-center justify-center">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          {
            sources.reduce<{ els: React.ReactNode[]; offset: number }>(
              (acc, s, i) => {
                const dash = s.pct;
                acc.els.push(
                  <circle
                    key={i}
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    strokeWidth="3"
                    stroke={["#3b82f6", "#8b5cf6", "#d946ef", "#f59e0b"][i]}
                    strokeDasharray={`${dash} ${100 - dash}`}
                    strokeDashoffset={-acc.offset}
                  />,
                );
                acc.offset += dash;
                return acc;
              },
              { els: [], offset: 0 },
            ).els
          }
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
          <div className={`h-2 w-2 rounded-full ${s.color}`} />
          <span className="flex-1 text-[11px] text-neutral-600">{s.name}</span>
          <span className="font-mono text-[11px] text-neutral-500">
            {s.pct}%
          </span>
        </div>
      ))}
    </div>
  </div>
));
TrafficSourcesCard.displayName = "TrafficSourcesCard";
