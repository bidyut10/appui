import React, { forwardRef } from "react";
import { UserGroup } from "@/icons/UserGroup";

export const UserGrowthCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans ${className}`} {...props}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
        <UserGroup size={18} className="text-blue-600" />
      </div>
      <div>
        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Active Users</p>
        <p className="text-xl font-semibold text-neutral-900">12,847</p>
      </div>
    </div>
    <div className="space-y-2">
      {[
        { label: "New signups", val: "+342", pct: 72, color: "bg-blue-500" },
        { label: "Returning", val: "+128", pct: 45, color: "bg-violet-500" },
        { label: "Churned", val: "-24", pct: 12, color: "bg-red-400" },
      ].map(({ label, val, pct, color }) => (
        <div key={label}>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-neutral-600">{label}</span>
            <span className={`font-medium ${val.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}>{val}</span>
          </div>
          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
            <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  </div>
));
UserGrowthCard.displayName = "UserGrowthCard";
