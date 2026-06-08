import React, { forwardRef } from "react";
import { Star } from "@/icons/Star";

export const AppStoreReviewCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-88 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-4 flex items-start gap-3">
      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-green-400 to-cyan-400 shadow-sm">
        <span className="text-lg font-bold text-white">A</span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-neutral-900">
          AppUI Components
        </h3>
        <p className="text-[11px] text-neutral-400">Design · Free</p>
        <div className="mt-0.5 flex items-center gap-2">
          <div className="flex gap-px">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={10} className="text-amber-400" />
            ))}
          </div>
          <span className="text-[11px] text-neutral-500">
            4.9 · 2.4K ratings
          </span>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      {[
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
      ].map((review) => (
        <div key={review.name} className="rounded-lg bg-neutral-50 p-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-800">
              {review.name}
            </span>
            <div className="flex gap-px">
              {Array.from({ length: review.stars }).map((_, i) => (
                <Star key={i} size={8} className="text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-neutral-500">
            {review.text}
          </p>
        </div>
      ))}
    </div>

    <button className="mt-4 h-9 w-full cursor-pointer rounded-lg bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-950">
      Try Out For Free
    </button>
  </div>
));
AppStoreReviewCard.displayName = "AppStoreReviewCard";
