"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Filter Pills Widget built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type FilterPill = {
  id: string;
  label: string;
};

export type FilterPillsWidgetProps = {
  title?: string;
  pills?: FilterPill[];
  defaultActive?: string;
  onChange?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultPills: FilterPill[] = [
  { id: "all", label: "All" },
  { id: "cards", label: "Cards" },
  { id: "widgets", label: "Widgets" },
  { id: "forms", label: "Forms" },
  { id: "nav", label: "Navigation" },
];

export const FilterPillsWidget = forwardRef<
  HTMLDivElement,
  FilterPillsWidgetProps
>(
  (
    {
      className,
      title = "Browse components",
      pills = defaultPills,
      defaultActive = "all",
      onChange,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultActive);

    const handleSelect = (id: string) => {
      setActive(id);
      onChange?.(id);
    };

    return (
      <div
        ref={ref}
        data-slot="filter-pills-widget"
        className={cn(
          "w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-semibold text-neutral-900">{title}</p>
        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => handleSelect(pill.id)}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all active:scale-95",
                active === pill.id
                  ? "bg-neutral-900 text-white shadow-lg"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
              )}
            >
              {pill.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-neutral-400">
          Showing{" "}
          <span className="font-semibold text-neutral-600">
            {pills.find((p) => p.id === active)?.label}
          </span>{" "}
          · 48 results
        </p>
      </div>
    );
  },
);

FilterPillsWidget.displayName = "FilterPillsWidget";
