"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";
import { X } from "@/icons/X";

/**
 * Minimal search bar that expands on focus with a soft morph animation.
 *
 * Replace the demo placeholder and width with your own search configuration.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type SearchBarProps = {
  placeholder?: string;
  collapsedWidth?: string;
  expandedWidth?: string;
} & ComponentPropsWithoutRef<"div">;

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  (
    {
      className,
      placeholder = "Search anything…",
      collapsedWidth = "w-44",
      expandedWidth = "w-64",
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="search-bar"
        className={cn("relative flex items-center", className)}
        {...props}
      >
        <div
          data-slot="search-bar-shell"
          className={cn(
            "relative transition-[width,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            focused || value ? expandedWidth : collapsedWidth,
          )}
        >
          <Search
            className={cn(
              "pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transition-colors duration-300",
              focused ? "text-teal-500" : "text-neutral-400",
            )}
          />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            aria-label={placeholder}
            data-slot="search-bar-input"
            className={cn(
              "h-10 w-full rounded-full border bg-neutral-50 pr-9 pl-9 text-sm text-neutral-900 transition-all duration-500 outline-none placeholder:text-neutral-400",
              focused
                ? "border-teal-300 bg-white shadow-[0_0_0_4px_rgba(20,184,166,0.12),0_8px_24px_rgba(20,184,166,0.08)]"
                : "border-neutral-200",
            )}
          />
          {value && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setValue("")}
              data-slot="search-bar-clear"
              className="absolute top-1/2 right-2.5 flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-neutral-200 transition-transform hover:scale-110 active:scale-95"
            >
              <X className="h-2.5 w-2.5 text-neutral-600" />
            </button>
          )}
        </div>
      </div>
    );
  },
);

SearchBar.displayName = "SearchBar";
