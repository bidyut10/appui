"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";
import { X } from "@/icons/X";

export type CategoryFilterItem = {
  id: string;
  title: string;
  category: string;
  tag?: string;
};

/**
 * Category filter search with an expandable animated results grid.
 *
 * Replace the demo categories and items with your own filter logic.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CategoryFilterSearchProps = {
  placeholder?: string;
  categories?: string[];
  defaultCategory?: string;
  items?: CategoryFilterItem[];
  sortLabel?: string;
  onItemClick?: (item: CategoryFilterItem) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultCategories = ["All", "Design", "Code", "UI"];

const defaultItems: CategoryFilterItem[] = [
  { id: "1", title: "VoiceWaveCard", category: "UI", tag: "Audio" },
  { id: "2", title: "AuroraProfileCard", category: "Design", tag: "Profile" },
  { id: "3", title: "SearchBar", category: "Code", tag: "Input" },
  { id: "4", title: "KanbanBoard", category: "UI", tag: "Board" },
  { id: "5", title: "TogglePricingCards", category: "Design", tag: "Pricing" },
  { id: "6", title: "CommandPaletteSearch", category: "Code", tag: "Search" },
  { id: "7", title: "GlassNavbar", category: "UI", tag: "Nav" },
  { id: "8", title: "MetricCard", category: "Design", tag: "Stats" },
];

export const CategoryFilterSearch = forwardRef<
  HTMLDivElement,
  CategoryFilterSearchProps
>(
  (
    {
      className,
      placeholder = "Filter components…",
      categories = defaultCategories,
      defaultCategory = "All",
      items = defaultItems,
      sortLabel = "Sorted by relevance",
      onItemClick,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState("");
    const [active, setActive] = useState(defaultCategory);
    const [expanded, setExpanded] = useState(false);
    const [pickedId, setPickedId] = useState<string | null>(null);

    const filtered = useMemo(() => {
      return items.filter((item) => {
        const matchesCategory =
          active === "All" || item.category === active;
        const matchesQuery =
          !value.trim() ||
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.tag?.toLowerCase().includes(value.toLowerCase());
        return matchesCategory && matchesQuery;
      });
    }, [active, items, value]);

    const handlePick = (item: CategoryFilterItem) => {
      setPickedId(item.id);
      onItemClick?.(item);
    };

    return (
      <div
        ref={ref}
        data-slot="category-filter-search"
        className={cn("w-72 space-y-3", className)}
        {...props}
      >
        <style>{`
          @keyframes category-result-in {
            from { opacity: 0; transform: translateY(8px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        <div
          data-slot="category-filter-search-input-wrapper"
          className="relative flex items-center"
        >
          <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setExpanded(true);
            }}
            onFocus={() => setExpanded(true)}
            placeholder={placeholder}
            aria-label={placeholder}
            data-slot="category-filter-search-input"
            className={cn(
              "h-10 w-full rounded-xl border bg-white pr-8 pl-10 text-sm text-neutral-900 shadow-sm transition-all outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-2 focus:ring-blue-100",
              expanded ? "border-neutral-400" : "border-neutral-200",
            )}
          />
          {value && (
            <button
              type="button"
              aria-label="Clear filter"
              onClick={() => setValue("")}
              data-slot="category-filter-search-clear"
              className="absolute right-2.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md bg-neutral-100 transition-colors hover:bg-neutral-200"
            >
              <X className="h-3 w-3 text-neutral-500" />
            </button>
          )}
        </div>

        <div
          data-slot="category-filter-search-categories"
          className="flex flex-wrap gap-1.5"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-label={`Filter by ${cat}`}
              aria-pressed={active === cat}
              onClick={() => {
                setActive(cat);
                setExpanded(true);
              }}
              data-slot="category-filter-search-category"
              className={cn(
                "cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all duration-300",
                active === cat
                  ? "scale-105 bg-neutral-900 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          data-slot="category-filter-search-meta"
          className="flex items-center justify-between px-1"
        >
          <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
            {active !== "All" ? ` in ${active}` : ""}
          </span>
          <span className="text-[10px] text-neutral-400">{sortLabel}</span>
        </div>

        <div
          data-slot="category-filter-search-results"
          className={cn(
            "grid origin-top grid-cols-2 gap-2 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)]",
            expanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handlePick(item)}
              data-slot="category-filter-search-result"
              className={cn(
                "cursor-pointer rounded-xl border p-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                pickedId === item.id
                  ? "border-teal-300 bg-teal-50 shadow-sm"
                  : "border-neutral-100 bg-neutral-50 hover:border-neutral-200",
              )}
              style={{
                animation: `category-result-in 0.35s ease-out ${index * 0.04}s both`,
              }}
            >
              <p className="truncate text-[11px] font-semibold text-neutral-900">
                {item.title}
              </p>
              {item.tag && (
                <span className="mt-1 inline-block rounded-full bg-white px-1.5 py-0.5 text-[9px] text-neutral-500">
                  {item.tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {expanded && filtered.length === 0 && (
          <p className="text-center text-[11px] text-neutral-400">
            No components match your filters
          </p>
        )}
      </div>
    );
  },
);

CategoryFilterSearch.displayName = "CategoryFilterSearch";
