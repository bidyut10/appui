import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { ArrowRight } from "@/icons/ArrowRight";

/**
 * CTA Gradient Banner built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CTAGradientBannerProps = {
  badge?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  footerText?: string;
} & ComponentPropsWithoutRef<"div">;

export const CTAGradientBanner = forwardRef<
  HTMLDivElement,
  CTAGradientBannerProps
>(
  (
    {
      className,
      badge = "Limited Offer",
      title = "Start building for free",
      description = "Get unlimited access to all 50+ components. No credit card required.",
      actionLabel = "Get Started Free",
      footerText = "Join 12,400+ developers worldwide",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="cta-gradient-banner"
      className={cn(
        "relative w-80 overflow-hidden rounded-2xl font-sans",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-linear-to-br from-teal-600 via-cyan-600 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 p-6 text-center">
        <p className="mb-3 font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase">
          {badge}
        </p>
        <h3 className="mb-2 text-xl leading-tight font-semibold text-white">
          {title}
        </h3>
        <p className="mx-auto mb-5 max-w-[240px] text-xs leading-relaxed text-white/70">
          {description}
        </p>
        <button
          type="button"
          aria-label={actionLabel}
          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-teal-700 shadow-lg shadow-teal-900/20 transition-all hover:bg-white/90 active:scale-95"
        >
          {actionLabel}
          <ArrowRight size={14} />
        </button>
        <p className="mt-3 text-[10px] text-white/50">{footerText}</p>
      </div>
    </div>
  ),
);

CTAGradientBanner.displayName = "CTAGradientBanner";
