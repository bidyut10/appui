"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { ChevronDown } from "@/icons/ChevronDown";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSectionCardProps = {
  title?: string;

  description?: string;

  items?: FAQItem[];

  defaultOpen?: number;

  openIndex?: number;

  onOpenChange?: (index: number) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultFAQs: FAQItem[] = [
  {
    question: "How do I copy a component?",
    answer:
      "Click on any component, copy the code, and paste it into your project. All components are self-contained.",
  },
  {
    question: "Are these components free to use?",
    answer:
      "Yes! All components are open source and free for personal and commercial use.",
  },
  {
    question: "Do they work with Next.js?",
    answer:
      "Absolutely. Built with React 19 and Next.js 16, with full TypeScript support.",
  },
  {
    question: "Can I customize the styling?",
    answer:
      "Every component accepts className props and uses Tailwind CSS for easy customization.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              FAQ Section Card                              */
/* -------------------------------------------------------------------------- */

export const FAQSectionCard = forwardRef<HTMLDivElement, FAQSectionCardProps>(
  (
    {
      className,

      title = "Frequently Asked Questions",

      description = "Everything you need to know",

      items = defaultFAQs,

      defaultOpen = 0,

      openIndex,

      onOpenChange,

      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);

    const activeIndex = openIndex !== undefined ? openIndex : internalOpen;

    const handleToggle = (index: number) => {
      const next = activeIndex === index ? -1 : index;

      if (openIndex === undefined) {
        setInternalOpen(next);
      }

      onOpenChange?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="faq-section-card"
        className={cn(
          "w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* ---------------------------------------------------------------------- */}
        {/* Header                                                                 */}
        {/* ---------------------------------------------------------------------- */}

        <div
          data-slot="faq-section-card-header"
          className="border-b border-neutral-100 px-5 py-4"
        >
          <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

          <p className="mt-0.5 text-[11px] text-neutral-400">{description}</p>
        </div>

        {/* ---------------------------------------------------------------------- */}
        {/* FAQ Items                                                              */}
        {/* ---------------------------------------------------------------------- */}

        <div
          data-slot="faq-section-card-list"
          className="divide-y divide-neutral-50"
        >
          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={item.question} data-slot="faq-section-card-item">
                <button
                  type="button"
                  data-slot="faq-section-card-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  onClick={() => handleToggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-neutral-50/50"
                >
                  <span className="pr-4 text-xs font-medium text-neutral-800">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={14}
                    className={cn(
                      "shrink-0 text-neutral-400 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${index}`}
                    data-slot="faq-section-card-content"
                    className="-mt-1 px-5 pb-3.5"
                  >
                    <p className="text-[11px] leading-relaxed text-neutral-500">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

FAQSectionCard.displayName = "FAQSectionCard";
