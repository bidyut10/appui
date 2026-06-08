import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

export const PricingLifetimeCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-80 overflow-hidden rounded-2xl border-2 border-amber-200 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="absolute top-3 right-3 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-bold tracking-wider text-amber-950 uppercase">
      Lifetime
    </div>
    <div className="p-6">
      <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
        One-time
      </span>
      <div className="mt-2 mb-1 flex items-end gap-1">
        <span className="text-4xl font-light tracking-tight text-neutral-900">
          $149
        </span>
        <span className="mb-1 text-sm text-neutral-400 line-through">$499</span>
      </div>
      <p className="mb-5 text-xs text-neutral-500">
        Pay once, use forever. All future updates included.
      </p>
      <ul className="mb-5 space-y-2">
        {[
          "All 70+ components",
          "Lifetime updates",
          "Commercial license",
          "Priority support",
        ].map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-neutral-700"
          >
            <Check size={10} className="shrink-0 text-amber-500" />
            {f}
          </li>
        ))}
      </ul>
      <button className="h-10 w-full cursor-pointer rounded-lg bg-amber-500 text-xs font-bold text-amber-950 shadow-sm transition-colors hover:bg-amber-400">
        Get Lifetime Access
      </button>
      <p className="mt-3 text-center text-[10px] text-neutral-400">
        🔥 847 sold · Limited time
      </p>
    </div>
  </div>
));
PricingLifetimeCard.displayName = "PricingLifetimeCard";
