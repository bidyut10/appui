"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { Star } from "@/icons/Star";

/**
 * App Store review card built with React, TypeScript,
 * and Tailwind CSS.
 *
 * Replace the demo app information, ratings, reviews,
 * and call-to-action with your own content.
 *
 * Perfect for showcasing app ratings, testimonials,
 * product feedback, or marketplace listings.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
type Review = {
  name: string;
  stars: number;
  text: string;
};

export type AppStoreReviewCardProps = {
  appName?: string;
  category?: string;
  pricing?: string;

  rating?: string;
  totalRatings?: string;

  appIcon?: ReactNode;
  appInitial?: string;

  ctaLabel?: string;

  reviews?: Review[];

  onCtaClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultReviews: Review[] = [
  {
    name: "Sarah C.",
    stars: 5,
    text: "Best component library I've used. Clean and production-ready with readable code.",
  },
  {
    name: "Mike R.",
    stars: 5,
    text: "Saved weeks of design work. The cards are stunning.",
  },
];

export const AppStoreReviewCard = forwardRef<
  HTMLDivElement,
  AppStoreReviewCardProps
>(
  (
    {
      className,

      appName = "AppUI Components",
      category = "Design",
      pricing = "Free",

      rating = "4.9",
      totalRatings = "2.4K ratings",

      appIcon,
      appInitial = "A",

      ctaLabel = "Try Out For Free",

      reviews = defaultReviews,

      onCtaClick,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="app-store-review-card"
      className={cn(
        "w-88 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* App Header */}
      <div
        data-slot="app-store-review-card-header"
        className="mb-4 flex items-start gap-3"
      >
        <div
          data-slot="app-store-review-card-icon"
          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-green-400 to-cyan-400 shadow-sm"
        >
          {appIcon ?? (
            <span className="text-lg font-bold text-white">{appInitial}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3
            data-slot="app-store-review-card-title"
            className="text-sm font-semibold text-neutral-900"
          >
            {appName}
          </h3>

          <p
            data-slot="app-store-review-card-category"
            className="text-[11px] text-neutral-400"
          >
            {category} · {pricing}
          </p>

          <div
            data-slot="app-store-review-card-rating"
            className="mt-0.5 flex items-center gap-2"
          >
            <div className="flex gap-px">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={10} className="text-amber-400" />
              ))}
            </div>

            <span className="text-[11px] text-neutral-500">
              {rating} · {totalRatings}
            </span>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div data-slot="app-store-review-card-reviews" className="space-y-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            data-slot="app-store-review-card-review"
            className="rounded-lg bg-neutral-50 p-3"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-800">
                {review.name}
              </span>

              <div className="flex gap-px">
                {Array.from({
                  length: Math.min(5, Math.max(0, review.stars)),
                }).map((_, index) => (
                  <Star key={index} size={8} className="text-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-[11px] leading-relaxed text-neutral-500">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        aria-label={ctaLabel}
        onClick={onCtaClick}
        data-slot="app-store-review-card-cta"
        className="mt-4 h-9 w-full cursor-pointer rounded-lg bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-950 active:scale-[0.98]"
      >
        {ctaLabel}
      </button>
    </div>
  ),
);

AppStoreReviewCard.displayName = "AppStoreReviewCard";
