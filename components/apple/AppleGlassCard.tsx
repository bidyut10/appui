import React, { forwardRef } from "react";

export const AppleGlassCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative h-80 w-72 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/10 ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-neutral-800 via-neutral-900 to-black" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15),transparent_50%)]" />

    <div className="relative z-10 flex h-full flex-col p-5">
      <div className="flex flex-1 flex-col justify-between rounded-3xl border border-white/30 bg-white/20 p-5 backdrop-blur-2xl">
        <div>
          <p className="text-[11px] font-medium tracking-widest text-white/70 uppercase">
            Premium
          </p>
          <h3 className="mt-2 text-2xl leading-tight font-semibold tracking-tight text-white">
            Liquid
            <br />
            Glass UI
          </h3>
        </div>
        <div className="space-y-3">
          <div className="h-1 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-3/4 rounded-full bg-white/80" />
          </div>
          <p className="text-xs leading-relaxed text-white/60">
            Frosted glass surfaces with depth, blur, and subtle borders —
            inspired by visionOS.
          </p>
        </div>
      </div>
    </div>
  </div>
));
AppleGlassCard.displayName = "AppleGlassCard";
