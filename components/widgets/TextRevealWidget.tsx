"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Scroll-style text reveal widget — words fade in sequentially.
 *
 * Replace the demo sentence with your own marketing copy.
 */
export type TextRevealWidgetProps = {
  title?: string;
  words?: string[];
} & ComponentPropsWithoutRef<"div">;

export const TextRevealWidget = forwardRef<
  HTMLDivElement,
  TextRevealWidgetProps
>(
  (
    {
      className,
      title = "Reveal animation",
      words = ["Ship", "beautiful", "interfaces", "faster", "than", "ever."],
      ...props
    },
    ref,
  ) => {
    const [visibleCount, setVisibleCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
      if (!mounted) return;
      if (visibleCount >= words.length) return;

      const timer = window.setTimeout(
        () => setVisibleCount((c) => c + 1),
        280,
      );
      return () => window.clearTimeout(timer);
    }, [mounted, visibleCount, words.length]);

    return (
      <div
        ref={ref}
        data-slot="text-reveal-widget"
        className={cn(
          "w-72 rounded-2xl border border-neutral-200 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
          {title}
        </p>
        <p className="flex flex-wrap gap-x-1.5 gap-y-1 text-xl leading-snug font-semibold text-neutral-900">
          {words.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={cn(
                "inline-block transition-all duration-500",
                index < visibleCount
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              )}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    );
  },
);

TextRevealWidget.displayName = "TextRevealWidget";
