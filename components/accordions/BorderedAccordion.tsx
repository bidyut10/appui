"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { ChevronDown } from "@/icons/ChevronDown";

/**
 * Bordered Accordion built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type BorderedAccordionItem = {
  title: ReactNode;
  content: ReactNode;
};

export type BorderedAccordionProps = {
  items?: BorderedAccordionItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: BorderedAccordionItem[] = [
  {
    title: "Pricing",
    content: "Our plans start at $9.99/mo for standard.",
  },
  {
    title: "Support",
    content: "24/7 priority email support for all users.",
  },
];

export const BorderedAccordion = forwardRef<
  HTMLDivElement,
  BorderedAccordionProps
>(({ items = defaultItems, className, ...props }, ref) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div
      ref={ref}
      data-slot="bordered-accordion"
      className={cn("w-72 space-y-2", className)}
      {...props}
    >
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;

        return (
          <div
            key={idx}
            data-slot="bordered-accordion-item"
            className={cn(
              "rounded-lg border transition-colors duration-200",
              isOpen
                ? "border-blue-50 bg-white"
                : "border-neutral-200 bg-white",
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={`Toggle ${typeof item.title === "string" ? item.title : "section"}`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-medium text-neutral-800 focus:outline-none"
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden px-4 transition-all duration-300 ease-in-out",
                isOpen ? "max-h-40 pb-3 opacity-100" : "max-h-0 pb-0 opacity-0",
              )}
            >
              <div className="text-sm text-neutral-600">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

BorderedAccordion.displayName = "BorderedAccordion";
