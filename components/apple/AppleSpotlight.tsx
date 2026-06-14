"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";
import { Mobile } from "@/icons/Mobile";
import { File } from "@/icons/File";
import { MapPinned } from "@/icons/MapPinned";

/**
 * Apple Spotlight built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type AppleSpotlightResult = {
  icon: ReactNode;
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

const defaultResults: AppleSpotlightResult[] = [
  {
    icon: <Mobile size={18} />,
    title: "Settings",
    sub: "System Preferences",
  },
  { icon: <File size={18} />, title: "Notes", sub: "Application" },
  {
    icon: <MapPinned size={18} />,
    title: "Maps",
    sub: "Find locations",
  },
];

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
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleQueryChange = (value: string) => {
      setQuery(value);
      onQueryChange?.(value);
    };

    const filteredResults = results.filter(
      (result) =>
        !query || result.title.toLowerCase().includes(query.toLowerCase()),
    );

    useEffect(() => {
      setActiveIndex(0);
    }, [query]);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (filteredResults.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % filteredResults.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex(
          (index) =>
            (index - 1 + filteredResults.length) % filteredResults.length,
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        const result = filteredResults[activeIndex];
        onResultClick?.(result, activeIndex);
      }
    };

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
              ref={inputRef}
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              aria-label="Spotlight search"
              className="flex-1 bg-transparent text-[15px] text-neutral-900 outline-none placeholder:text-neutral-400"
            />
            <kbd className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
              {shortcutLabel}
            </kbd>
          </div>

          {(focused || query) && (
            <div data-slot="apple-spotlight-results" className="py-2">
              {filteredResults.map((result, index) => (
                <button
                  key={result.title}
                  type="button"
                  aria-label={`Open ${result.title}`}
                  data-slot="apple-spotlight-result"
                  onClick={() => onResultClick?.(result, index)}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors",
                    index === activeIndex
                      ? "bg-[#007AFF]/10"
                      : "hover:bg-neutral-50",
                  )}
                >
                  <span className="text-lg">{result.icon}</span>
                  <div>
                    <p
                      className={cn(
                        "text-[13px]",
                        index === activeIndex
                          ? "font-semibold text-[#007AFF]"
                          : "text-neutral-800",
                      )}
                    >
                      {result.title}
                    </p>
                    <p className="text-[11px] text-neutral-400">{result.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

AppleSpotlight.displayName = "AppleSpotlight";
