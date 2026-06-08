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

export const MinimalAccordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items = [
        {
          title: "What is your return policy?",
          content:
            "You can return any item within 30 days of purchase. Items must be in original condition.",
        },
      ],
      className = "",
      ...props
    },
    ref,
  ) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
      <div ref={ref} className={`w-64 space-y-2 ${className}`} {...props}>
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border-b border-neutral-100 bg-white px-4"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="flex w-full cursor-pointer items-center justify-between py-3 text-left text-sm font-medium text-neutral-800 hover:text-black focus:outline-none"
              >
                {item.title}
                <ChevronDown
                  className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "mb-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-neutral-500">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
MinimalAccordion.displayName = "MinimalAccordion";
