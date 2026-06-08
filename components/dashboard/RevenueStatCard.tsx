import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";

export const RevenueStatCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-3 flex items-center justify-between">
      <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
        Total Revenue
      </p>
      <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">
        +18.2%
      </span>
    </div>
    <p className="text-3xl font-light tracking-tight text-neutral-900">
      $84,254
    </p>
    <p className="mt-1 text-[11px] text-neutral-400">vs $71,320 last month</p>
    <div className="mt-4 flex h-12 items-end gap-1">
      {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm ${i >= 10 ? "bg-emerald-500" : "bg-neutral-100"}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <button className="mt-3 flex cursor-pointer items-center gap-1 text-[11px] font-medium text-neutral-500 transition-colors hover:text-neutral-900">
      View report <ArrowRight size={10} />
    </button>
  </div>
));
RevenueStatCard.displayName = "RevenueStatCard";
