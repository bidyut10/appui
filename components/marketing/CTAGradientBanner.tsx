import React, { forwardRef } from "react";
import { ArrowRight } from "@/icons/ArrowRight";

export const CTAGradientBanner = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-80 overflow-hidden rounded-2xl font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-violet-600 via-fuchsia-600 to-pink-500" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
    <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

    <div className="relative z-10 p-6 text-center">
      <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase">
        Limited Offer
      </p>
      <h3 className="mb-2 text-xl leading-tight font-semibold text-white">
        Start building for free
      </h3>
      <p className="mx-auto mb-5 max-w-[240px] text-xs leading-relaxed text-white/70">
        Get unlimited access to all 50+ components. No credit card required.
      </p>
      <button className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-violet-700 shadow-lg shadow-violet-900/20 transition-all hover:bg-white/90 active:scale-95">
        Get Started Free
        <ArrowRight size={14} />
      </button>
      <p className="mt-3 text-[10px] text-white/50">
        Join 12,400+ developers worldwide
      </p>
    </div>
  </div>
));
CTAGradientBanner.displayName = "CTAGradientBanner";
