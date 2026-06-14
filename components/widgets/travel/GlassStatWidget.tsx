"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { ArrowRight } from "@/icons/ArrowRight";

export type GlassStatWidgetProps = {
  label?: string;
  value?: string;
  change?: string;
} & ComponentPropsWithoutRef<"div">;

export const GlassStatWidget = forwardRef<HTMLDivElement, GlassStatWidgetProps>(
  (
    {
      className,
      label = "Active users",
      value = "12.4k",
      change = "+8.2%",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="glass-stat-widget"
      className={cn(
        "relative h-44 w-44 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-4 font-sans shadow-lg backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/80 via-white to-neutral-50" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <p className="text-[11px] font-medium text-neutral-500">{label}</p>
          <ArrowRight size={14} className="text-neutral-400" />
        </div>
        <div>
          <p className="text-3xl font-bold tracking-tight text-neutral-900">{value}</p>
          <p className="mt-1 text-xs font-semibold text-emerald-600">{change} this week</p>
        </div>
      </div>
    </div>
  ),
);

GlassStatWidget.displayName = "GlassStatWidget";
