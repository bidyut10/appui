import React, { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Star } from "@/icons/Star";

type Stat = {
  value: string;
  label: string;
};

type Platform = {
  name: string;
  rating?: number;
};

const defaultStats: Stat[] = [
  { value: "50+", label: "Components" },
  { value: "12K", label: "Developers" },
  { value: "99%", label: "Satisfaction" },
  { value: "4.9", label: "Rating" },
];

const defaultPlatforms: Platform[] = [
  { name: "Product Hunt", rating: 5 },
  { name: "Hacker News", rating: 5 },
  { name: "Dev.to", rating: 5 },
];

/**
 * Social Proof Bar built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type SocialProofBarProps = {
  stats?: Stat[];
  platforms?: Platform[];
} & ComponentPropsWithoutRef<"div">;

export const SocialProofBar = forwardRef<HTMLDivElement, SocialProofBarProps>(
  (
    { className, stats = defaultStats, platforms = defaultPlatforms, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="social-proof-bar"
      className={cn("w-96 font-sans", className)}
      {...props}
    >
      {/* Stats Grid */}

      <div
        data-slot="social-proof-bar-stats"
        className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-200 shadow-xl ring-1 ring-black/[0.03]"
      >
        <div className="grid grid-cols-4 gap-px">
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              data-slot="social-proof-bar-stat"
              className={cn(
                "bg-white p-4 text-center transition-colors duration-200 hover:bg-neutral-50",
                index === 0 && "rounded-l-2xl",
                index === stats.length - 1 && "rounded-r-2xl",
              )}
            >
              <p className="text-xl font-light tracking-tight text-neutral-900">
                {value}
              </p>

              <p className="mt-1 font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ratings */}

      <div
        data-slot="social-proof-bar-platforms"
        className="mt-4 flex items-center justify-center gap-6"
      >
        {platforms.map(({ name, rating = 5 }) => (
          <div
            key={name}
            data-slot="social-proof-bar-platform"
            className="flex items-center justify-center gap-1.5"
          >
            <div className="flex gap-px">
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  size={9}
                  aria-hidden="true"
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <span className="text-[10px] text-neutral-500">{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
);

SocialProofBar.displayName = "SocialProofBar";
