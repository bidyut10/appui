"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

/**
 * Typewriter text animation widget with blinking cursor.
 *
 * Replace the demo phrases with your own rotating copy.
 */
export type TypewriterTextWidgetProps = {
  label?: string;
  phrases?: string[];
  speed?: number;
  pauseMs?: number;
} & ComponentPropsWithoutRef<"div">;

export const TypewriterTextWidget = forwardRef<
  HTMLDivElement,
  TypewriterTextWidgetProps
>(
  (
    {
      className,
      label = "Typewriter Effect",
      phrases = [
        "Build faster with copy-paste UI.",
        "Ship polished cards in minutes.",
        "Design once. Reuse everywhere.",
      ],
      speed = 42,
      pauseMs = 1800,
      ...props
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false);
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
      if (!mounted) return;

      const current = phrases[phraseIndex % phrases.length];

      const timeout = window.setTimeout(
        () => {
          if (!deleting) {
            const next = current.slice(0, text.length + 1);
            setText(next);
            if (next === current) {
              window.setTimeout(() => setDeleting(true), pauseMs);
            }
          } else {
            const next = current.slice(0, text.length - 1);
            setText(next);
            if (next === "") {
              setDeleting(false);
              setPhraseIndex((i) => i + 1);
            }
          }
        },
        deleting ? speed / 2 : speed,
      );

      return () => window.clearTimeout(timeout);
    }, [mounted, text, deleting, phraseIndex, phrases, speed, pauseMs]);

    return (
      <div
        ref={ref}
        data-slot="typewriter-text-widget"
        className={cn("w-xs bg-white p-5 font-sans", className)}
        {...props}
      >
        <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          {label}
        </p>
        <p className="min-h-14 text-lg leading-snug font-semibold text-neutral-900">
          {mounted ? text : phrases[0]}
          <span className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse bg-teal-500 align-middle" />
        </p>
      </div>
    );
  },
);

TypewriterTextWidget.displayName = "TypewriterTextWidget";
