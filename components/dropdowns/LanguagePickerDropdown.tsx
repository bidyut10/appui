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
import { ChevronDown } from "@/icons/ChevronDown";

/**
 * Language picker dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo languages and default selection with your own locale list.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type LanguageOption = {
  code: string;
  name: string;
  countryCode: string;
};

export type LanguagePickerDropdownProps = {
  languages?: LanguageOption[];
  defaultIndex?: number;
  label?: string;
  onChange?: (language: LanguageOption) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultLanguages: LanguageOption[] = [
  { code: "EN", name: "English", countryCode: "US" },
  { code: "HI", name: "Hindi", countryCode: "IN" },
  { code: "ES", name: "Spanish", countryCode: "ES" },
  { code: "FR", name: "French", countryCode: "FR" },
  { code: "DE", name: "German", countryCode: "DE" },
  { code: "JP", name: "Japanese", countryCode: "JP" },
];

export const LanguagePickerDropdown = forwardRef<
  HTMLDivElement,
  LanguagePickerDropdownProps
>(
  (
    {
      className,
      languages = defaultLanguages,
      defaultIndex = 0,
      label = "Language",
      onChange,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(
      Math.min(Math.max(0, defaultIndex), Math.max(0, languages.length - 1)),
    );
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const close = (event: MouseEvent) => {
        const node = innerRef.current;
        if (node && !node.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    const current = languages[selected] ?? languages[0];

    if (!current) {
      return null;
    }

    return (
      <div
        ref={ref}
        data-slot="language-picker-dropdown"
        className={cn("relative inline-block font-sans", className)}
        {...props}
      >
        <div ref={innerRef}>
          <button
            type="button"
            aria-label={`Selected language: ${current.name}`}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 transition-all hover:border-neutral-300 hover:shadow-sm"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-neutral-100 text-[9px] font-bold text-neutral-500">
              {current.countryCode}
            </span>
            <span className="text-xs font-medium text-neutral-700">
              {current.code}
            </span>
            <ChevronDown className="h-3 w-3 text-neutral-400" />
          </button>

          <div
            data-slot="language-picker-dropdown-menu"
            className={cn(
              "absolute top-[calc(100%+8px)] right-0 z-[100] w-52 rounded-2xl border border-neutral-200/80 bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
              open
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0",
            )}
            style={{ transformOrigin: "top right" }}
          >
            <p className="px-2.5 py-1.5 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {label}
            </p>

            {languages.map((lang, index) => (
              <button
                key={lang.code}
                type="button"
                aria-label={`Select ${lang.name}`}
                onClick={() => {
                  setSelected(index);
                  setOpen(false);
                  onChange?.(lang);
                }}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors",
                  selected === index ? "bg-teal-50" : "hover:bg-neutral-50",
                )}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded bg-neutral-100 text-[9px] font-bold text-neutral-500">
                  {lang.countryCode}
                </span>
                <span className="flex-1 text-xs font-medium text-neutral-800">
                  {lang.name}
                </span>
                {selected === index && (
                  <Check size={13} className="text-teal-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

LanguagePickerDropdown.displayName = "LanguagePickerDropdown";
