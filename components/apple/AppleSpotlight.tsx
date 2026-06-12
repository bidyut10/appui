"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type AppleSpotlightResult = {
  icon: string;
  title: string;
  sub: string;
};

export type AppleSpotlightProps = {
  placeholder?: string;
  shortcutLabel?: string;
  results?: AppleSpotlightResult[];
  onQueryChange?: (query: string) => void;
  onResultClick?: (result: AppleSpotlightResult, index: number) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultResults: AppleSpotlightResult[] = [
  { icon: "📱", title: "Settings", sub: "System Preferences" },
  { icon: "📝", title: "Notes", sub: "Application" },
  { icon: "🗺️", title: "Maps", sub: "Find locations" },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const AppleSpotlight = forwardRef<HTMLDivElement, AppleSpotlightProps>(
  (
    {
      className,
      placeholder = "Spotlight Search",
      shortcutLabel = "⌘ Space",
      results = defaultResults,
      onQueryChange,
      onResultClick,
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);

    const handleQueryChange = (value: string) => {
      setQuery(value);
      onQueryChange?.(value);
    };

    const filteredResults = results.filter(
      (result) =>
        !query || result.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <div
        ref={ref}
        data-slot="apple-spotlight"
        className={cn("w-80 font-sans", className)}
        {...props}
      >
        <div
          data-slot="apple-spotlight-panel"
          className={cn(
            "overflow-hidden rounded-2xl border bg-white/70 shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all",
            focused ? "border-neutral-300" : "border-white/60",
          )}
        >
          <div
            data-slot="apple-spotlight-input"
            className="flex items-center gap-3 border-b border-neutral-100/80 px-4 py-3"
          >
            <Search size={16} className="shrink-0 text-neutral-400" />
            <input
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-[15px] text-neutral-900 outline-none placeholder:text-neutral-400"
            />
            <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
              {shortcutLabel}
            </kbd>
          </div>

          {(focused || query) && (
            <div data-slot="apple-spotlight-results" className="py-2">
              {filteredResults.map((result, index) => (
                <div
                  key={result.title}
                  data-slot="apple-spotlight-result"
                  onClick={() => onResultClick?.(result, index)}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 px-4 py-2.5",
                    index === 0 ? "bg-[#007AFF]/10" : "hover:bg-neutral-50",
                  )}
                >
                  <span className="text-lg">{result.icon}</span>
                  <div>
                    <p
                      className={cn(
                        "text-[13px]",
                        index === 0
                          ? "font-semibold text-[#007AFF]"
                          : "text-neutral-800",
                      )}
                    >
                      {result.title}
                    </p>
                    <p className="text-[11px] text-neutral-400">{result.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

AppleSpotlight.displayName = "AppleSpotlight";
