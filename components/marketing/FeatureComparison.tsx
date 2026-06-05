import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";
import { X } from "@/icons/X";

const features = [
  { name: "Components", free: "10", pro: "50+", enterprise: "Unlimited" },
  { name: "Custom themes", free: false, pro: true, enterprise: true },
  { name: "Team sharing", free: false, pro: true, enterprise: true },
  { name: "Priority support", free: false, pro: false, enterprise: true },
  { name: "SSO & SAML", free: false, pro: false, enterprise: true },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <span className="text-xs font-medium text-neutral-700">{value}</span>;
  }
  return value ? (
    <Check size={14} className="text-emerald-500 mx-auto" />
  ) : (
    <X size={14} className="text-neutral-300 mx-auto" />
  );
};

export const FeatureComparison = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="grid grid-cols-4 gap-0">
      <div className="p-3 border-b border-neutral-100" />
      {["Free", "Pro", "Enterprise"].map((plan, i) => (
        <div
          key={plan}
          className={`p-3 border-b border-neutral-100 text-center ${i === 1 ? "bg-violet-50" : ""}`}
        >
          <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
            {plan}
          </p>
          {i === 1 && (
            <span className="inline-block mt-0.5 px-1.5 py-px bg-violet-500 text-white text-[8px] font-medium rounded-full">
              Popular
            </span>
          )}
        </div>
      ))}

      {features.map((row) => (
        <React.Fragment key={row.name}>
          <div className="px-3 py-2.5 border-b border-neutral-50 text-[11px] text-neutral-600 font-medium">
            {row.name}
          </div>
          <div className="px-3 py-2.5 border-b border-neutral-50 text-center flex items-center justify-center">
            <Cell value={row.free} />
          </div>
          <div className="px-3 py-2.5 border-b border-neutral-50 text-center flex items-center justify-center bg-violet-50/50">
            <Cell value={row.pro} />
          </div>
          <div className="px-3 py-2.5 border-b border-neutral-50 text-center flex items-center justify-center">
            <Cell value={row.enterprise} />
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
));
FeatureComparison.displayName = "FeatureComparison";
