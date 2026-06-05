import React, { forwardRef } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const values = [40, 55, 45, 70, 60, 85];

export const SalesOverviewCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-5 font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-4">
      <div>
        <h4 className="text-sm font-semibold text-neutral-900">Sales Overview</h4>
        <p className="text-[11px] text-neutral-400 mt-0.5">Monthly performance</p>
      </div>
      <select className="text-[10px] font-medium text-neutral-600 border border-neutral-200 rounded-lg px-2 py-1 bg-neutral-50 outline-none cursor-pointer">
        <option>2026</option>
      </select>
    </div>
    <div className="relative h-32 flex items-end gap-2">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`M0,${100 - values[0]} ${values.map((v, i) => `L${(i / (values.length - 1)) * 240},${100 - v}`).join(" ")} L240,100 L0,100 Z`}
          fill="url(#salesGrad)"
        />
        <polyline
          points={values.map((v, i) => `${(i / (values.length - 1)) * 240},${100 - v}`).join(" ")}
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
        />
      </svg>
    </div>
    <div className="flex justify-between mt-2">
      {months.map((m) => (
        <span key={m} className="text-[9px] font-mono text-neutral-400">{m}</span>
      ))}
    </div>
    <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
      <div><p className="text-[10px] text-neutral-400">Total Sales</p><p className="text-sm font-semibold text-neutral-900">$142,580</p></div>
      <div className="text-right"><p className="text-[10px] text-neutral-400">Avg. Order</p><p className="text-sm font-semibold text-neutral-900">$89</p></div>
    </div>
  </div>
));
SalesOverviewCard.displayName = "SalesOverviewCard";
