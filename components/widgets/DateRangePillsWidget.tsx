"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

export type DateRangeOption = {
  id: string;
  label: string;
};

export type DateRangePillsWidgetProps = {
  options?: DateRangeOption[];
  defaultId?: string;
  onChange?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultOptions: DateRangeOption[] = [
  { id: "7d", label: "7D" },
  { id: "30d", label: "30D" },
  { id: "90d", label: "90D" },
  { id: "ytd", label: "YTD" },
  { id: "custom", label: "Custom" },
];

export const DateRangePillsWidget = forwardRef<
  HTMLDivElement,
  DateRangePillsWidgetProps
>(
  (
    {
      className,
      options = defaultOptions,
      defaultId = "30d",
      onChange,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultId);

    return (
      <div
        ref={ref}
        data-slot="date-range-pills-widget"
        className={cn(
          "inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-1 font-sans shadow-sm",
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => {
              setActive(opt.id);
              onChange?.(opt.id);
            }}
            className={cn(
              "cursor-pointer rounded-lg px-3.5 py-1.5 text-[12px] font-semibold transition-all active:scale-95",
              active === opt.id
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-500 hover:text-neutral-700",
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  },
);

DateRangePillsWidget.displayName = "DateRangePillsWidget";
