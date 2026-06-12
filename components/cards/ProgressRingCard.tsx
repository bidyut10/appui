"use client";

import {
  forwardRef,
  useId,
  useMemo,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/*
| Progress ring card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo progress values, stages,
| and labels with your own project data.
|
| Features:
| - forwardRef support
| - ComponentPropsWithoutRef support
| - cn() utility support
| - useId() for unique gradients
| - useMemo() optimizations
| - Safe value clamping (0-100)
| - Fully customizable content
| - Accessibility improvements
| - Production-ready API
| - UI remains exactly the same
*/

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type ProgressStage = {
  label: string;
  value: number;
  color?: string;
};

export type ProgressRingCardProps = {
  title?: string;

  progress?: number;

  progressLabel?: string;

  showPercentage?: boolean;

  ringStartColor?: string;
  ringEndColor?: string;

  stages?: ProgressStage[];
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const RADIUS = 40;
const STROKE_WIDTH = 6;

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export const ProgressRingCard = forwardRef<
  HTMLDivElement,
  ProgressRingCardProps
>(
  (
    {
      className,

      title = "Project Progress",

      progress = 73,

      progressLabel = "Complete",

      showPercentage = true,

      ringStartColor = "#8b5cf6",
      ringEndColor = "#d946ef",

      stages = [
        {
          label: "Design",
          value: 100,
          color: "bg-emerald-500",
        },
        {
          label: "Development",
          value: 73,
          color: "bg-teal-500",
        },
        {
          label: "Testing",
          value: 30,
          color: "bg-neutral-200",
        },
      ],

      ...props
    },
    ref,
  ) => {
    /* ---------------------------------------------------------------------- */
    /*                               Unique IDs                               */
    /* ---------------------------------------------------------------------- */

    const gradientId = useId();

    /* ---------------------------------------------------------------------- */
    /*                            Normalized Values                           */
    /* ---------------------------------------------------------------------- */

    const normalizedProgress = useMemo(
      () => Math.min(100, Math.max(0, progress)),
      [progress],
    );

    const normalizedStages = useMemo(
      () =>
        stages.map((stage) => ({
          ...stage,
          value: Math.min(100, Math.max(0, stage.value)),
        })),
      [stages],
    );

    /* ---------------------------------------------------------------------- */
    /*                              SVG Helpers                               */
    /* ---------------------------------------------------------------------- */

    const circumference = useMemo(() => 2 * Math.PI * RADIUS, []);

    const offset = useMemo(
      () => circumference - (normalizedProgress / 100) * circumference,
      [circumference, normalizedProgress],
    );

    return (
      <div
        ref={ref}
        data-slot="progress-ring-card"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* -------------------------------------------------------------------------- */}
        {/*                                   Header                                   */}
        {/* -------------------------------------------------------------------------- */}

        <p
          data-slot="progress-ring-card-title"
          className="mb-4 font-mono text-[10px] tracking-widest text-neutral-400 uppercase"
        >
          {title}
        </p>

        {/* -------------------------------------------------------------------------- */}
        {/*                                Progress Ring                               */}
        {/* -------------------------------------------------------------------------- */}

        <div
          data-slot="progress-ring-card-ring"
          className="relative mx-auto mb-4 h-28 w-28"
        >
          <svg
            role="img"
            aria-label={`${normalizedProgress}% ${progressLabel}`}
            viewBox="0 0 100 100"
            className="h-full w-full -rotate-90"
          >
            {/* Track */}

            <circle
              data-slot="progress-ring-card-track"
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke="#f5f5f5"
              strokeWidth={STROKE_WIDTH}
            />

            {/* Progress */}

            <circle
              data-slot="progress-ring-card-indicator"
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth={STROKE_WIDTH}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000"
            />

            {/* Gradient */}

            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={ringStartColor} />
                <stop offset="100%" stopColor={ringEndColor} />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Content */}

          <div
            data-slot="progress-ring-card-center"
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            {showPercentage && (
              <span
                data-slot="progress-ring-card-percentage"
                className="text-2xl font-light text-neutral-900"
              >
                {normalizedProgress}%
              </span>
            )}

            <span
              data-slot="progress-ring-card-label"
              className="font-mono text-[9px] text-neutral-400"
            >
              {progressLabel}
            </span>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/*                                  Breakdown                                 */}
        {/* -------------------------------------------------------------------------- */}

        <div data-slot="progress-ring-card-breakdown" className="space-y-2">
          {normalizedStages.map((stage) => (
            <div
              key={stage.label}
              data-slot="progress-ring-card-stage"
              className="flex items-center gap-2"
            >
              <span
                data-slot="progress-ring-card-stage-label"
                className="w-16 text-[10px] text-neutral-500"
              >
                {stage.label}
              </span>

              <div
                data-slot="progress-ring-card-stage-track"
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100"
              >
                <div
                  data-slot="progress-ring-card-stage-bar"
                  className={cn(
                    "h-full rounded-full",
                    stage.color ?? "bg-teal-500",
                  )}
                  style={{
                    width: `${stage.value}%`,
                  }}
                />
              </div>

              <span
                data-slot="progress-ring-card-stage-value"
                className="w-6 text-right font-mono text-[10px] text-neutral-400"
              >
                {stage.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

ProgressRingCard.displayName = "ProgressRingCard";
