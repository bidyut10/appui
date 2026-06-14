"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

export type InsightPulseWidgetProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div">;

export const InsightPulseWidget = forwardRef<
  HTMLDivElement,
  InsightPulseWidgetProps
>(({ className, title = "Engagement pulse", ...props }, ref) => {
  const [points, setPoints] = useState<number[]>([40, 55, 48, 62, 58, 70, 65]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPoints((prev) => [...prev.slice(1), 45 + Math.random() * 30]);
    }, 1200);
    return () => window.clearInterval(timer);
  }, []);

  const path = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      const py = 100 - y;
      return `${i === 0 ? "M" : "L"} ${x} ${py}`;
    })
    .join(" ");

  return (
    <div
      ref={ref}
      data-slot="insight-pulse-widget"
      className={cn(
        "w-64 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="mb-3 text-xs font-semibold text-neutral-900">{title}</p>
      <svg
        viewBox="0 0 100 40"
        className="h-16 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pulse-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9F26D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D9F26D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#pulse-fill)" />
        <path
          d={path}
          fill="none"
          stroke="#84cc16"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-2 flex justify-between text-[10px] text-neutral-400">
        <span>Mon</span>
        <span>Today</span>
      </div>
    </div>
  );
});

InsightPulseWidget.displayName = "InsightPulseWidget";
