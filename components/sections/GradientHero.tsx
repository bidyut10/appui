import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";
import { Star } from "@/icons/Star";

export const GradientHero = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-80 rounded-3xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-neutral-950" />
    <div className="absolute top-[-40%] left-[-20%] w-64 h-64 bg-violet-600/40 rounded-full blur-[80px]" />
    <div className="absolute bottom-[-30%] right-[-10%] w-56 h-56 bg-fuchsia-500/30 rounded-full blur-[70px]" />
    <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]" />

    <div className="relative z-10 p-7">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-5">
        <Star size={10} className="text-amber-400" />
        <span className="text-[10px] font-medium text-white/80 tracking-wide">
          Trusted by 2,000+ devs
        </span>
      </div>

      <h2 className="text-2xl font-semibold text-white leading-[1.15] tracking-tight mb-3">
        Build beautiful
        <br />
        <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
          websites faster
        </span>
      </h2>

      <p className="text-xs text-neutral-400 leading-relaxed mb-6 max-w-[220px]">
        Copy-paste components crafted with care. Production-ready from day one.
      </p>

      <div className="flex items-center gap-2">
        <button className="h-9 px-4 bg-white text-neutral-900 text-xs font-semibold rounded-full flex items-center gap-1.5 hover:bg-neutral-100 transition-colors cursor-pointer active:scale-95">
          Get Started
          <ArrowRight size={12} />
        </button>
        <button className="h-9 px-4 text-white/70 text-xs font-medium rounded-full border border-white/15 hover:bg-white/5 transition-colors cursor-pointer">
          View Demo
        </button>
      </div>

      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
        <div className="flex -space-x-2">
          {["JD", "SK", "MR", "AL"].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500 border-2 border-neutral-950 flex items-center justify-center text-[7px] font-bold text-white"
            />
          ))}
        </div>
        <p className="text-[10px] text-neutral-500">
          <span className="text-white font-medium">847</span> joined this week
        </p>
      </div>
    </div>
  </div>
));
GradientHero.displayName = "GradientHero";
