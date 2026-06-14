import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { X } from "@/icons/X";
import { ArrowRight } from "@/icons/ArrowRight";

/**
 * Feature Comparison built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type FeatureRow = {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
};

export type FeatureComparisonProps = {
  title?: string;
  description?: string;
  features?: FeatureRow[];
  upgradeTitle?: string;
  upgradeDescription?: string;
  upgradeLabel?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultFeatures: FeatureRow[] = [
  { name: "Components", free: "10", pro: "50+", enterprise: "Unlimited" },
  { name: "Custom themes", free: false, pro: true, enterprise: true },
  { name: "Team sharing", free: false, pro: true, enterprise: true },
  { name: "Support", free: false, pro: false, enterprise: true },
  { name: "SSO & SAML", free: false, pro: false, enterprise: true },
];

function Cell({ value }: { value: boolean | string }) {
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
}

export const FeatureComparison = forwardRef<
  HTMLDivElement,
  FeatureComparisonProps
>(
  (
    {
      className,
      title = "Compare Plans",
      description = "Choose the plan that fits your workflow.",
      features = defaultFeatures,
      upgradeTitle = "Upgrade to Pro",
      upgradeDescription = "Unlock all premium features",
      upgradeLabel = "Upgrade",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="feature-comparison"
      className={cn(
        "w-96 rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        <p className="mt-1 text-xs text-neutral-500">{description}</p>
      </div>

      <div
        data-slot="feature-comparison-table"
        className="overflow-hidden rounded-2xl border border-neutral-100"
      >
        <div className="grid grid-cols-4 items-center border-b border-neutral-100 bg-neutral-50 px-3 py-3">
          <div />
          <p className="text-center text-[10px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
            Free
          </p>
          <p className="text-center text-[10px] font-semibold tracking-[0.2em] text-teal-600 uppercase">
            Pro
          </p>
          <p className="text-center text-[10px] font-medium tracking-[0.2em] text-neutral-400 uppercase">
            Enterprise
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            key={feature.name}
            className={cn(
              "grid grid-cols-4 items-center px-3 py-3",
              index !== features.length - 1 && "border-b border-neutral-100",
            )}
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

      <div
        data-slot="feature-comparison-upgrade"
        className="mt-4 flex items-center justify-between rounded-2xl bg-neutral-50 p-3"
      >
        <div>
          <p className="text-xs font-medium text-neutral-900">{upgradeTitle}</p>
          <p className="mt-0.5 text-[11px] text-neutral-500">
            {upgradeDescription}
          </p>
        </div>
        <button
          type="button"
          aria-label={upgradeLabel}
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-neutral-900 px-3 py-2 text-[11px] font-medium text-white transition-colors hover:bg-black"
        >
          {upgradeLabel}
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  ),
);

FeatureComparison.displayName = "FeatureComparison";
