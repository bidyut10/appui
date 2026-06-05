import React, { forwardRef } from "react";

export const StorageUsageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 p-5 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans ${className}`} {...props}>
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-sm font-semibold text-neutral-900">Storage</h4>
      <span className="text-[10px] font-mono text-neutral-400">Pro Plan</span>
    </div>
    <div className="relative w-28 h-28 mx-auto mb-4">
      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f5f5f5" strokeWidth="3" />
        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="3"
          strokeDasharray="48 100" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-semibold text-neutral-900">48%</span>
        <span className="text-[9px] text-neutral-400">used</span>
      </div>
    </div>
    <div className="space-y-2">
      {[
        { type: "Images", size: "1.2 GB", color: "bg-violet-500" },
        { type: "Documents", size: "680 MB", color: "bg-blue-500" },
        { type: "Videos", size: "420 MB", color: "bg-fuchsia-500" },
      ].map(({ type, size, color }) => (
        <div key={type} className="flex items-center gap-2 text-[11px]">
          <div className={`w-2 h-2 rounded-full ${color}`} />
          <span className="text-neutral-600 flex-1">{type}</span>
          <span className="font-mono text-neutral-500">{size}</span>
        </div>
      ))}
    </div>
    <p className="text-[10px] text-neutral-400 text-center mt-3">2.4 GB of 5 GB used</p>
  </div>
));
StorageUsageCard.displayName = "StorageUsageCard";
