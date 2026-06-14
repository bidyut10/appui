import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Apple Health Rings built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleHealthRing = {
  color: string;
  pct: number;
  label: string;
  value: string;
};

export type AppleHealthRingsProps = {
  title?: string;
  dateLabel?: string;
  rings?: AppleHealthRing[];
} & ComponentPropsWithoutRef<"div">;

const defaultRings: AppleHealthRing[] = [
  { color: "#FF2D55", pct: 75, label: "Move", value: "450/600 CAL" },
  { color: "#AEF359", pct: 60, label: "Exercise", value: "24/30 MIN" },
  { color: "#5AC8FA", pct: 90, label: "Stand", value: "11/12 HRS" },
];

export const AppleHealthRings = forwardRef<
  HTMLDivElement,
  AppleHealthRingsProps
>(
  (
    {
      className,
      title = "Activity",
      dateLabel = "Wednesday, Jun 6",
      rings = defaultRings,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-health-rings"
      className={cn(
        "w-72 rounded-[1.5rem] bg-black p-5 font-sans",
        className,
      )}
      {...props}
    >
      <p
        data-slot="apple-health-rings-title"
        className="mb-4 text-[11px] font-semibold tracking-widest text-white/40 uppercase"
      >
        {title}
      </p>

      <div className="flex items-center gap-5">
        <div
          data-slot="apple-health-rings-chart"
          className="relative h-28 w-28 shrink-0"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {rings.map((ring, i) => {
              const r = 40 - i * 12;
              const circ = 2 * Math.PI * r;
              return (
                <g key={ring.label}>
                  <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="#1c1c1e"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth="8"
                    strokeDasharray={circ}
                    strokeDashoffset={
                      circ - (Math.min(100, Math.max(0, ring.pct)) / 100) * circ
                    }
                    strokeLinecap="round"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div
          data-slot="apple-health-rings-legend"
          className="flex-1 space-y-3"
        >
          {rings.map((ring) => (
            <div
              key={ring.label}
              data-slot="apple-health-rings-item"
              className="flex items-center gap-2"
            >
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: ring.color }}
              />
              <div>
                <p className="text-[13px] font-semibold text-white">
                  {ring.label}
                </p>
                <p className="text-[11px] text-white/40">{ring.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        data-slot="apple-health-rings-date"
        className="mt-4 text-center text-[11px] text-white/30"
      >
        {dateLabel}
      </p>
    </div>
  ),
);

AppleHealthRings.displayName = "AppleHealthRings";
