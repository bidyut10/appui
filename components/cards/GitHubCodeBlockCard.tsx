"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Copy } from "@/icons/Copy";
import { Check } from "@/icons/Check";

/**
 * GitHub-style syntax-highlighted code block card.
 *
 * Replace the demo snippet with your own code.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GitHubCodeBlockCardProps = {
  fileName?: string;
  language?: string;
  code?: string;
  onCopy?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultCode = `export function Button({ children, ...props }) {
  return (
    <button
      className="rounded-xl bg-neutral-900 px-4 py-2 text-white"
      {...props}
    >
      {children}
    </button>
  );
}`;

export const GitHubCodeBlockCard = forwardRef<
  HTMLDivElement,
  GitHubCodeBlockCardProps
>(
  (
    {
      className,
      fileName = "Button.tsx",
      language = "tsx",
      code = defaultCode,
      onCopy,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        onCopy?.();
        window.setTimeout(() => setCopied(false), 2000);
      } catch {
        /* clipboard unavailable */
      }
    };

    return (
      <div
        ref={ref}
        data-slot="github-code-block-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-neutral-700">
              {fileName}
            </span>
            <span className="rounded bg-neutral-200/80 px-1.5 py-0.5 font-mono text-[9px] text-neutral-500">
              {language}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy code"
            className="flex h-7 cursor-pointer items-center gap-1 rounded-md border border-neutral-100 bg-white px-2 text-[10px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
          >
            {copied ? (
              <Check size={12} className="text-emerald-600" />
            ) : (
              <Copy size={12} />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <pre className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-h-44 overflow-auto bg-[#fafafa] p-3 font-mono text-[10px] leading-relaxed text-neutral-800">
          <code>{code}</code>
        </pre>
      </div>
    );
  },
);

GitHubCodeBlockCard.displayName = "GitHubCodeBlockCard";
