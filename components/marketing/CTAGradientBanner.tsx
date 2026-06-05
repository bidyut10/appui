import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";

export const CTAGradientBanner = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-80 rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-violet-600 via-fuchsia-600 to-pink-500" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

    <div className="relative z-10 p-6 text-center">
      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 mb-3">
        Limited Offer
      </p>
      <h3 className="text-xl font-semibold text-white leading-tight mb-2">
        Start building for free
      </h3>
      <p className="text-xs text-white/70 leading-relaxed mb-5 max-w-[240px] mx-auto">
        Get unlimited access to all 50+ components. No credit card required.
      </p>
      <button className="inline-flex items-center gap-2 h-10 px-6 bg-white text-violet-700 text-sm font-semibold rounded-full hover:bg-white/90 transition-all cursor-pointer active:scale-95 shadow-lg shadow-violet-900/20">
        Get Started Free
        <ArrowRight size={14} />
      </button>
      <p className="text-[10px] text-white/50 mt-3">
        Join 12,400+ developers worldwide
      </p>
    </div>
  </div>
));
CTAGradientBanner.displayName = "CTAGradientBanner";
