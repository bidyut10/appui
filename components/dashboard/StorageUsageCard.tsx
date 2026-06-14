import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Storage usage card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo storage plan, usage percentage, and breakdown items with your own data.
 */
export type StorageItem = {
  type: string;
  size: string;
  color: string;
};

export type StorageUsageCardProps = {
  title?: string;
  plan?: string;
  usedPercentage?: number;
  usedStorage?: string;
  totalStorage?: string;
  usedLabel?: string;
  footerTemplate?: string;
  items?: StorageItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: StorageItem[] = [
  { type: "Images", size: "1.2 GB", color: "bg-teal-500" },
  { type: "Documents", size: "680 MB", color: "bg-blue-500" },
  { type: "Videos", size: "420 MB", color: "bg-cyan-500" },
];

export const StorageUsageCard = forwardRef<
  HTMLDivElement,
  StorageUsageCardProps
>(
  (
    {
      className,
      title = "Storage",
      plan = "Pro Plan",
      usedPercentage = 48,
      usedStorage = "2.4 GB",
      totalStorage = "5 GB",
      usedLabel = "used",
      footerTemplate,
      items = defaultItems,
      ...props
    },
    ref,
  ) => {
    const circleId = useId();

    const percentage = Math.min(100, Math.max(0, usedPercentage));

    const radius = 15.9;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (percentage / 100) * circumference;

    const footerText =
      footerTemplate ?? `${usedStorage} of ${totalStorage} used`;

    return (
      <div
        ref={ref}
        data-slot="storage-usage-card"
        className={cn(
          "w-72 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

          <span className="font-mono text-[10px] text-neutral-400">{plan}</span>
        </div>

        {/* Storage ring */}
        <div className="relative mx-auto mb-4 h-28 w-28">
          <svg
            viewBox="0 0 36 36"
            className="h-full w-full -rotate-90"
            aria-label={`${percentage}% storage used`}
            role="img"
          >
            <defs>
              <linearGradient id={circleId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
            </defs>

            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="3"
            />

            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke={`url(#${circleId})`}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="transition-all duration-700 ease-out"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold text-neutral-900">
              {percentage}%
            </span>

            <span className="text-[9px] text-neutral-400">{usedLabel}</span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-2">
          {(items ?? []).map(({ type, size, color }) => (
            <div key={type} className="flex items-center gap-2 text-[11px]">
              <div className={cn("h-2 w-2 rounded-full", color)} />

              <span className="flex-1 text-neutral-600">{type}</span>

              <span className="font-mono text-neutral-500">{size}</span>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-[10px] text-neutral-400">
          {footerText}
        </p>
      </div>
    );
  },
);

StorageUsageCard.displayName = "StorageUsageCard";
