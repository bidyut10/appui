"use client";
import { ChevronDown } from "@/icons/ChevronDown";
import React, { useState, forwardRef } from "react";

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AccordionItem[];
}

export const BorderedAccordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items = [
        {
          title: "Pricing",
          content: "Our plans start at $9.99/mo for standard.",
        },
        {
          title: "Support",
          content: "24/7 priority email support for all users.",
        },
      ],
      className = "",
      ...props
    },
    ref,
  ) => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
      <div ref={ref} className={`w-72 space-y-2 ${className}`} {...props}>
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-lg border transition-colors duration-200 ${
                isOpen
                  ? "border-blue-50 bg-white"
                  : "border-neutral-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-medium text-neutral-800 focus:outline-none"
              >
                {item.title}
                <ChevronDown
                  className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden px-4 transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-40 pb-3 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <div className="text-sm text-neutral-600">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
BorderedAccordion.displayName = "BorderedAccordion";
