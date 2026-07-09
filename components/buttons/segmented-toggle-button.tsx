"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type SegmentedToggleButtonProps = Readonly<
  {
    options?: readonly string[];
    defaultIndex?: number;
    onChange?: (index: number, value: string) => void;
  } & ComponentPropsWithoutRef<"div">
>;

// Segmented toggle — iOS-style sliding pill between two or three options.
export const SegmentedToggleButton = forwardRef<
  HTMLDivElement,
  SegmentedToggleButtonProps
>(
  (
    {
      className,
      options = ["Day", "Week", "Month"],
      defaultIndex = 0,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultIndex);
    const count = options.length;

    const select = (index: number) => {
      setActive(index);
      onChange?.(index, options[index] ?? "");
    };

    return (
      <div
        ref={ref}
        role="tablist"
        data-slot="segmented-toggle-button"
        className={cn(
          "relative inline-flex h-10 rounded-xl bg-neutral-100 p-1 font-sans text-sm font-medium select-none",
          className,
        )}
        {...props}
      >
        <span
          aria-hidden
          className="absolute top-1 bottom-1 rounded-lg bg-white shadow-sm transition-[left,width] duration-200 ease-out"
          style={{
            left: `calc(${active} * (100% / ${count}) + 4px)`,
            width: `calc(100% / ${count} - 8px)`,
          }}
        />

        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => select(index)}
            className={cn(
              "relative z-10 flex-1 cursor-pointer px-4 py-1.5 transition-colors duration-200",
              active === index ? "text-neutral-900" : "text-neutral-500",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    );
  },
);

SegmentedToggleButton.displayName = "SegmentedToggleButton";
