"use client";

import {
  forwardRef,
  useCallback,
  useId,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { CalendarRange } from "lucide-react";

import { cn } from "@/lib/cn";

export type DateRangePreset = "all" | "today" | "7d" | "30d" | "custom";

export type DateRangeValue = Readonly<{
  preset: DateRangePreset;
  from: string;
  to: string;
}>;

export type DateRangeFilterPillsProps = Readonly<
  {
    title?: string;
    subtitle?: string;
    value?: DateRangeValue;
    defaultValue?: DateRangeValue;
    onChange?: (value: DateRangeValue) => void;
    onApply?: (value: DateRangeValue) => void;
  } & ComponentPropsWithoutRef<"section">
>;

const PRESETS: readonly { id: DateRangePreset; label: string }[] = [
  { id: "all", label: "All time" },
  { id: "today", label: "Today" },
  { id: "7d", label: "Last 7 days" },
  { id: "30d", label: "Last 30 days" },
  { id: "custom", label: "Custom" },
];

const DEFAULT_VALUE: DateRangeValue = {
  preset: "30d",
  from: "",
  to: "",
};

function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayISO(): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return toISODate(today);
}

// Date range filter pills — preset periods plus optional custom from/to inputs.
export const DateRangeFilterPills = forwardRef<
  HTMLElement,
  DateRangeFilterPillsProps
>(
  (
    {
      className,
      title = "Date range",
      subtitle = "Filter dashboard metrics by period",
      value,
      defaultValue = DEFAULT_VALUE,
      onChange,
      onApply,
      ...props
    },
    ref,
  ) => {
    const fromId = useId();
    const toId = useId();
    const [internal, setInternal] = useState<DateRangeValue>(defaultValue);
    const current = value ?? internal;

    const update = useCallback(
      (next: DateRangeValue) => {
        if (value === undefined) {
          setInternal(next);
        }
        onChange?.(next);
      },
      [onChange, value],
    );

    const handlePreset = (preset: DateRangePreset) => {
      if (preset === "custom") {
        update({
          preset,
          from: current.from || todayISO(),
          to: current.to || todayISO(),
        });
        return;
      }

      update({ preset, from: "", to: "" });
    };

    const handleApply = () => {
      if (current.preset === "custom" && current.from && current.to) {
        if (current.from > current.to) return;
      }
      onApply?.(current);
    };

    const customInvalid =
      current.preset === "custom" &&
      Boolean(current.from && current.to && current.from > current.to);

    return (
      <section
        ref={ref}
        data-slot="date-range-filter-pills"
        className={cn(
          "w-full min-w-0 border border-neutral-200 bg-white p-4 font-sans md:p-5",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 shrink-0 items-center justify-center bg-neutral-50 text-neutral-600">
            <CalendarRange size={15} aria-hidden />
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-medium text-neutral-900">{title}</h2>
            <p className="font-mono text-[10px] text-neutral-400">{subtitle}</p>
          </div>
        </div>

        <div
          className="mt-4 flex flex-wrap gap-2"
          role="group"
          aria-label="Date range presets"
        >
          {PRESETS.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={current.preset === item.id}
              onClick={() => handlePreset(item.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs whitespace-nowrap transition-colors",
                current.preset === item.id
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {current.preset === "custom" ? (
          <div className="mt-4 border-t border-neutral-100 pt-4">
            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end">
              <label htmlFor={fromId} className="block min-w-0 flex-1">
                <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
                  From
                </span>
                <input
                  id={fromId}
                  type="date"
                  value={current.from}
                  onChange={(event) =>
                    update({ ...current, from: event.target.value })
                  }
                  className="mt-1.5 block w-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800 outline-none ring-0 focus:border-neutral-900 focus:bg-white focus:ring-0"
                />
              </label>

              <label htmlFor={toId} className="block min-w-0 flex-1">
                <span className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
                  To
                </span>
                <input
                  id={toId}
                  type="date"
                  value={current.to}
                  min={current.from || undefined}
                  onChange={(event) =>
                    update({ ...current, to: event.target.value })
                  }
                  className="mt-1.5 block w-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800 outline-none ring-0 focus:border-neutral-900 focus:bg-white focus:ring-0"
                />
              </label>

              <button
                type="button"
                onClick={handleApply}
                disabled={customInvalid || !current.from || !current.to}
                className="border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Apply range
              </button>
            </div>

            {customInvalid ? (
              <p className="mt-2 text-xs text-red-600">
                End date must be on or after the start date.
              </p>
            ) : null}
          </div>
        ) : null}
      </section>
    );
  },
);

DateRangeFilterPills.displayName = "DateRangeFilterPills";
