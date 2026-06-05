import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";

export const RevenueStatCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-3">
      <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Total Revenue</p>
      <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">+18.2%</span>
    </div>
    <p className="text-3xl font-light text-neutral-900 tracking-tight">$84,254</p>
    <p className="text-[11px] text-neutral-400 mt-1">vs $71,320 last month</p>
    <div className="flex items-end gap-1 h-12 mt-4">
      {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
        <div key={i} className={`flex-1 rounded-sm ${i >= 10 ? "bg-emerald-500" : "bg-neutral-100"}`} style={{ height: `${h}%` }} />
      ))}
    </div>
    <button className="flex items-center gap-1 text-[11px] font-medium text-neutral-500 hover:text-neutral-900 mt-3 transition-colors cursor-pointer">
      View report <ArrowRight size={10} />
    </button>
  </div>
));
RevenueStatCard.displayName = "RevenueStatCard";
