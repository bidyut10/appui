import React, { forwardRef } from "react";

export const ConversionFunnelCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans ${className}`} {...props}>
    <h4 className="text-sm font-semibold text-neutral-900 mb-1">Conversion Funnel</h4>
    <p className="text-[11px] text-neutral-400 mb-4">Visitor → Customer journey</p>
    <div className="space-y-2">
      {[
        { stage: "Visitors", count: "24,580", pct: 100, color: "bg-blue-500" },
        { stage: "Signups", count: "3,842", pct: 65, color: "bg-violet-500" },
        { stage: "Trials", count: "1,204", pct: 40, color: "bg-fuchsia-500" },
        { stage: "Paid", count: "487", pct: 20, color: "bg-emerald-500" },
      ].map(({ stage, count, pct, color }) => (
        <div key={stage}>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-neutral-700 font-medium">{stage}</span>
            <span className="text-neutral-500">{count}</span>
          </div>
          <div className="h-6 bg-neutral-100 rounded-lg overflow-hidden">
            <div className={`h-full ${color} rounded-lg flex items-center justify-end pr-2`} style={{ width: `${pct}%` }}>
              <span className="text-[9px] font-mono text-white font-medium">{Math.round((487 / 24580) * pct * 10)}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className="text-[10px] text-neutral-400 mt-3 text-center">Overall conversion: <span className="font-semibold text-emerald-600">1.98%</span></p>
  </div>
));
ConversionFunnelCard.displayName = "ConversionFunnelCard";
