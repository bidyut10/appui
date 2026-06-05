import React, { forwardRef } from "react";

export const AppleLockScreen = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`relative w-56 h-[360px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/30 font-sans ${className}`} {...props}>
    <div className="absolute inset-0 bg-linear-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
    <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-[30%] left-[5%] w-24 h-24 bg-blue-500/15 rounded-full blur-2xl" />

    <div className="relative z-10 h-full flex flex-col items-center pt-12">
      <div className="w-1 h-6 bg-white/30 rounded-full mb-6" />

      <p className="text-white/50 text-sm font-medium">Saturday, June 6</p>
      <p className="text-white text-6xl font-extralight tracking-tight mt-1">10:30</p>

      <div className="mt-6 w-[85%] bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#007AFF] flex items-center justify-center text-sm">💬</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-white">Messages</p>
            <p className="text-[10px] text-white/50 truncate">Sarah: Design review today?</p>
          </div>
          <span className="text-[10px] text-white/40">now</span>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex items-center justify-center gap-16">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-lg">🔦</div>
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-lg">📷</div>
      </div>
      <div className="absolute bottom-2 w-28 h-1 bg-white/30 rounded-full" />
    </div>
  </div>
));
AppleLockScreen.displayName = "AppleLockScreen";
