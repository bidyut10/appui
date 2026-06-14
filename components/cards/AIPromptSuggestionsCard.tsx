"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const PROMPTS = [
  "Summarize this folder",
  "Generate alt text",
  "Rename files in batch",
  "Find duplicate images",
  "Create share link",
];

export type AIPromptSuggestionsCardProps = {
  title?: string;
  onSelect?: (prompt: string) => void;
} & ComponentPropsWithoutRef<"div">;

export const AIPromptSuggestionsCard = forwardRef<
  HTMLDivElement,
  AIPromptSuggestionsCardProps
>(({ className, title = "Quick prompts", onSelect, ...props }, ref) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      ref={ref}
      data-slot="ai-prompt-suggestions-card"
      className={cn(
        "w-64 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>
      <div className="flex flex-wrap gap-2">
        {PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => {
              setActive(prompt);
              onSelect?.(prompt);
            }}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors",
              active === prompt
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300",
            )}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
});

AIPromptSuggestionsCard.displayName = "AIPromptSuggestionsCard";
