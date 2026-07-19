"use client";

import { CalendarRange } from "lucide-react";

import { cn } from "@/lib/cn";

type DateRangeFilterProps = Readonly<{
  preset: string;
  from: string;
  to: string;
  onPresetChange: (preset: string) => void;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onApply: () => void;
  compact?: boolean;
}>;

const PRESETS = [
  { id: "all", label: "All time" },
  { id: "today", label: "Today" },
  { id: "7d", label: "7 days" },
  { id: "30d", label: "30 days" },
  { id: "custom", label: "Custom" },
] as const;

export function DateRangeFilter({
  preset,
  from,
  to,
  onPresetChange,
  onFromChange,
  onToChange,
  onApply,
}: DateRangeFilterProps) {
  return (
    <section className="px-4 py-3 md:px-8">
      <div className="flex flex-wrap items-center gap-2 md:justify-between">
        <div className="flex items-center gap-2 text-neutral-500">
          <CalendarRange size={14} aria-hidden />
          <span className="font-sans text-xs font-medium">Period</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {PRESETS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onPresetChange(item.id)}
              className={cn(
                "rounded-lg px-2.5 py-1.5 font-sans text-xs font-medium transition-colors",
                preset === item.id
                  ? "bg-neutral-800 text-white"
                  : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {preset === "custom" ? (
        <div className="mt-3 flex flex-wrap items-end gap-2 border-t border-neutral-100 pt-3">
          <label className="block">
            <span className="font-sans text-[10px] font-medium text-neutral-400 uppercase">
              From
            </span>
            <input
              type="date"
              value={from}
              onChange={(event) => onFromChange(event.target.value)}
              className="mt-1 block rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 font-sans text-sm outline-none ring-0 focus:border-neutral-800 focus:ring-0"
            />
          </label>
          <label className="block">
            <span className="font-sans text-[10px] font-medium text-neutral-400 uppercase">
              To
            </span>
            <input
              type="date"
              value={to}
              onChange={(event) => onToChange(event.target.value)}
              className="mt-1 block rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 font-sans text-sm outline-none ring-0 focus:border-neutral-800 focus:ring-0"
            />
          </label>
          <button
            type="button"
            onClick={onApply}
            className="rounded-lg bg-rose-800/50 px-3 py-1.5 font-sans text-sm font-medium text-rose-100 hover:bg-rose-800/60"
          >
            Apply
          </button>
        </div>
      ) : null}
    </section>
  );
}

export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function buildQueryFromPreset(
  preset: string,
  from: string,
  to: string,
): string {
  if (preset === "all") return "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (preset === "today") {
    const d = toISODate(today);
    return `?from=${d}&to=${d}`;
  }

  if (preset === "7d" || preset === "30d") {
    const start = new Date(today);
    start.setDate(start.getDate() - (preset === "7d" ? 6 : 29));
    return `?from=${toISODate(start)}&to=${toISODate(today)}`;
  }

  if (preset === "custom" && from && to) {
    return `?from=${from}&to=${to}`;
  }

  return "";
}
