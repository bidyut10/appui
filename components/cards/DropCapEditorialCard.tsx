"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { QuoteRight } from "@/icons/QuoteRight";

export type DropCapEditorialCardProps = {
  dropCap?: string;
  body?: string;
  author?: string;
} & ComponentPropsWithoutRef<"div">;

export const DropCapEditorialCard = forwardRef<
  HTMLDivElement,
  DropCapEditorialCardProps
>(
  (
    {
      className,
      dropCap = "D",
      body = "esign systems thrive when typography, spacing, and imagery share one visual language. Every card should feel intentional.",
      author = "Editorial team",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="drop-cap-editorial-card"
      className={cn(
        "w-64 rounded-2xl border border-neutral-200 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <QuoteRight size={20} className="mb-3 text-neutral-300" />
      <p className="text-sm leading-relaxed text-neutral-700">
        <span className="float-left mr-2 mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 font-serif text-2xl font-light text-white">
          {dropCap}
        </span>
        {body}
      </p>
      <p className="mt-4 text-[11px] font-semibold tracking-wide text-neutral-400 uppercase">
        {author}
      </p>
    </div>
  ),
);

DropCapEditorialCard.displayName = "DropCapEditorialCard";
