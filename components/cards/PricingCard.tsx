import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

const features = [
  "Unlimited components",
  "Priority support",
  "Custom themes",
  "Team collaboration",
];

export const PricingCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-cyan-500 to-green-500" />

    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Pro Plan
        </span>
        <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">
          Popular
        </span>
      </div>

      <div className="mb-5">
        <span className="text-4xl font-light tracking-tight text-neutral-900">
          $29
        </span>
        <span className="ml-1 text-sm text-neutral-400">/month</span>
      </div>

      <p className="mb-5 text-xs leading-relaxed text-neutral-500">
        Everything you need to ship beautiful interfaces faster.
      </p>

      <ul className="mb-6 space-y-2.5">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-neutral-700"
          >
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50">
              <Check size={9} className="text-emerald-600" />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <button className="h-10 w-full cursor-pointer rounded-lg bg-neutral-900 text-sm font-medium text-white transition-colors hover:bg-neutral-950 active:scale-[0.98]">
        Get Started
      </button>
      <p className="mt-3 text-center text-[10px] text-neutral-400">
        14-day free trial · No credit card
      </p>
    </div>
  </div>
));
PricingCard.displayName = "PricingCard";
