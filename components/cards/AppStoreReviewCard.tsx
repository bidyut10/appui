import React, { forwardRef } from "react";
import { Star } from "@/icons/Star";

export const AppStoreReviewCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-5 font-sans ${className}`}
    {...props}
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shrink-0 shadow-sm">
        <span className="text-white text-lg font-bold">A</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-neutral-900">AppUI Components</h3>
        <p className="text-[11px] text-neutral-400">Design · Free</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex gap-px">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={10} className="text-amber-400" />
            ))}
          </div>
          <span className="text-[11px] text-neutral-500">4.9 · 2.4K ratings</span>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      {[
        { name: "Sarah C.", stars: 5, text: "Best component library I've used. Clean and production-ready." },
        { name: "Mike R.", stars: 5, text: "Saved weeks of design work. The cards are stunning." },
      ].map((review) => (
        <div key={review.name} className="p-3 bg-neutral-50 rounded-xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-neutral-800">{review.name}</span>
            <div className="flex gap-px">
              {Array.from({ length: review.stars }).map((_, i) => (
                <Star key={i} size={8} className="text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-[11px] text-neutral-500 leading-relaxed">{review.text}</p>
        </div>
      ))}
    </div>

    <button className="w-full mt-4 h-9 bg-blue-500 text-white text-xs font-semibold rounded-xl hover:bg-blue-600 transition-colors cursor-pointer">
      Get — Free
    </button>
  </div>
));
AppStoreReviewCard.displayName = "AppStoreReviewCard";
