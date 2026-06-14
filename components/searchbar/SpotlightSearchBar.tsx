"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Search } from "@/icons/Search";
import { Clock } from "@/icons/Clock";
import { X } from "@/icons/X";
import { File } from "@/icons/File";
import { Mobile } from "@/icons/Mobile";

export type SpotlightResult = {
  id: string;
  title: string;
  category: string;
  icon?: ReactNode;
};

/**
 * Spotlight search with an expanding panel, live filtering, and recent picks.
 *
 * Replace the demo items with your own spotlight search logic.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type SpotlightSearchBarProps = {
  placeholder?: string;
  recentLabel?: string;
  recentSearches?: string[];
  items?: SpotlightResult[];
  onSelect?: (item: SpotlightResult | string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultRecentSearches = [
  "Card components",
  "Dropdown menu",
  "Search bar",
];

const defaultItems: SpotlightResult[] = [
  {
    id: "1",
    title: "VoiceWaveCard",
    category: "Cards",
    icon: <File size={14} />,
  },
  {
    id: "2",
    title: "MusicPlayerCard",
    category: "Cards",
    icon: <File size={14} />,
  },
  {
    id: "3",
    title: "SearchBar",
    category: "Search",
    icon: <Search className="h-3.5 w-3.5" />,
  },
  {
    id: "4",
    title: "KanbanBoard",
    category: "Interactive",
    icon: <Mobile size={14} />,
  },
  {
    id: "5",
    title: "AuroraProfileCard",
    category: "Cards",
    icon: <File size={14} />,
  },
  {
    id: "6",
    title: "GlassNavbar",
    category: "Navigation",
    icon: <Mobile size={14} />,
  },
];

export const SpotlightSearchBar = forwardRef<
  HTMLDivElement,
  SpotlightSearchBarProps
>(
  (
    {
      className,
      placeholder = "Spotlight search…",
      recentLabel = "Recent",
      recentSearches = defaultRecentSearches,
      items = defaultItems,
      onSelect,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);
    const [recents, setRecents] = useState(recentSearches);

    const filtered = useMemo(() => {
      if (!value.trim()) return [];
      const q = value.toLowerCase();
      return items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q),
      );
    }, [items, value]);

    const grouped = useMemo(() => {
      const map = new Map<string, SpotlightResult[]>();
      for (const item of filtered) {
        const list = map.get(item.category) ?? [];
        list.push(item);
        map.set(item.category, list);
      }
      return map;
    }, [filtered]);

    const showPanel = focused;
    const showRecents = showPanel && !value.trim();
    const showResults = showPanel && value.trim().length > 0;

    const pick = (selection: SpotlightResult | string) => {
      const label = typeof selection === "string" ? selection : selection.title;
      setValue(label);
      setRecents((prev) =>
        [label, ...prev.filter((r) => r !== label)].slice(0, 4),
      );
      onSelect?.(selection);
      setFocused(false);
    };

    return (
      <div
        ref={ref}
        data-slot="spotlight-search-bar"
        className={cn("relative w-72", className)}
        {...props}
      >
        <style>{`
          @keyframes spotlight-expand {
            from { opacity: 0; transform: translateY(-6px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes spotlight-glow {
            0%, 100% { box-shadow: 0 0 0 4px rgba(20,184,166,0.08), 0 8px 30px rgba(20,184,166,0.1); }
            50% { box-shadow: 0 0 0 6px rgba(20,184,166,0.14), 0 12px 36px rgba(20,184,166,0.16); }
          }
        `}</style>

        <div
          data-slot="spotlight-search-bar-input-wrapper"
          className={cn(
            "relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out",
            focused
              ? "border-teal-300 bg-white"
              : "border-neutral-200 bg-white shadow-sm",
          )}
          style={
            focused
              ? { animation: "spotlight-glow 2.4s ease-in-out infinite" }
              : undefined
          }
        >
          <div className="absolute inset-0 bg-linear-to-r from-teal-50/80 via-white to-cyan-50/80" />
          <div className="relative flex items-center">
            <div
              data-slot="spotlight-search-bar-icon"
              className={cn(
                "ml-3.5 flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-teal-500 to-cyan-500 shadow-sm transition-transform duration-300",
                focused && "scale-110",
              )}
            >
              <Search className="h-3.5 w-3.5 text-white" />
            </div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 160)}
              placeholder={placeholder}
              aria-label={placeholder}
              data-slot="spotlight-search-bar-input"
              className="h-12 flex-1 bg-transparent pr-10 pl-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
            />
            {value ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setValue("")}
                data-slot="spotlight-search-bar-clear"
                className="absolute right-3 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-neutral-200/80 transition-colors hover:bg-neutral-300"
              >
                <X className="h-2.5 w-2.5 text-neutral-600" />
              </button>
            ) : (
              <kbd
                data-slot="spotlight-search-bar-shortcut"
                className="absolute right-3 flex h-5 items-center rounded-md border border-neutral-200 bg-white/80 px-1.5 font-mono text-[10px] text-neutral-400"
              >
                /
              </kbd>
            )}
          </div>
        </div>

        {showPanel && (
          <div
            data-slot="spotlight-search-bar-dropdown"
            className="absolute top-[calc(100%+8px)] z-50 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
            style={{
              animation: "spotlight-expand 0.25s cubic-bezier(0.34,1.2,0.64,1)",
            }}
          >
            {showRecents && (
              <div className="p-2">
                <p className="px-2 py-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                  {recentLabel}
                </p>
                {recents.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onMouseDown={() => pick(term)}
                    data-slot="spotlight-search-bar-recent-item"
                    className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2 py-2 text-sm text-neutral-700 transition-colors hover:bg-teal-50"
                  >
                    <Clock size={13} className="text-neutral-400" />
                    {term}
                  </button>
                ))}
              </div>
            )}

            {showResults && (
              <div className="scroll-hover max-h-56 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="px-3 py-6 text-center text-sm text-neutral-400">
                    No matches for &ldquo;{value}&rdquo;
                  </p>
                ) : (
                  Array.from(grouped.entries()).map(([category, list]) => (
                    <div key={category} className="mb-1">
                      <p className="px-2 py-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                        {category}
                      </p>
                      {list.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onMouseDown={() => pick(item)}
                          data-slot="spotlight-search-bar-result"
                          className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2 py-2 text-sm text-neutral-800 transition-colors hover:bg-teal-50"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                            {item.icon}
                          </span>
                          {item.title}
                        </button>
                      ))}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);

SpotlightSearchBar.displayName = "SpotlightSearchBar";
