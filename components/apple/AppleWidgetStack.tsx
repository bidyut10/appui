import React, { forwardRef } from "react";

export const AppleWidgetStack = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 grid grid-cols-2 gap-3 font-sans ${className}`} {...props}>
    <div className="bg-linear-to-br from-[#FF6B6B] to-[#FF8E53] rounded-[1.25rem] p-4 h-36 flex flex-col justify-between shadow-lg">
      <p className="text-[10px] font-semibold text-white/70 uppercase">Calendar</p>
      <div>
        <p className="text-3xl font-extralight text-white">6</p>
        <p className="text-sm text-white/80 font-medium">Saturday</p>
      </div>
      <p className="text-[10px] text-white/60">Team Standup · 10am</p>
    </div>

    <div className="bg-[#1c1c1e] rounded-[1.25rem] p-4 h-36 flex flex-col justify-between shadow-lg">
      <p className="text-[10px] font-semibold text-white/40 uppercase">Battery</p>
      <div className="flex items-center gap-2">
        <div className="text-3xl">🔋</div>
        <p className="text-2xl font-light text-white">87%</p>
      </div>
      <p className="text-[10px] text-[#34C759]">Fully charged</p>
    </div>

    <div className="col-span-2 bg-linear-to-r from-[#667eea] to-[#764ba2] rounded-[1.25rem] p-4 h-24 flex items-center justify-between shadow-lg">
      <div>
        <p className="text-[10px] font-semibold text-white/60 uppercase">Screen Time</p>
        <p className="text-xl font-semibold text-white mt-0.5">2h 14m</p>
        <p className="text-[10px] text-white/50">↓ 18% from last week</p>
      </div>
      <div className="w-16 h-16">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="white" strokeWidth="3" strokeDasharray="60 100" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  </div>
));
AppleWidgetStack.displayName = "AppleWidgetStack";
