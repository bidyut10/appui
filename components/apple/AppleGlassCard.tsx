import React, { forwardRef } from "react";

export const AppleGlassCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-72 h-80 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15),transparent_50%)]" />

    <div className="relative z-10 h-full p-5 flex flex-col">
      <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-medium text-white/70 uppercase tracking-widest">Premium</p>
          <h3 className="text-2xl font-semibold text-white mt-2 leading-tight tracking-tight">
            Liquid
            <br />
            Glass UI
          </h3>
        </div>
        <div className="space-y-3">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-white/80 rounded-full" />
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Frosted glass surfaces with depth, blur, and subtle borders — inspired by visionOS.
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {["Design", "Blur", "Depth"].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-medium text-white/80">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
));
AppleGlassCard.displayName = "AppleGlassCard";
