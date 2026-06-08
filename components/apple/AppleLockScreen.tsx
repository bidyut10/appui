import { Chat } from "@/icons/Chat";
import React, { forwardRef } from "react";

export const AppleLockScreen = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative h-96 w-56 overflow-hidden rounded-[2.5rem] font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
    <div className="absolute top-[20%] right-[10%] h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
    <div className="absolute bottom-[30%] left-[5%] h-24 w-24 rounded-full bg-blue-500/15 blur-2xl" />

    <div className="relative z-10 flex h-full flex-col items-center pt-12">
      <div className="mb-6 h-6 w-1 rounded-full bg-white/30" />

      <p className="text-sm font-medium text-white/50">Saturday, June 6</p>
      <p className="mt-1 text-6xl font-extralight tracking-tight text-white">
        10:30
      </p>

      <div className="mt-6 w-[85%] rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#007AFF] text-sm">
            <Chat />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-white">Messages</p>
            <p className="truncate text-[10px] text-white/50">
              Sarah: Design review today?
            </p>
          </div>
          <span className="text-[10px] text-white/40">now</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-16">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg backdrop-blur-md">
          🔦
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg backdrop-blur-md">
          📷
        </div>
      </div>
      <div className="absolute bottom-2 h-1 w-28 rounded-full bg-white/30" />
    </div>
  </div>
));
AppleLockScreen.displayName = "AppleLockScreen";
