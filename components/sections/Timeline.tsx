import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

const steps = [
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

export const Timeline = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 font-sans ${className}`}
    {...props}
  >
    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-5">
      Our Journey
    </p>

    <div className="relative pl-6">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200" />

      {steps.map((step, i) => (
        <div key={step.title} className={`relative ${i < steps.length - 1 ? "pb-6" : ""}`}>
          <div
            className={`absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
              step.done
                ? step.active
                  ? "bg-violet-500 border-violet-500"
                  : "bg-emerald-500 border-emerald-500"
                : "bg-white border-neutral-300"
            }`}
          >
            {step.done && !step.active && (
              <Check size={7} className="text-white" />
            )}
            {step.active && (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </div>

          <span className="text-[10px] font-mono text-neutral-400">{step.year}</span>
          <h4
            className={`text-sm font-semibold mt-0.5 ${
              step.done ? "text-neutral-900" : "text-neutral-400"
            }`}
          >
            {step.title}
          </h4>
          <p className="text-[11px] text-neutral-500 leading-relaxed mt-1">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
));
Timeline.displayName = "Timeline";
