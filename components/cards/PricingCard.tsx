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
    className={`relative w-64 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
          Pro Plan
        </span>
        <span className="px-2 py-0.5 bg-violet-50 text-violet-600 text-[10px] font-medium rounded-full">
          Popular
        </span>
      </div>

      <div className="mb-5">
        <span className="text-4xl font-light text-neutral-900 tracking-tight">$29</span>
        <span className="text-sm text-neutral-400 ml-1">/month</span>
      </div>

      <p className="text-xs text-neutral-500 leading-relaxed mb-5">
        Everything you need to ship beautiful interfaces faster.
      </p>

      <ul className="space-y-2.5 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-neutral-700">
            <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
              <Check size={9} className="text-emerald-600" />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <button className="w-full h-10 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer active:scale-[0.98]">
        Get Started
      </button>
      <p className="text-center text-[10px] text-neutral-400 mt-3">
        14-day free trial · No credit card
      </p>
    </div>
  </div>
));
PricingCard.displayName = "PricingCard";
