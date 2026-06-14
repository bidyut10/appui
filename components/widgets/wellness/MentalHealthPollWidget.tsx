"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Like } from "@/icons/Like";

export type MentalHealthPollWidgetProps = {
  question?: string;
} & ComponentPropsWithoutRef<"div">;

export const MentalHealthPollWidget = forwardRef<
  HTMLDivElement,
  MentalHealthPollWidgetProps
>(
  (
    {
      className,
      question = "Are there aspects of your mental health?",
      ...props
    },
    ref,
  ) => {
    const [vote, setVote] = useState<"up" | "down" | null>(null);

    return (
      <div
        ref={ref}
        data-slot="mental-health-poll-widget"
        className={cn(
          "flex h-52 w-52 flex-col items-center justify-between rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="text-center text-xs font-bold text-neutral-900">{question}</p>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setVote("up")}
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full bg-[#D9F26D] transition-transform",
              vote === "up" && "scale-95 ring-2 ring-neutral-900/20",
            )}
          >
            <Like size={24} />
          </button>
          <button
            type="button"
            onClick={() => setVote("down")}
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-full bg-[#F9D6F0] transition-transform",
              vote === "down" && "scale-95 ring-2 ring-neutral-900/20",
            )}
          >
            <Like size={24} className="rotate-180" />
          </button>
        </div>
      </div>
    );
  },
);

MentalHealthPollWidget.displayName = "MentalHealthPollWidget";
