import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";
import { Star } from "@/icons/Star";

export const GradientHero = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-80 overflow-hidden rounded-3xl font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-neutral-950" />
    <div className="absolute top-[-40%] left-[-20%] h-64 w-64 rounded-full bg-violet-600/40 blur-[80px]" />
    <div className="absolute right-[-10%] bottom-[-30%] h-56 w-56 rounded-full bg-fuchsia-500/30 blur-[70px]" />
    <div className="absolute top-[20%] right-[10%] h-32 w-32 rounded-full bg-blue-500/20 blur-[50px]" />

    <div className="relative z-10 p-7">
      <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-sm">
        <Star size={10} className="text-amber-400" />
        <span className="text-[10px] font-medium tracking-wide text-white/80">
          Trusted by 2,000+ devs
        </span>
      </div>

      <h2 className="mb-3 text-2xl leading-[1.15] font-semibold tracking-tight text-white">
        Build beautiful
        <br />
        <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
          websites faster
        </span>
      </h2>

      <p className="mb-6 max-w-[220px] text-xs leading-relaxed text-neutral-400">
        Copy-paste components crafted with care. Production-ready from day one.
      </p>

      <div className="flex items-center gap-2">
        <button className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 active:scale-95">
          Get Started
          <ArrowRight size={12} />
        </button>
        <button className="h-9 cursor-pointer rounded-full border border-white/15 px-4 text-xs font-medium text-white/70 transition-colors hover:bg-white/5">
          View Demo
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="flex -space-x-2">
          {["JD", "SK", "MR", "AL"].map((i) => (
            <div
              key={i}
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-neutral-950 bg-linear-to-br from-violet-400 to-fuchsia-500 text-[7px] font-bold text-white"
            />
          ))}
        </div>
        <p className="text-[10px] text-neutral-500">
          <span className="font-medium text-white">847</span> joined this week
        </p>
      </div>
    </div>
  </div>
));
GradientHero.displayName = "GradientHero";
