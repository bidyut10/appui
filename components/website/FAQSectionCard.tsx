"use client";
import React, { useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";

const faqs = [
  { q: "How do I copy a component?", a: "Click on any component, copy the code, and paste it into your project. All components are self-contained." },
  { q: "Are these components free to use?", a: "Yes! All components are open source and free for personal and commercial use." },
  { q: "Do they work with Next.js?", a: "Absolutely. Built with React 19 and Next.js 16, with full TypeScript support." },
  { q: "Can I customize the styling?", a: "Every component accepts className props and uses Tailwind CSS for easy customization." },
];

export const FAQSectionCard = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-80 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="px-5 py-4 border-b border-neutral-100">
        <h4 className="text-sm font-semibold text-neutral-900">Frequently Asked Questions</h4>
        <p className="text-[11px] text-neutral-400 mt-0.5">Everything you need to know</p>
      </div>
      <div className="divide-y divide-neutral-50">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-neutral-50/50 transition-colors cursor-pointer">
              <span className="text-xs font-medium text-neutral-800 pr-4">{f.q}</span>
              <ChevronDown size={14} className={`text-neutral-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-3.5 -mt-1">
                <p className="text-[11px] text-neutral-500 leading-relaxed">{f.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
