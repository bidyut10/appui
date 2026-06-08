import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

export const PricingEnterpriseCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="p-6">
      <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
        Enterprise
      </span>
      <div className="mt-3 mb-1">
        <span className="text-3xl font-light tracking-tight text-white">
          Custom
        </span>
      </div>
      <p className="mb-5 text-xs leading-relaxed text-neutral-500">
        For large teams with advanced security and compliance needs.
      </p>
      <ul className="mb-6 space-y-2.5">
        {[
          "Unlimited everything",
          "SSO & SAML",
          "Dedicated support",
          "Custom SLA",
          "Audit logs",
        ].map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-neutral-400"
          >
            <Check size={10} className="shrink-0 text-emerald-500" />
            {f}
          </li>
        ))}
      </ul>
      <button className="h-10 w-full cursor-pointer rounded-lg bg-white text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100">
        Contact Sales
      </button>
    </div>
  </div>
));
PricingEnterpriseCard.displayName = "PricingEnterpriseCard";
