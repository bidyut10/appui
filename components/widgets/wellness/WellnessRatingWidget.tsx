"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Star } from "@/icons/Star";

export type WellnessRatingWidgetProps = {
  title?: string;
  question?: string;
} & ComponentPropsWithoutRef<"div">;

export const WellnessRatingWidget = forwardRef<
  HTMLDivElement,
  WellnessRatingWidgetProps
>(
  (
    {
      className,
      title = "Rate Wellness",
      question = "How was Wellness helpful to you?",
      ...props
    },
    ref,
  ) => {
    const [rating, setRating] = useState(3);

    return (
      <div
        ref={ref}
        data-slot="wellness-rating-widget"
        className={cn(
          "w-64 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="text-[10px] text-neutral-500">{title}</p>
        <p className="mb-4 text-sm font-bold text-neutral-900">{question}</p>

        <div className="relative mb-6 flex items-center justify-between px-2">
          <div className="absolute inset-x-4 top-1/2 h-0.5 -translate-y-1/2 bg-neutral-200" />
          <div
            className="absolute top-1/2 left-4 h-0.5 -translate-y-1/2 bg-[#D9F26D]"
            style={{ width: `${((rating - 1) / 4) * 100}%`, maxWidth: "calc(100% - 2rem)" }}
          />
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              className={cn(
                "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors",
                n <= rating
                  ? n === 4
                    ? "border-[#F9D6F0] bg-[#F9D6F0] text-sm"
                    : "border-[#D9F26D] bg-[#D9F26D]"
                  : "border-neutral-200 bg-white",
              )}
            >
              {n === 4 ? <Star size={10} className="text-neutral-800" /> : null}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-[#D9F26D] py-2.5 text-sm font-bold text-neutral-900"
        >
          Submit
        </button>
      </div>
    );
  },
);

WellnessRatingWidget.displayName = "WellnessRatingWidget";
