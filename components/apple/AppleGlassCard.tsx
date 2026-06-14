import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Apple Glass Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleGlassCardProps = {
  badge?: string;
  title?: string;
  description?: string;
  progress?: number;
  tags?: string[];
} & ComponentPropsWithoutRef<"div">;

const defaultTags = ["Design", "Blur", "Depth"];

export const AppleGlassCard = forwardRef<HTMLDivElement, AppleGlassCardProps>(
  (
    {
      className,
      badge = "Premium",
      title = "Liquid\nGlass UI",
      description = "Frosted glass surfaces with depth, blur, and subtle borders — inspired by visionOS.",
      progress = 75,
      tags = defaultTags,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-glass-card"
      className={cn(
        "relative h-80 w-72 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/10",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-linear-to-br from-neutral-800 via-neutral-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.15),transparent_50%)]" />

      <div
        data-slot="apple-glass-card-content"
        className="relative z-10 flex h-full flex-col p-5"
      >
        <div className="flex flex-1 flex-col justify-between rounded-3xl border border-white/30 bg-white/20 p-5 backdrop-blur-2xl">
          <div>
            <p
              data-slot="apple-glass-card-badge"
              className="text-[11px] font-medium tracking-widest text-white/70 uppercase"
            >
              {badge}
            </p>
            <h3
              data-slot="apple-glass-card-title"
              className="mt-2 text-2xl leading-tight font-semibold tracking-tight whitespace-pre-line text-white"
            >
              {title}
            </h3>
          </div>
          <div className="space-y-3">
            <div
              data-slot="apple-glass-card-progress"
              className="h-1 overflow-hidden rounded-full bg-white/20"
            >
              <div
                className="h-full rounded-full bg-white/80"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
            <p
              data-slot="apple-glass-card-description"
              className="text-xs leading-relaxed text-white/60"
            >
              {description}
            </p>
          </div>
        </div>
        <div data-slot="apple-glass-card-tags" className="mt-3 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
);

AppleGlassCard.displayName = "AppleGlassCard";
