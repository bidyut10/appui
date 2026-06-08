import React, { forwardRef } from "react";
import { UserGroup } from "@/icons/UserGroup";

export const UserGrowthCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50">
        <UserGroup size={18} className="text-neutral-600" />
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          Active Users
        </p>
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
          <div className="mb-1 flex justify-between text-[11px]">
            <span className="text-neutral-600">{label}</span>
            <span
              className={`font-medium ${val.startsWith("-") ? "text-red-500" : "text-emerald-600"}`}
            >
              {val}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
            <div
              className={`h-full ${color} rounded-full`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
));
UserGrowthCard.displayName = "UserGrowthCard";
