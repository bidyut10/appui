import React, { forwardRef } from "react";

export const ChatSkeleton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-lg font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse" />
      <div className="space-y-1.5">
        <div className="h-2.5 w-20 bg-neutral-200 rounded animate-pulse" />
        <div className="h-2 w-14 bg-neutral-100 rounded animate-pulse" />
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex gap-2"><div className="w-6 h-6 rounded-lg bg-neutral-200 animate-pulse shrink-0" /><div className="h-10 w-48 bg-neutral-100 rounded-2xl animate-pulse" /></div>
      <div className="flex gap-2 justify-end"><div className="h-8 w-36 bg-neutral-200 rounded-2xl animate-pulse" /></div>
      <div className="flex gap-2"><div className="w-6 h-6 rounded-lg bg-neutral-200 animate-pulse shrink-0" /><div className="h-14 w-52 bg-neutral-100 rounded-2xl animate-pulse" /></div>
    </div>
    <div className="p-3 border-t border-neutral-100"><div className="h-9 bg-neutral-100 rounded-xl animate-pulse" /></div>
  </div>
));
ChatSkeleton.displayName = "ChatSkeleton";
