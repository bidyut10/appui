"use client"
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
            <div key={idx} className="border-b px-4 bg-white border-neutral-100">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full py-3 cursor-pointer flex items-center justify-between text-left text-sm font-medium text-neutral-800 hover:text-black focus:outline-none"
              >
                {item.title}
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 mb-3" : "max-h-0 opacity-0"
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
