import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";
import { X } from "@/icons/X";
import { ArrowRight } from "@/icons/ArrowRight";

const features = [
  { name: "Components", free: "10", pro: "50+", enterprise: "Unlimited" },
  { name: "Custom themes", free: false, pro: true, enterprise: true },
  { name: "Team sharing", free: false, pro: true, enterprise: true },
  { name: "Support", free: false, pro: false, enterprise: true },
  { name: "SSO & SAML", free: false, pro: false, enterprise: true },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return (
      <span className="text-xs font-semibold text-neutral-900">{value}</span>
    );
  }

  return value ? (
    <Check size={14} className="text-emerald-500" />
  ) : (
    <X size={14} className="text-neutral-300" />
  );
};

export const FeatureComparison = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-96 rounded-3xl border border-neutral-100 bg-white p-5 shadow-lg font-sans ${className}`}
    {...props}
  >
    <div className="mb-4">
      <h3 className="text-base font-semibold text-neutral-900">
        Compare Plans
      </h3>

      <p className="mt-1 text-xs text-neutral-500">
        Choose the plan that fits your workflow.
      </p>
    </div>

    <div className="overflow-hidden rounded-2xl border border-neutral-100">
      <div className="grid grid-cols-4 items-center bg-neutral-50 px-3 py-3 border-b border-neutral-100">
        <div />

        <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          Free
        </p>

        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
          Pro
        </p>

        <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          Enterprise
        </p>
      </div>

      {features.map((feature, index) => (
        <div
          key={feature.name}
          className={`grid grid-cols-4 items-center px-3 py-3 ${
            index !== features.length - 1 ? "border-b border-neutral-100" : ""
          }`}
        >
          <p className="text-[11px] font-medium text-neutral-700">
            {feature.name}
          </p>

          <div className="flex justify-center">
            <Cell value={feature.free} />
          </div>

          <div className="flex justify-center">
            <Cell value={feature.pro} />
          </div>

          <div className="flex justify-center">
            <Cell value={feature.enterprise} />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 flex items-center justify-between rounded-2xl bg-neutral-50 p-3">
      <div>
        <p className="text-xs font-medium text-neutral-900">Upgrade to Pro</p>

        <p className="mt-0.5 text-[11px] text-neutral-500">
          Unlock all premium features
        </p>
      </div>

      <button className="flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-2 text-[11px] font-medium text-white transition-colors hover:bg-black cursor-pointer">
        Upgrade
        <ArrowRight size={12} />
      </button>
    </div>
  </div>
));

FeatureComparison.displayName = "FeatureComparison";
