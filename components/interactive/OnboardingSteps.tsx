"use client";
import React, { useState } from "react";
import { Check } from "@/icons/Check";
import { User } from "@/icons/User";
import { Settings } from "@/icons/Settings";
import { Star } from "@/icons/Star";

const steps = [
  { label: "Profile", icon: User },
  { label: "Preferences", icon: Settings },
  { label: "Complete", icon: Star },
];

export const OnboardingSteps = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-72 font-sans">
      <div className="mb-6 flex items-center justify-between">
        {steps.map((step, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <React.Fragment key={step.label}>
              <button
                onClick={() => setCurrent(i)}
                className="group flex cursor-pointer flex-col items-center gap-1.5"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                    done
                      ? "bg-emerald-500 text-white shadow-sm shadow-emerald-200"
                      : active
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200"
                  }`}
                >
                  {done ? <Check size={16} /> : <step.icon size={16} />}
                </div>
                <span
                  className={`text-[10px] font-medium ${
                    active
                      ? "text-neutral-900"
                      : done
                        ? "text-emerald-600"
                        : "text-neutral-400"
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {i < steps.length - 1 && (
                <div className="relative mx-2 -mt-4.5 h-px flex-1">
                  <div className="absolute inset-0 rounded-full bg-neutral-200" />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: done ? "100%" : "0%" }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="rounded-xl border border-neutral-100 bg-white p-5 shadow-lg">
        <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Step {current + 1} of {steps.length}
        </p>
        <h4 className="mb-1 text-sm font-semibold text-neutral-900">
          {current === 0 && "Set up your profile"}
          {current === 1 && "Choose your preferences"}
          {current === 2 && "You're all set!"}
        </h4>
        <p className="mb-4 text-xs leading-relaxed text-neutral-500">
          {current === 0 &&
            "Add your name and avatar to personalize your experience."}
          {current === 1 &&
            "Pick your theme, language, and notification settings."}
          {current === 2 &&
            "Your workspace is ready. Start building something amazing."}
        </p>
        <button
          onClick={() => setCurrent(Math.min(current + 1, steps.length - 1))}
          disabled={current === steps.length - 1}
          className="h-9 w-full cursor-pointer rounded-lg bg-neutral-900 text-xs font-medium text-white transition-colors hover:bg-neutral-950 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {current === steps.length - 1 ? "Get Started" : "Continue"}
        </button>
      </div>
    </div>
  );
};
