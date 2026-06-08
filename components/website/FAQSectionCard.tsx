"use client";
import React, { useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";

const faqs = [
  {
    q: "How do I copy a component?",
    a: "Click on any component, copy the code, and paste it into your project. All components are self-contained.",
  },
  {
    q: "Are these components free to use?",
    a: "Yes! All components are open source and free for personal and commercial use.",
  },
  {
    q: "Do they work with Next.js?",
    a: "Absolutely. Built with React 19 and Next.js 16, with full TypeScript support.",
  },
  {
    q: "Can I customize the styling?",
    a: "Every component accepts className props and uses Tailwind CSS for easy customization.",
  },
];

export const FAQSectionCard = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="border-b border-neutral-100 px-5 py-4">
        <h4 className="text-sm font-semibold text-neutral-900">
          Frequently Asked Questions
        </h4>
        <p className="mt-0.5 text-[11px] text-neutral-400">
          Everything you need to know
        </p>
      </div>
      <div className="divide-y divide-neutral-50">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-neutral-50/50"
            >
              <span className="pr-4 text-xs font-medium text-neutral-800">
                {f.q}
              </span>
              <ChevronDown
                size={14}
                className={`shrink-0 text-neutral-400 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="-mt-1 px-5 pb-3.5">
                <p className="text-[11px] leading-relaxed text-neutral-500">
                  {f.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
