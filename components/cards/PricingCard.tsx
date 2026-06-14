import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/**
 * Modern pricing card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the pricing, description, badge,
 * features, and CTA text with your own content.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type PricingCardProps = {
  planName?: string;
  badge?: string;

  price?: string;
  period?: string;

  description?: string;

  features?: string[];

  buttonText?: string;

  footerText?: string;
} & ComponentPropsWithoutRef<"div">;

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,

      planName = "Pro Plan",
      badge = "Popular",

      price = "$29",
      period = "/month",

      description = "Everything you need to ship beautiful interfaces faster.",

      features = [
        "Unlimited components",
        "Priority support",
        "Custom themes",
        "Team collaboration",
      ],

      buttonText = "Get Started",

      footerText = "14-day free trial · No credit card",

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="pricing-card"
      className={cn(
        "relative w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Top Accent */}
      <div
        data-slot="pricing-card-accent"
        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-teal-500 via-cyan-500 to-green-500"
      />

      <div data-slot="pricing-card-content" className="p-6">
                <div
          data-slot="pricing-card-header"
          className="mb-4 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            {planName}
          </span>

          <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">
            {badge}
          </span>
        </div>

        {/* Pricing */}
        <div data-slot="pricing-card-price" className="mb-5">
          <span className="text-4xl font-light tracking-tight text-neutral-900">
            {price}
          </span>

          <span className="ml-1 text-sm text-neutral-400">{period}</span>
        </div>

        {/* Description */}
        <p
          data-slot="pricing-card-description"
          className="mb-5 text-xs leading-relaxed text-neutral-500"
        >
          {description}
        </p>

        {/* Features */}
        <ul data-slot="pricing-card-features" className="mb-6 space-y-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-neutral-700"
            >
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                <Check size={9} className="text-emerald-600" />
              </div>

              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          data-slot="pricing-card-button"
          className="h-10 w-full cursor-pointer rounded-lg bg-neutral-900 text-sm font-medium text-white transition-colors hover:bg-neutral-950 active:scale-[0.98]"
        >
          {buttonText}
        </button>

                <p
          data-slot="pricing-card-footer"
          className="mt-3 text-center text-[10px] text-neutral-400"
        >
          {footerText}
        </p>
      </div>
    </div>
  ),
);

PricingCard.displayName = "PricingCard";
