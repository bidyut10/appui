import { Settings } from "@/icons/Settings";
import React, { forwardRef } from "react";

export const MaintenanceCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 rounded-2xl border border-neutral-100 bg-white p-6 text-center font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-neutral-50 text-amber-500">
      <Settings />
    </div>
    <h3 className="mb-1 text-base font-semibold text-neutral-900">
      Under Maintenance
    </h3>
    <p className="mb-4 text-xs leading-relaxed text-neutral-500">
      We&apos;re making improvements. Expected back online in ~2 hours.
    </p>
    <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
      <div className="h-full w-[65%] animate-pulse rounded-full bg-amber-500" />
    </div>
    <p className="font-mono text-[10px] text-neutral-400">
      Estimated: 4:30 PM IST
    </p>
  </div>
));
MaintenanceCard.displayName = "MaintenanceCard";
