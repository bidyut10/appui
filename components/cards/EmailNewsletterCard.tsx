"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

/**
 * Email newsletter preview card — campaign-style white layout.
 *
 * Replace demo content with your own newsletter HTML preview.
 */
export type EmailNewsletterCardProps = {
  subject?: string;
  preheader?: string;
  headline?: string;
  body?: string;
  ctaLabel?: string;
  "/dbg.png"?: string;
  onCta?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const EmailNewsletterCard = forwardRef<
  HTMLDivElement,
  EmailNewsletterCardProps
>(
  (
    {
      className,
      subject = "June UI drop — 18 new components",
      preheader = "Text animations, GitHub cards, and more",
      headline = "What's new this month",
      body = "Fresh Gmail widgets, typewriter text, GitHub PR cards, and Discord-style chat UIs — all copy-paste ready.",
      ctaLabel = "Browse components",
      "/dbg.png": image = "/dbg.png",
      onCta,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="email-newsletter-card"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
        <p className="truncate text-[12px] font-semibold text-neutral-900">
          {subject}
        </p>
        <p className="truncate text-[10px] text-neutral-400">{preheader}</p>
      </div>

      <div className="relative h-28 overflow-hidden bg-neutral-100">
        <Image src={image} alt="" fill sizes="288px" className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-neutral-900">{headline}</h3>
        <p className="mt-2 text-[12px] leading-relaxed text-neutral-600">
          {body}
        </p>
        <button
          type="button"
          onClick={onCta}
          className="mt-4 w-full cursor-pointer rounded-xl bg-neutral-900 py-2.5 text-[12px] font-semibold text-white transition-transform active:scale-[0.98]"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  ),
);

EmailNewsletterCard.displayName = "EmailNewsletterCard";
