"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
} from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";
import { X } from "@/icons/X";

export type SearchResultItem = {
  id: string;
  name: string;
  subtitle?: string;
  accent?: string;
};

/**
 * People search with live filtering, keyboard navigation, and selection.
 *
 * Replace the demo results with your own search and selection logic.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type SearchBarWithResultsProps = {
  placeholder?: string;
  results?: SearchResultItem[];
  onSelect?: (item: SearchResultItem) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultResults: SearchResultItem[] = [
  {
    id: "1",
    name: "Bidyut Kundu",
    subtitle: "Frontend · Kolkata",
    accent: "BK",
  },
  { id: "2", name: "John Duo", subtitle: "Design · Berlin", accent: "JD" },
  { id: "3", name: "Sarah Chen", subtitle: "Product · SF", accent: "SC" },
  { id: "4", name: "Alex Rivera", subtitle: "Engineering · NYC", accent: "AR" },
];

export const SearchBarWithResults = forwardRef<
  HTMLDivElement,
  SearchBarWithResultsProps
>(
  (
    {
      className,
      placeholder = "Search people…",
      results = defaultResults,
      onSelect,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selected, setSelected] = useState<SearchResultItem | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filtered = results.filter(
      (item) =>
        value.length > 0 &&
        item.name.toLowerCase().includes(value.toLowerCase()),
    );

    useEffect(() => {
      setActiveIndex(0);
    }, [value]);

    const pick = (item: SearchResultItem) => {
      setSelected(item);
      setValue(item.name);
      setOpen(false);
      onSelect?.(item);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (!open || filtered.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % filtered.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex(
          (index) => (index - 1 + filtered.length) % filtered.length,
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        pick(filtered[activeIndex]);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    };

    return (
      <div
        ref={ref}
        data-slot="search-bar-with-results"
        className={cn("relative w-64", className)}
        {...props}
      >
        <style>{`
          @keyframes search-results-in {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <div
          data-slot="search-bar-with-results-input-wrapper"
          className="relative flex items-center"
        >
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setSelected(null);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            aria-label={placeholder}
            aria-expanded={open && filtered.length > 0}
            aria-autocomplete="list"
            data-slot="search-bar-with-results-input"
            className="h-10 w-full rounded-xl border border-neutral-100 bg-white pr-8 pl-9 text-sm text-neutral-900 shadow-sm transition-all outline-none placeholder:text-neutral-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          />
          {value && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setValue("");
                setSelected(null);
                inputRef.current?.focus();
              }}
              data-slot="search-bar-with-results-clear"
              className="absolute right-2.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-neutral-200"
            >
              <X className="h-2.5 w-2.5 text-neutral-600" />
            </button>
          )}
        </div>

        {open && filtered.length > 0 && (
          <div
            data-slot="search-bar-with-results-dropdown"
            className="absolute top-full z-50 mt-2 w-full origin-top overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-lg"
            style={{ animation: "search-results-in 0.2s ease-out" }}
          >
            {filtered.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Select ${item.name}`}
                onMouseDown={() => pick(item)}
                data-slot="search-bar-with-results-item"
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors",
                  index === activeIndex
                    ? "bg-blue-50 text-blue-900"
                    : "text-neutral-800 hover:bg-neutral-50",
                )}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-500 text-[10px] font-semibold text-white">
                  {item.accent ?? item.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-medium">{item.name}</p>
                  {item.subtitle && (
                    <p className="truncate text-[11px] text-neutral-400">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {selected && (
          <p
            data-slot="search-bar-with-results-selected"
            className="mt-2 text-[11px] text-neutral-500"
          >
            Selected{" "}
            <span className="font-medium text-neutral-800">
              {selected.name}
            </span>
          </p>
        )}
      </div>
    );
  },
);

SearchBarWithResults.displayName = "SearchBarWithResults";
