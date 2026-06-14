"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";

/**
 * Filter and sort dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Plug in your own sort options and category filters for catalog or list views.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type FilterSortDropdownProps = {
  triggerLabel?: string;
  sortByLabel?: string;
  categoryLabel?: string;
  sortOptions?: string[];
  filters?: string[];
  defaultSort?: string;
  defaultFilters?: string[];
  onSortChange?: (sort: string) => void;
  onFiltersChange?: (filters: string[]) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultSortOptions = [
  "Most Popular",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

const defaultFilters = ["All", "Cards", "Dropdowns", "Search", "Sections"];

export const FilterSortDropdown = forwardRef<
  HTMLDivElement,
  FilterSortDropdownProps
>(
  (
    {
      triggerLabel = "Filter & Sort",
      sortByLabel = "Sort By",
      categoryLabel = "Category",
      sortOptions = defaultSortOptions,
      filters = defaultFilters,
      defaultSort = "Most Popular",
      defaultFilters: initialFilters = ["All"],
      onSortChange,
      onFiltersChange,
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState(defaultSort);
    const [activeFilters, setActiveFilters] =
      useState<string[]>(initialFilters);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const close = (e: MouseEvent) => {
        if (!innerRef.current?.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    const toggleFilter = (f: string) => {
      if (f === "All") {
        setActiveFilters(["All"]);
        onFiltersChange?.(["All"]);
      } else {
        setActiveFilters((prev) => {
          const next = prev.filter((x) => x !== "All");
          const updated = next.includes(f)
            ? next.filter((x) => x !== f)
            : [...next, f];
          onFiltersChange?.(updated);
          return updated;
        });
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-block font-sans", className)}
        {...props}
      >
        <div ref={innerRef}>
          <button
            type="button"
            aria-label={triggerLabel}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="group inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-neutral-100 bg-white px-4 text-xs font-medium transition-all hover:border-neutral-300 hover:shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              width={14}
              height={14}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="text-neutral-500"
            >
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
            </svg>
            {triggerLabel}
            <span className="rounded-full bg-neutral-900 px-1.5 py-px font-mono text-[9px] text-white">
              {activeFilters.includes("All") ? "All" : activeFilters.length}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
          </button>

          <div
            className={cn(
              "absolute top-[calc(100%+8px)] left-0 z-[100] w-64 rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
              open
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0",
            )}
            style={{ transformOrigin: "top left" }}
          >
            <p className="mb-2 px-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {sortByLabel}
            </p>
            {sortOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                aria-label={`Sort by ${opt}`}
                onClick={() => {
                  setSort(opt);
                  onSortChange?.(opt);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-xs transition-colors",
                  sort === opt
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-50",
                )}
              >
                {opt}
                {sort === opt && <Check size={12} />}
              </button>
            ))}

            <div className="my-2 h-px bg-neutral-100" />

            <p className="mb-2 px-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {categoryLabel}
            </p>
            <div className="flex flex-wrap gap-1.5 px-1">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-label={`Filter by ${f}`}
                  onClick={() => toggleFilter(f)}
                  className={cn(
                    "cursor-pointer rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors",
                    activeFilters.includes(f)
                      ? "bg-teal-600 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

FilterSortDropdown.displayName = "FilterSortDropdown";
