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
}>;

const PRESETS = [
  { id: "all", label: "All time" },
  { id: "today", label: "Today" },
  { id: "7d", label: "Last 7 days" },
  { id: "30d", label: "Last 30 days" },
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
    <section className="rounded-xl border border-neutral-100 bg-white p-4 md:p-5">
      <div className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-50 text-neutral-600">
          <CalendarRange size={15} aria-hidden />
        </div>
        <div>
          <p className="font-sans text-sm font-medium text-neutral-900">
            Date range
          </p>
          <p className="font-mono text-[10px] text-neutral-400">
            Filter metrics by period
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onPresetChange(item.id)}
              className={cn(
                "rounded-full px-3 py-1.5 font-sans text-xs whitespace-nowrap transition-colors",
                preset === item.id
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {preset === "custom" ? (
          <div className="flex flex-wrap items-end gap-3 border-t border-neutral-100 pt-4">
            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
                From
              </span>
              <input
                type="date"
                value={from}
                onChange={(event) => onFromChange(event.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 font-sans text-sm text-neutral-800 outline-none focus:border-neutral-300 focus:bg-white"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
                To
              </span>
              <input
                type="date"
                value={to}
                onChange={(event) => onToChange(event.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 font-sans text-sm text-neutral-800 outline-none focus:border-neutral-300 focus:bg-white"
              />
            </label>
            <button
              type="button"
              onClick={onApply}
              className="rounded-lg border border-neutral-200 bg-white px-4 py-2 font-sans text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900"
            >
              Apply range
            </button>
          </div>
        ) : null}
      </div>
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
