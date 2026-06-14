"use client";

import {
  forwardRef,
  useState,
  Fragment,
  type ComponentType,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { User } from "@/icons/User";
import { Settings } from "@/icons/Settings";
import { Star } from "@/icons/Star";

/**
 * Onboarding steps card built with Next.js,
 * React, TypeScript and Tailwind CSS.
 *
 * Replace the demo onboarding flow with your
 * own setup process.
 *
 * Supports custom steps, descriptions and
 * initial active step.
 */
export type OnboardingStep = {
  label: string;
  icon: ComponentType<{ size?: number }>;

  title: string;
  description: string;
};

export type OnboardingStepsProps = {
  steps?: OnboardingStep[];
  defaultStep?: number;
} & ComponentPropsWithoutRef<"div">;

const defaultSteps: OnboardingStep[] = [
  {
    label: "Profile",
    icon: User,
    title: "Set up your profile",
    description: "Add your name and avatar to personalize your experience.",
  },
  {
    label: "Preferences",
    icon: Settings,
    title: "Choose your preferences",
    description: "Pick your theme, language, and notification settings.",
  },
  {
    label: "Complete",
    icon: Star,
    title: "You're all set!",
    description: "Your workspace is ready. Start building something amazing.",
  },
];

export const OnboardingSteps = forwardRef<HTMLDivElement, OnboardingStepsProps>(
  ({ className, steps = defaultSteps, defaultStep = 0, ...props }, ref) => {
    const [current, setCurrent] = useState(defaultStep);

    const activeStep = steps[current];

    return (
      <div
        ref={ref}
        data-slot="onboarding-steps"
        className={cn("w-72 font-sans", className)}
        {...props}
      >
        <div
          data-slot="onboarding-steps-progress"
          className="mb-6 flex items-center justify-between"
        >
          {steps.map((step, index) => {
            const done = index < current;
            const active = index === current;

            return (
              <Fragment key={step.label}>
                <button
                  type="button"
                  aria-label={`Go to ${step.label} step`}
                  onClick={() => setCurrent(index)}
                  className="group flex cursor-pointer flex-col items-center gap-1.5"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300",
                      done
                        ? "bg-emerald-500 text-white shadow-sm shadow-emerald-200"
                        : active
                          ? "bg-neutral-900 text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200",
                    )}
                  >
                    {done ? <Check size={16} /> : <step.icon size={16} />}
                  </div>

                  <span
                    className={cn(
                      "text-[10px] font-medium",
                      active
                        ? "text-neutral-900"
                        : done
                          ? "text-emerald-600"
                          : "text-neutral-400",
                    )}
                  >
                    {step.label}
                  </span>
                </button>

                {index < steps.length - 1 && (
                  <div className="relative mx-2 -mt-4.5 h-px flex-1">
                    <div className="absolute inset-0 rounded-full bg-neutral-200" />

                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-emerald-500 transition-all duration-500"
                      style={{
                        width: done ? "100%" : "0%",
                      }}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        <div
          data-slot="onboarding-steps-card"
          className="rounded-xl border border-neutral-100 bg-white p-5 shadow-lg"
        >
          <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            Step {current + 1} of {steps.length}
          </p>

          <h4 className="mb-1 text-sm font-semibold text-neutral-900">
            {activeStep.title}
          </h4>

          <p className="mb-4 text-xs leading-relaxed text-neutral-500">
            {activeStep.description}
          </p>

          <button
            type="button"
            aria-label={
              current === steps.length - 1 ? "Get started" : "Continue to next step"
            }
            onClick={() => setCurrent(Math.min(current + 1, steps.length - 1))}
            disabled={current === steps.length - 1}
            className="h-9 w-full cursor-pointer rounded-lg bg-neutral-900 text-xs font-medium text-white transition-colors hover:bg-neutral-950 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {current === steps.length - 1 ? "Get Started" : "Continue"}
          </button>
        </div>
      </div>
    );
  },
);

OnboardingSteps.displayName = "OnboardingSteps";
