"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Check } from "@/icons/Check";

const ITEMS = [
  { time: "09:00", title: "Design review", done: true },
  { time: "11:30", title: "Client sync", done: false },
  { time: "14:00", title: "Ship components", done: false },
];

export type MinimalAgendaWidgetProps = ComponentPropsWithoutRef<"div">;

export const MinimalAgendaWidget = forwardRef<HTMLDivElement, MinimalAgendaWidgetProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="minimal-agenda-widget"
      className={cn(
        "w-64 rounded-3xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="mb-3 text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
        Today
      </p>
      <ul className="space-y-2.5">
        {ITEMS.map((item) => (
          <li key={item.title} className="flex items-center gap-3">
            <span className="w-10 shrink-0 text-[11px] font-medium text-neutral-400">
              {item.time}
            </span>
            <span
              className={cn(
                "min-w-0 flex-1 text-xs font-medium",
                item.done ? "text-neutral-400 line-through" : "text-neutral-900",
              )}
            >
              {item.title}
            </span>
            {item.done && <Check size={12} className="shrink-0 text-emerald-500" />}
          </li>
        ))}
      </ul>
    </div>
  ),
);

MinimalAgendaWidget.displayName = "MinimalAgendaWidget";
