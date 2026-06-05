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
  const [current, setCurrent] = useState(1);

  return (
    <div className="w-72 font-sans">
      <div className="flex items-center justify-between mb-6">
        {steps.map((step, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <React.Fragment key={step.label}>
              <button
                onClick={() => setCurrent(i)}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
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
                    active ? "text-neutral-900" : done ? "text-emerald-600" : "text-neutral-400"
                  }`}
                >
                  {step.label}
                </span>
              </button>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px mx-2 mt-[-18px] relative">
                  <div className="absolute inset-0 bg-neutral-200 rounded-full" />
                  <div
                    className="absolute inset-y-0 left-0 bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: done ? "100%" : "0%" }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="p-5 bg-white border border-neutral-100 rounded-2xl shadow-sm">
        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
          Step {current + 1} of {steps.length}
        </p>
        <h4 className="text-sm font-semibold text-neutral-900 mb-1">
          {current === 0 && "Set up your profile"}
          {current === 1 && "Choose your preferences"}
          {current === 2 && "You're all set!"}
        </h4>
        <p className="text-xs text-neutral-500 leading-relaxed mb-4">
          {current === 0 && "Add your name and avatar to personalize your experience."}
          {current === 1 && "Pick your theme, language, and notification settings."}
          {current === 2 && "Your workspace is ready. Start building something amazing."}
        </p>
        <button
          onClick={() => setCurrent(Math.min(current + 1, steps.length - 1))}
          disabled={current === steps.length - 1}
          className="w-full h-9 bg-neutral-900 text-white text-xs font-medium rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {current === steps.length - 1 ? "Get Started" : "Continue"}
        </button>
      </div>
    </div>
  );
};
