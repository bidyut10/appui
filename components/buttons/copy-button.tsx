"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { Check, Copy } from "lucide-react";

export type CopyButtonProps = Readonly<
  {
    value?: string;
    label?: string;
    copiedLabel?: string;
    resetMs?: number;
  } & ComponentPropsWithoutRef<"button">
>;

// Copy — writes to clipboard and swaps the icon and label for confirmation.
export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      className,
      value = "npm i @appui/components",
      label = "Copy",
      copiedLabel = "Copied",
      resetMs = 1600,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      return () => {
        if (timerRef.current !== null) {
          globalThis.clearTimeout(timerRef.current);
        }
      };
    }, []);

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        // Clipboard may be unavailable; still show the confirmation state.
      }
      setCopied(true);
      if (timerRef.current !== null) globalThis.clearTimeout(timerRef.current);
      timerRef.current = globalThis.setTimeout(() => setCopied(false), resetMs);
    };

    return (
      <button
        ref={ref}
        type="button"
        data-slot="copy-button"
        data-copied={copied}
        onClick={handleClick}
        className={cn(
          "group inline-flex h-10 cursor-pointer items-center gap-2.5 rounded-lg border border-neutral-200 bg-white pr-3.5 pl-2.5 font-mono text-[13px] text-neutral-700 transition-colors duration-200 hover:border-neutral-300 select-none",
          className,
        )}
        {...props}
      >
        <span
          className={cn(
            "flex size-6 items-center justify-center rounded-md transition-colors duration-200",
            copied ? "bg-neutral-50 text-emerald-600" : "bg-neutral-50/50 text-neutral-500",
          )}
        >
          <span className="relative flex size-4 items-center justify-center">
            <Copy
              size={14}
              strokeWidth={2}
              className={cn(
                "absolute transition-all duration-200",
                copied ? "scale-50 opacity-0" : "scale-100 opacity-100",
              )}
            />
            <Check
              size={14}
              strokeWidth={2.5}
              className={cn(
                "absolute transition-all duration-200",
                copied ? "scale-100 opacity-100" : "scale-50 opacity-0",
              )}
            />
          </span>
        </span>

        <span className="font-sans text-sm font-medium tabular-nums">
          {copied ? copiedLabel : label}
        </span>
      </button>
    );
  },
);

CopyButton.displayName = "CopyButton";
