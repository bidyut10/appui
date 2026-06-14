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
 * Minimal Accordion built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type MinimalAccordionItem = {
  title: ReactNode;
  content: ReactNode;
};

export type MinimalAccordionProps = {
  items?: MinimalAccordionItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: MinimalAccordionItem[] = [
  {
    title: "What is your return policy?",
    content:
      "You can return any item within 30 days of purchase. Items must be in original condition.",
  },
];

export const MinimalAccordion = forwardRef<
  HTMLDivElement,
  MinimalAccordionProps
>(({ items = defaultItems, className, ...props }, ref) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      data-slot="minimal-accordion"
      className={cn("w-64 space-y-2", className)}
      {...props}
    >
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;

        return (
          <div
            key={idx}
            data-slot="minimal-accordion-item"
            className="border-b border-neutral-100 bg-white px-4"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={`Toggle ${typeof item.title === "string" ? item.title : "section"}`}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full cursor-pointer items-center justify-between py-3 text-left text-sm font-medium text-neutral-800 hover:text-black focus:outline-none"
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
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "mb-3 max-h-40 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="text-sm text-neutral-500">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

MinimalAccordion.displayName = "MinimalAccordion";
