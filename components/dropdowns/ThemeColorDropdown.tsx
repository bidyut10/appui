"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/**
 * Color theme picker dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo theme swatches with your own design tokens or palettes.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ThemeOption = {
  name: string;
  bg: string;
  border: string;
  dot: string;
};

export type ThemeColorDropdownProps = {
  themes?: ThemeOption[];
  defaultIndex?: number;
  menuTitle?: string;
  onChange?: (theme: ThemeOption, index: number) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultThemes: ThemeOption[] = [
  {
    name: "Light",
    bg: "bg-white",
    border: "border-neutral-200",
    dot: "bg-neutral-900",
  },
  {
    name: "Dark",
    bg: "bg-neutral-900",
    border: "border-neutral-700",
    dot: "bg-white",
  },
  {
    name: "Teal",
    bg: "bg-teal-50",
    border: "border-teal-200",
    dot: "bg-teal-600",
  },
  {
    name: "Rose",
    bg: "bg-rose-50",
    border: "border-rose-200",
    dot: "bg-rose-500",
  },
  {
    name: "Emerald",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dot: "bg-emerald-600",
  },
  {
    name: "Amber",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
];

export const ThemeColorDropdown = forwardRef<
  HTMLDivElement,
  ThemeColorDropdownProps
>(
  (
    {
      themes = defaultThemes,
      defaultIndex = 0,
      menuTitle = "Color Theme",
      onChange,
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(
      Math.min(Math.max(0, defaultIndex), Math.max(0, themes.length - 1)),
    );
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const close = (e: MouseEvent) => {
        if (!innerRef.current?.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    const current = themes[selected] ?? themes[0];

    if (!current) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("relative inline-block font-sans", className)}
        {...props}
      >
        <div ref={innerRef}>
          <button
            type="button"
            aria-label={`Selected theme: ${current.name}`}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 cursor-pointer items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-3 transition-all hover:border-neutral-300 hover:shadow-sm"
          >
            <div
              className={cn(
                "h-5 w-5 rounded-md border flex items-center justify-center",
                current.bg,
                current.border,
              )}
            >
              <div className={cn("h-2 w-2 rounded-full", current.dot)} />
            </div>
            <span className="text-xs font-medium text-neutral-700">
              {current.name}
            </span>
          </button>

          <div
            className={cn(
              "absolute top-[calc(100%+8px)] left-1/2 z-[100] w-56 -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
              open
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0",
            )}
            style={{ transformOrigin: "top" }}
          >
            <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {menuTitle}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((theme, i) => (
                <button
                  key={theme.name}
                  type="button"
                  aria-label={`Select ${theme.name} theme`}
                  onClick={() => {
                    setSelected(i);
                    setOpen(false);
                    onChange?.(theme, i);
                  }}
                  className={cn(
                    "relative flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border p-2 transition-all",
                    selected === i
                      ? "border-teal-300 bg-teal-50/50 ring-2 ring-teal-100"
                      : "border-neutral-100 hover:border-neutral-200",
                  )}
                >
                  <div
                    className={cn(
                      "h-8 w-8 rounded-lg border flex items-center justify-center",
                      theme.bg,
                      theme.border,
                    )}
                  >
                    <div className={cn("h-3 w-3 rounded-full", theme.dot)} />
                  </div>
                  <span className="text-[10px] font-medium text-neutral-600">
                    {theme.name}
                  </span>
                  {selected === i && (
                    <div className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-teal-600">
                      <Check size={8} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ThemeColorDropdown.displayName = "ThemeColorDropdown";
