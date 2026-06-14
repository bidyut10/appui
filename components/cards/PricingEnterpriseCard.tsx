import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Check } from "@/icons/Check";

/**
 * Enterprise pricing card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the plan name, pricing label, description,
 * features, and CTA text with your own content.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type PricingEnterpriseCardProps = {
  planName?: string;

  priceLabel?: string;

  description?: string;

  features?: string[];

  buttonText?: string;
} & ComponentPropsWithoutRef<"div">;

export const PricingEnterpriseCard = forwardRef<
  HTMLDivElement,
  PricingEnterpriseCardProps
>(
  (
    {
      className,

      planName = "Enterprise",

      priceLabel = "Custom",

      description = "For large teams with advanced security and compliance needs.",

      features = [
        "Unlimited everything",
        "SSO & SAML",
        "Dedicated support",
        "Custom SLA",
        "Audit logs",
      ],

      buttonText = "Contact Sales",

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="pricing-enterprise-card"
      className={cn(
        "w-80 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div data-slot="pricing-enterprise-card-content" className="p-6">
        <span
          data-slot="pricing-enterprise-card-plan"
          className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase"
        >
          {planName}
        </span>

        {/* Pricing */}
        <div data-slot="pricing-enterprise-card-price" className="mt-3 mb-1">
          <span className="text-3xl font-light tracking-tight text-white">
            {priceLabel}
          </span>
        </div>

        {/* Description */}
        <p
          data-slot="pricing-enterprise-card-description"
          className="mb-5 text-xs leading-relaxed text-neutral-500"
        >
          {description}
        </p>

        {/* Features */}
        <ul
          data-slot="pricing-enterprise-card-features"
          className="mb-6 space-y-2.5"
        >
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-neutral-400"
            >
              <Check size={10} className="shrink-0 text-emerald-500" />

              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          data-slot="pricing-enterprise-card-button"
          className="h-10 w-full cursor-pointer rounded-lg bg-white text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
        >
          {buttonText}
        </button>
      </div>
    </div>
  ),
);

PricingEnterpriseCard.displayName = "PricingEnterpriseCard";
