import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";
import { UserGroup } from "@/icons/UserGroup";

export const MetricCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-60 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans group ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center">
        <UserGroup size={16} className="text-neutral-600" />
      </div>
      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
        This week
      </span>
    </div>

    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
      Active Users
    </p>
    <div className="flex items-end gap-2 mb-4">
      <span className="text-3xl font-light text-neutral-900 tracking-tight">2,847</span>
      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full mb-1">
        +12.5%
      </span>
    </div>

    <div className="flex items-end gap-1 h-10 mb-3">
      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm transition-all duration-300 ${
            i === 5
              ? "bg-blue-500"
              : "bg-neutral-100 group-hover:bg-blue-100"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>

    <div className="flex items-center justify-between text-[10px] text-neutral-400">
      <span>Mon — Sun</span>
      <button className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">
        View report
        <ArrowRight size={10} />
      </button>
    </div>
  </div>
));
MetricCard.displayName = "MetricCard";
