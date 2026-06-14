import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/**
 * Timeline built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type TimelineStep = {
  year: string;
  title: string;
  desc: string;
  done: boolean;
  active?: boolean;
};

export type TimelineProps = {
  heading?: string;
  steps?: TimelineStep[];
} & ComponentPropsWithoutRef<"div">;

const defaultSteps: TimelineStep[] = [
  {
    year: "2024",
    title: "Project Kickoff",
    desc: "Assembled the core team and defined the design language.",
    done: true,
  },
  {
    year: "2025",
    title: "Beta Launch",
    desc: "Shipped v1.0 to 500 early adopters with rave reviews.",
    done: true,
  },
  {
    year: "2026",
    title: "Public Release",
    desc: "Open-sourced the full component library for everyone.",
    done: true,
    active: true,
  },
  {
    year: "Soon",
    title: "Design Tokens API",
    desc: "Programmatic access to themes and customization.",
    done: false,
  },
];

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (
    { className, heading = "Our Journey", steps = defaultSteps, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="timeline"
      className={cn("w-72 font-sans", className)}
      {...props}
    >
      <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
        {heading}
      </p>

      <div data-slot="timeline-steps" className="relative pl-6">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-neutral-200" />

        {steps.map((step, i) => (
          <div
            key={step.title}
            className={cn("relative", i < steps.length - 1 && "pb-6")}
          >
            <div
              className={cn(
                "absolute top-1 -left-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2",
                step.done
                  ? step.active
                    ? "border-teal-500 bg-teal-500"
                    : "border-emerald-500 bg-emerald-500"
                  : "border-neutral-300 bg-white",
              )}
            >
              {step.done && !step.active && (
                <Check size={7} className="text-white" />
              )}
              {step.active && (
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </div>

            <span className="font-mono text-[10px] text-neutral-400">
              {step.year}
            </span>
            <h4
              className={cn(
                "mt-0.5 text-sm font-semibold",
                step.done ? "text-neutral-900" : "text-neutral-400",
              )}
            >
              {step.title}
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-neutral-500">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
);

Timeline.displayName = "Timeline";
