"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

const SHOWCASE_ITEMS = [
  {
    id: "button",
    label: "Button",
    preview: (
      <button
        type="button"
        className="rounded-full bg-neutral-900 px-4 py-1.5 text-[10px] font-medium text-white"
      >
        Get started
      </button>
    ),
  },
  {
    id: "card",
    label: "Card",
    preview: (
      <div className="w-28 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm">
        <div className="h-1.5 w-10 rounded-full bg-neutral-200" />
        <div className="mt-1.5 h-1 w-16 rounded-full bg-neutral-100" />
        <div className="mt-1 h-1 w-12 rounded-full bg-neutral-100" />
      </div>
    ),
  },
  {
    id: "badge",
    label: "Badge",
    preview: (
      <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[10px] font-medium text-rose-700">
        New release
      </span>
    ),
  },
  {
    id: "input",
    label: "Input",
    preview: (
      <div className="w-32 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-[10px] text-neutral-400">
        Search components
      </div>
    ),
  },
] as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function LaptopShowcaseScreen() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = globalThis.setInterval(() => {
      setIndex((current) => (current + 1) % SHOWCASE_ITEMS.length);
    }, 2800);

    return () => globalThis.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-50 px-4 font-sans">
      <p className="font-serif text-sm text-neutral-900">Opensource UI</p>
      <p className="mt-0.5 text-[9px] text-neutral-400">Copy-paste components</p>

      <div className="relative mt-4 flex h-20 w-full items-center justify-center">
        {SHOWCASE_ITEMS.map((item, itemIndex) => (
          <div
            key={item.id}
            aria-hidden={itemIndex !== index}
            className={cn(
              "absolute flex items-center justify-center transition-all duration-500 ease-out motion-reduce:transition-none",
              itemIndex === index
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-1 scale-95 opacity-0",
            )}
          >
            {item.preview}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        {SHOWCASE_ITEMS.map((item, itemIndex) => (
          <span
            key={item.id}
            className={cn(
              "text-[8px] font-medium transition-colors duration-300 motion-reduce:transition-none",
              itemIndex === index
                ? "text-neutral-900"
                : "text-neutral-300",
            )}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="mt-2 flex gap-1">
        {SHOWCASE_ITEMS.map((item, itemIndex) => (
          <span
            key={item.id}
            aria-hidden
            className={cn(
              "h-0.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
              itemIndex === index ? "w-3 bg-neutral-900" : "w-1 bg-neutral-200",
            )}
          />
        ))}
      </div>
    </div>
  );
}
