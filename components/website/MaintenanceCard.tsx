import React, { forwardRef } from "react";

export const MaintenanceCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-6 text-center font-sans ${className}`} {...props}>
    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.5} className="text-amber-600">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
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
