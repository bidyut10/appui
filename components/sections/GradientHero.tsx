import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { ArrowRight } from "@/icons/ArrowRight";
import { Star } from "@/icons/Star";

/**
 * Gradient Hero built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GradientHeroProps = {
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  joinedCount?: string;
  avatars?: string[];
} & ComponentPropsWithoutRef<"div">;

export const GradientHero = forwardRef<HTMLDivElement, GradientHeroProps>(
  (
    {
      className,
      badge = "Trusted by 2,000+ devs",
      title = "Build beautiful",
      titleHighlight = "websites faster",
      description = "Copy-paste components crafted with care. Production-ready from day one.",
      primaryActionLabel = "Get Started",
      secondaryActionLabel = "View Demo",
      joinedCount = "847",
      avatars = ["JD", "SK", "MR", "AL"],
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="gradient-hero"
      className={cn(
        "relative w-80 overflow-hidden rounded-3xl font-sans",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute top-[-40%] left-[-20%] h-64 w-64 rounded-full bg-teal-600/40 blur-[80px]" />
      <div className="absolute right-[-10%] bottom-[-30%] h-56 w-56 rounded-full bg-cyan-500/30 blur-[70px]" />
      <div className="absolute top-[20%] right-[10%] h-32 w-32 rounded-full bg-blue-500/20 blur-[50px]" />

      <div className="relative z-10 p-7">
        <div
          data-slot="gradient-hero-badge"
          className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-sm"
        >
          <Star size={10} className="text-amber-400" />
          <span className="text-[10px] font-medium tracking-wide text-white/80">
            {badge}
          </span>
        </div>

        <h2
          data-slot="gradient-hero-title"
          className="mb-3 text-2xl leading-[1.15] font-semibold tracking-tight text-white"
        >
          {title}
          <br />
          <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h2>

        <p
          data-slot="gradient-hero-description"
          className="mb-6 max-w-[220px] text-xs leading-relaxed text-neutral-400"
        >
          {description}
        </p>

        <div
          data-slot="gradient-hero-actions"
          className="flex items-center gap-2"
        >
          <button
            type="button"
            aria-label={primaryActionLabel}
            className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 active:scale-95"
          >
            {primaryActionLabel}
            <ArrowRight size={12} />
          </button>
          <button
            type="button"
            aria-label={secondaryActionLabel}
            className="h-9 cursor-pointer rounded-full border border-white/15 px-4 text-xs font-medium text-white/70 transition-colors hover:bg-white/5"
          >
            {secondaryActionLabel}
          </button>
        </div>

        <div
          data-slot="gradient-hero-social-proof"
          className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5"
        >
          <div className="flex -space-x-2">
            {avatars.map((initial) => (
              <div
                key={initial}
                className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-neutral-950 bg-linear-to-br from-teal-400 to-cyan-500 text-[7px] font-bold text-white"
              />
            ))}
          </div>
          <p className="text-[10px] text-neutral-500">
            <span className="font-medium text-white">{joinedCount}</span> joined
            this week
          </p>
        </div>
      </div>
    </div>
  ),
);

GradientHero.displayName = "GradientHero";
