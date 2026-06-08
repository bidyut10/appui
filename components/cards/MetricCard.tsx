import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";
import { UserGroup } from "@/icons/UserGroup";

export const MetricCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-60 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-50">
        <UserGroup size={16} className="text-neutral-600" />
      </div>
      <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
        This week
      </span>
    </div>

    <p className="mb-1 text-[10px] font-medium tracking-wider text-neutral-400 uppercase">
      Active Users
    </p>
    <div className="mb-4 flex items-end gap-2">
      <span className="text-3xl font-light tracking-tight text-neutral-900">
        2,847
      </span>
      <span className="mb-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600">
        +12.5%
      </span>
    </div>

    <div className="mb-3 flex h-10 items-end gap-1">
      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm transition-all duration-300 ${
            i === 5 ? "bg-blue-500" : "bg-neutral-100 group-hover:bg-blue-100"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>

    <div className="flex items-center justify-between text-[10px] text-neutral-400">
      <span>Mon — Sun</span>
      <button className="flex cursor-pointer items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-900">
        View report
        <ArrowRight size={10} />
      </button>
    </div>
  </div>
));
MetricCard.displayName = "MetricCard";
