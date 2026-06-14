"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { Torch } from "@/icons/Torch";

/**
 * Lifetime pricing card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the pricing, features, badge, and CTA text with your own content.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type PricingLifetimeCardProps = {
  badge?: string;
  planName?: string;

  price?: string;
  originalPrice?: string;

  description?: string;

  features?: string[];

  buttonText?: string;

  soldCount?: number;
  footerSuffix?: string;

  badgeIcon?: ReactNode;

  onCtaClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const PricingLifetimeCard = forwardRef<
  HTMLDivElement,
  PricingLifetimeCardProps
>(
  (
    {
      className,

      badge = "Lifetime",
      planName = "One-time",

      price = "$149",
      originalPrice = "$499",

      description = "Pay once, use forever. All future updates included.",

      features = [
        "All 70+ components",
        "Lifetime updates",
        "Commercial license",
        "Priority support",
      ],

      buttonText = "Get Lifetime Access",

      soldCount = 847,
      footerSuffix = "Limited time",

      badgeIcon,

      onCtaClick,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="pricing-lifetime-card"
      className={cn(
        "relative w-80 overflow-hidden rounded-2xl border-2 border-amber-200 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div
        data-slot="pricing-lifetime-card-badge"
        className="absolute top-3 right-3 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-bold tracking-wider text-amber-950 uppercase"
      >
        {badge}
      </div>

      <div data-slot="pricing-lifetime-card-content" className="p-6">
        <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          {planName}
        </span>

        {/* Pricing */}
        <div
          data-slot="pricing-lifetime-card-price"
          className="mt-2 mb-1 flex items-end gap-1"
        >
          <span className="text-4xl font-light tracking-tight text-neutral-900">
            {price}
          </span>

          <span className="mb-1 text-sm text-neutral-400 line-through">
            {originalPrice}
          </span>
        </div>

        {/* Description */}
        <p
          data-slot="pricing-lifetime-card-description"
          className="mb-5 text-xs text-neutral-500"
        >
          {description}
        </p>

        {/* Features */}
        <ul
          data-slot="pricing-lifetime-card-features"
          className="mb-5 space-y-2"
        >
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-neutral-700"
            >
              <Check size={10} className="shrink-0 text-amber-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          data-slot="pricing-lifetime-card-button"
          aria-label={buttonText}
          onClick={onCtaClick}
          className="h-10 w-full cursor-pointer rounded-lg bg-amber-500 text-xs font-bold text-amber-950 shadow-sm transition-colors hover:bg-amber-400"
        >
          {buttonText}
        </button>

        <p
          data-slot="pricing-lifetime-card-footer"
          className="mt-3 flex items-center justify-center gap-1 text-center text-[10px] text-neutral-400"
        >
          <span className="inline-flex shrink-0">
            {badgeIcon ?? <Torch size={10} className="text-amber-500" />}
          </span>
          {soldCount.toLocaleString()} sold · {footerSuffix}
        </p>
      </div>
    </div>
  ),
);

PricingLifetimeCard.displayName = "PricingLifetimeCard";
