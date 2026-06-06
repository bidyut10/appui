import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

export const PricingLifetimeCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`relative w-80 bg-white border-2 border-amber-200 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-400 text-amber-950 text-[9px] font-bold rounded-full uppercase tracking-wider">Lifetime</div>
    <div className="p-6">
      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">One-time</span>
      <div className="mt-2 mb-1 flex items-end gap-1">
        <span className="text-4xl font-light text-neutral-900 tracking-tight">$149</span>
        <span className="text-sm text-neutral-400 line-through mb-1">$499</span>
      </div>
      <p className="text-xs text-neutral-500 mb-5">Pay once, use forever. All future updates included.</p>
      <ul className="space-y-2 mb-5">
        {["All 70+ components", "Lifetime updates", "Commercial license", "Priority support"].map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-neutral-700">
            <Check size={10} className="text-amber-500 shrink-0" />{f}
          </li>
        ))}
      </ul>
      <button className="w-full h-10 bg-amber-500 text-amber-950 text-xs font-bold rounded-lg hover:bg-amber-400 transition-colors cursor-pointer shadow-sm">Get Lifetime Access</button>
      <p className="text-[10px] text-neutral-400 text-center mt-3">🔥 847 sold · Limited time</p>
    </div>
  </div>
));
PricingLifetimeCard.displayName = "PricingLifetimeCard";
