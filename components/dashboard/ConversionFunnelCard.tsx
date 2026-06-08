import React, { forwardRef } from "react";

export const ConversionFunnelCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <h4 className="mb-1 text-sm font-semibold text-neutral-900">
      Conversion Funnel
    </h4>
    <p className="mb-4 text-[11px] text-neutral-400">
      Visitor → Customer journey
    </p>
    <div className="space-y-2">
      {[
        { stage: "Visitors", count: "24,580", pct: 100, color: "bg-blue-500" },
        { stage: "Signups", count: "3,842", pct: 65, color: "bg-violet-500" },
        { stage: "Trials", count: "1,204", pct: 40, color: "bg-fuchsia-500" },
        { stage: "Paid", count: "487", pct: 20, color: "bg-emerald-500" },
      ].map(({ stage, count, pct, color }) => (
        <div key={stage}>
          <div className="mb-1 flex justify-between text-[11px]">
            <span className="font-medium text-neutral-700">{stage}</span>
            <span className="text-neutral-500">{count}</span>
          </div>
          <div className="h-6 overflow-hidden rounded-lg bg-neutral-100">
            <div
              className={`h-full ${color} flex items-center justify-end rounded-lg pr-2`}
              style={{ width: `${pct}%` }}
            >
              <span className="font-mono text-[9px] font-medium text-white">
                {Math.round((487 / 24580) * pct * 10)}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-3 text-center text-[10px] text-neutral-400">
      Overall conversion:{" "}
      <span className="font-semibold text-emerald-600">1.98%</span>
    </p>
  </div>
));
ConversionFunnelCard.displayName = "ConversionFunnelCard";
