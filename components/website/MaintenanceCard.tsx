import { Settings } from "@/icons/Settings";
import React, { forwardRef } from "react";

export const MaintenanceCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-6 text-center font-sans ${className}`} {...props}>
    <div className="w-14 h-14 rounded-lg bg-neutral-50 text-amber-500 flex items-center justify-center mx-auto mb-4">
      <Settings/>
    </div>
    <h3 className="text-base font-semibold text-neutral-900 mb-1">Under Maintenance</h3>
    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
      We&apos;re making improvements. Expected back online in ~2 hours.
    </p>
    <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-3">
      <div className="h-full w-[65%] bg-amber-500 rounded-full animate-pulse" />
    </div>
    <p className="text-[10px] font-mono text-neutral-400">Estimated: 4:30 PM IST</p>
  </div>
));
MaintenanceCard.displayName = "MaintenanceCard";
