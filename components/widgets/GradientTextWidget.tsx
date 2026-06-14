"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Animated gradient text widget with shifting color flow.
 *
 * Replace the demo headline and subtext with your own copy.
 */
export type GradientTextWidgetProps = {
  headline?: string;
  subtext?: string;
} & ComponentPropsWithoutRef<"div">;

export const GradientTextWidget = forwardRef<
  HTMLDivElement,
  GradientTextWidgetProps
>(
  (
    {
      className,
      headline = "Design without limits",
      subtext = "Premium components for modern apps",
      ...props
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
      <div
        ref={ref}
        data-slot="gradient-text-widget"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <style>{`
          @keyframes gradient-text-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        <h3
          className="bg-linear-to-r from-teal-600 via-cyan-500 to-indigo-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent"
          style={
            mounted
              ? {
                  backgroundSize: "200% auto",
                  animation: "gradient-text-flow 4s ease infinite",
                }
              : undefined
          }
        >
          {headline}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
          {subtext}
        </p>
        <div className="mt-4 flex gap-2">
          {["Cards", "Widgets", "Buttons"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  },
);

GradientTextWidget.displayName = "GradientTextWidget";
