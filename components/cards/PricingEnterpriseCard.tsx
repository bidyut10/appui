import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

export const PricingEnterpriseCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 bg-neutral-950 border border-neutral-800 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="p-6">
      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Enterprise</span>
      <div className="mt-3 mb-1">
        <span className="text-3xl font-light text-white tracking-tight">Custom</span>
      </div>
      <p className="text-xs text-neutral-500 leading-relaxed mb-5">For large teams with advanced security and compliance needs.</p>
      <ul className="space-y-2.5 mb-6">
        {["Unlimited everything", "SSO & SAML", "Dedicated support", "Custom SLA", "Audit logs"].map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-neutral-400">
            <Check size={10} className="text-emerald-500 shrink-0" />{f}
          </li>
        ))}
      </ul>
      <button className="w-full h-10 bg-white text-neutral-900 text-xs font-semibold rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">Contact Sales</button>
    </div>
  </div>
));
PricingEnterpriseCard.displayName = "PricingEnterpriseCard";
