"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

import { ChevronDown } from "@/icons/ChevronDown";
import { Clock } from "@/icons/Clock";

/**
 * Date range picker dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Customize presets, calendar labels, and the selected range summary.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type DateRangeDropdownProps = {
  presets?: string[];
  defaultPreset?: string;
  monthLabel?: string;
  dayLabels?: string[];
  dates?: number[];
  rangeSummary?: string;
  applyLabel?: string;
  onPresetChange?: (preset: string) => void;
  onApply?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultPresets = [
  "Today",
  "Last 7 days",
  "Last 30 days",
  "This month",
  "Custom range",
];

const defaultDayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const defaultDates = Array.from({ length: 28 }, (_, i) => i + 1);

export const DateRangeDropdown = forwardRef<
  HTMLDivElement,
  DateRangeDropdownProps
>(
  (
    {
      presets = defaultPresets,
      defaultPreset = "Last 7 days",
      monthLabel = "June 2026",
      dayLabels = defaultDayLabels,
      dates = defaultDates,
      rangeSummary = "Jun 1 — Jun 7, 2026",
      applyLabel = "Apply",
      onPresetChange,
      onApply,
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [preset, setPreset] = useState(defaultPreset);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const close = (e: MouseEvent) => {
        if (!innerRef.current?.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative inline-block font-sans", className)}
        {...props}
      >
        <div ref={innerRef}>
          <button
            type="button"
            aria-label={`Date range: ${preset}`}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-neutral-100 bg-white px-3 transition-all hover:border-neutral-300 hover:shadow-sm"
          >
            <Clock size={14} className="text-neutral-500" />
            <span className="text-xs font-medium text-neutral-700">
              {preset}
            </span>
            <ChevronDown className="h-3 w-3 text-neutral-400" />
          </button>

          <div
            className={cn(
              "absolute top-[calc(100%+8px)] right-0 z-[100] w-72 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
              open
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0",
            )}
            style={{ transformOrigin: "top right" }}
          >
            <div className="flex">
              <div className="w-28 border-r border-neutral-100 p-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    aria-label={`Select ${p}`}
                    onClick={() => {
                      setPreset(p);
                      onPresetChange?.(p);
                    }}
                    className={cn(
                      "w-full cursor-pointer rounded-lg px-2 py-1.5 text-left text-[10px] font-medium transition-colors",
                      preset === p
                        ? "bg-neutral-900 text-white"
                        : "text-neutral-600 hover:bg-neutral-50",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="flex-1 p-3">
                <p className="mb-2 text-center font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                  {monthLabel}
                </p>
                <div className="mb-1 grid grid-cols-7 gap-0.5">
                  {dayLabels.map((d) => (
                    <span
                      key={d}
                      className="text-center font-mono text-[8px] text-neutral-400"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-0.5">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      aria-label={`Select day ${d}`}
                      className={cn(
                        "h-6 w-6 cursor-pointer rounded-md text-[10px] font-medium transition-colors",
                        d >= 1 && d <= 7
                          ? "bg-teal-600 text-white"
                          : d === 14
                            ? "bg-teal-100 text-teal-700"
                            : "text-neutral-600 hover:bg-neutral-100",
                      )}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-neutral-100 px-3 py-2.5">
              <span className="text-[10px] text-neutral-400">
                {rangeSummary}
              </span>
              <button
                type="button"
                aria-label={applyLabel}
                onClick={() => {
                  setOpen(false);
                  onApply?.();
                }}
                className="cursor-pointer rounded-lg bg-neutral-900 px-3 py-1 text-[10px] font-medium text-white transition-colors hover:bg-neutral-800"
              >
                {applyLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

DateRangeDropdown.displayName = "DateRangeDropdown";
