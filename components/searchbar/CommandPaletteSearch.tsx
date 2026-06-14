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
import { Command } from "@/icons/Command";
import { Check } from "@/icons/Check";

export type CommandPaletteSuggestion = {
  id: string;
  label: string;
  kbd: string;
  group?: string;
};

/**
 * Dark command palette with live filtering, keyboard navigation, and run feedback.
 *
 * Replace the demo suggestions with your own command palette logic.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CommandPaletteSearchProps = {
  placeholder?: string;
  suggestionsLabel?: string;
  suggestions?: CommandPaletteSuggestion[];
  onRun?: (command: CommandPaletteSuggestion) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultSuggestions: CommandPaletteSuggestion[] = [
  { id: "dash", label: "Go to Dashboard", kbd: "G D", group: "Navigation" },
  { id: "proj", label: "Create New Project", kbd: "C P", group: "Actions" },
  { id: "set", label: "Open Settings", kbd: "⌘ ,", group: "Navigation" },
  { id: "inv", label: "Invite Team Member", kbd: "I T", group: "Actions" },
  { id: "exp", label: "Export Report", kbd: "E R", group: "Actions" },
];

export const CommandPaletteSearch = forwardRef<
  HTMLDivElement,
  CommandPaletteSearchProps
>(
  (
    {
      className,
      placeholder = "Type a command…",
      suggestionsLabel = "Commands",
      suggestions = defaultSuggestions,
      onRun,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [ranId, setRanId] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filtered = suggestions.filter(
      (item) =>
        !query ||
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.group?.toLowerCase().includes(query.toLowerCase()),
    );

    useEffect(() => {
      setActiveIndex(0);
    }, [query]);

    useEffect(() => {
      if (ranId === null) return;
      const timer = window.setTimeout(() => setRanId(null), 1200);
      return () => window.clearTimeout(timer);
    }, [ranId]);

    const runCommand = (command: CommandPaletteSuggestion) => {
      setRanId(command.id);
      setQuery("");
      onRun?.(command);
      inputRef.current?.blur();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (filtered.length === 0) return;

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
        runCommand(filtered[activeIndex]);
      } else if (event.key === "Escape") {
        setQuery("");
        setFocused(false);
        inputRef.current?.blur();
      }
    };

    const showPanel = focused || query.length > 0;

    return (
      <div
        ref={ref}
        data-slot="command-palette-search"
        className={cn("relative w-72", className)}
        {...props}
      >
        <style>{`
          @keyframes command-palette-pop {
            0% { transform: scale(0.98); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>

        <div
          data-slot="command-palette-search-input-wrapper"
          className={cn(
            "relative flex items-center overflow-hidden rounded-2xl border transition-all duration-300",
            showPanel
              ? "border-neutral-600 bg-neutral-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)]"
              : "border-neutral-700/50 bg-neutral-800",
          )}
        >
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-neutral-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 160)}
            onKeyDown={handleKeyDown}
            data-slot="command-palette-search-input"
            className="h-12 w-full bg-transparent pr-24 pl-11 text-sm text-neutral-100 outline-none placeholder:text-neutral-500"
          />
          <div
            data-slot="command-palette-search-shortcut"
            className="absolute right-3 flex items-center gap-1"
          >
            <kbd className="flex h-6 items-center gap-0.5 rounded-md border border-neutral-600 bg-neutral-700/50 px-1.5 font-mono text-[10px] text-neutral-400">
              <Command size={10} />K
            </kbd>
          </div>
        </div>

        {showPanel && (
          <div
            data-slot="command-palette-search-dropdown"
            className="absolute top-[calc(100%+6px)] z-50 w-full overflow-hidden rounded-2xl border border-neutral-700/80 bg-neutral-900 p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
            style={{ animation: "command-palette-pop 0.2s ease-out" }}
          >
            <p className="px-3 py-1.5 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
              {suggestionsLabel}
              {query && (
                <span className="ml-2 tracking-normal text-neutral-600 normal-case">
                  · {filtered.length} match{filtered.length === 1 ? "" : "es"}
                </span>
              )}
            </p>

            {filtered.length === 0 ? (
              <p className="px-3 py-4 text-center text-[13px] text-neutral-500">
                No commands found
              </p>
            ) : (
              filtered.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onMouseDown={() => runCommand(item)}
                  data-slot="command-palette-search-suggestion"
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] transition-colors",
                    index === activeIndex
                      ? "bg-neutral-800 text-neutral-100"
                      : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200",
                    ranId === item.id && "bg-emerald-900/40 text-emerald-200",
                  )}
                >
                  <span className="flex items-center gap-2">
                    {ranId === item.id && (
                      <Check size={12} className="text-emerald-400" />
                    )}
                    {item.label}
                  </span>
                  <kbd className="font-mono text-[10px] text-neutral-600">
                    {item.kbd}
                  </kbd>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    );
  },
);

CommandPaletteSearch.displayName = "CommandPaletteSearch";
