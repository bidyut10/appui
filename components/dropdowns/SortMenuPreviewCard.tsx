"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { ChevronDown } from "@/icons/ChevronDown";

/**
 * Sort Menu Preview Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type SortOption = {
  id: string;
  label: string;
};

export type SortMenuPreviewCardProps = {
  triggerLabel?: string;
  options?: SortOption[];
  defaultSelected?: string;
  onSelect?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultOptions: SortOption[] = [
  { id: "newest", label: "Newest first" },
  { id: "popular", label: "Most popular" },
  { id: "name", label: "Name A–Z" },
  { id: "updated", label: "Recently updated" },
];

export const SortMenuPreviewCard = forwardRef<
  HTMLDivElement,
  SortMenuPreviewCardProps
>(
  (
    {
      className,
      triggerLabel = "Sort by",
      options = defaultOptions,
      defaultSelected = "newest",
      onSelect,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(defaultSelected);

    const handleSelect = (id: string) => {
      setSelected(id);
      onSelect?.(id);
      setOpen(false);
    };

    return (
      <div
        ref={ref}
        data-slot="sort-menu-preview-card"
        className={cn("relative w-[200px] font-sans", className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-neutral-100 bg-white px-3 py-2.5 text-[13px] font-medium text-neutral-800 shadow-sm"
        >
          {triggerLabel}
          <ChevronDown
            size={14}
            className={cn(
              "text-neutral-400 transition-transform",
              open && "rotate-180",
            )}
          />
        </button>

        {open && (
          <div className="absolute top-full right-0 left-0 z-10 mt-1.5 overflow-hidden rounded-xl border border-neutral-100 bg-white py-1 shadow-xl">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-[13px] transition-colors hover:bg-neutral-50",
                  selected === option.id
                    ? "font-semibold text-teal-700"
                    : "text-neutral-700",
                )}
              >
                {option.label}
                {selected === option.id && (
                  <Check size={13} className="text-teal-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);

SortMenuPreviewCard.displayName = "SortMenuPreviewCard";
