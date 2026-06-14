"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from "react";

import { cn } from "@/lib/cn";

import { Share } from "@/icons/Share";
import { Copy } from "@/icons/Copy";
import { Mail } from "@/icons/Mail";
import { Link2Icon } from "./ShareDropdownIcons";

/**
 * Share menu dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Customize the share channels, page URL, and copy action for your app.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ShareOption = {
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
};

export type ShareMenuDropdownProps = {
  triggerLabel?: string;
  menuTitle?: string;
  shareUrl?: string;
  copyLabel?: string;
  options?: ShareOption[];
  onShare?: (option: ShareOption) => void;
  onCopy?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultOptions: ShareOption[] = [
  {
    label: "Copy Link",
    icon: Copy,
    color: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
  },
  {
    label: "Email",
    icon: Mail,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    label: "Twitter",
    icon: Share,
    color: "bg-sky-50 text-sky-600 hover:bg-sky-100",
  },
  {
    label: "LinkedIn",
    icon: Link2Icon,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
];

export const ShareMenuDropdown = forwardRef<
  HTMLDivElement,
  ShareMenuDropdownProps
>(
  (
    {
      triggerLabel = "Share",
      menuTitle = "Share this page",
      shareUrl = "appui.dev/components/cards",
      copyLabel = "Copy",
      options = defaultOptions,
      onShare,
      onCopy,
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const close = (e: MouseEvent) => {
        if (!innerRef.current?.contains(e.target as Node)) setOpen(false);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <div ref={innerRef}>
          <button
            type="button"
            aria-label={triggerLabel}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="group inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl border border-neutral-100 bg-white px-5 text-sm font-medium transition-all duration-300 hover:border-neutral-300 hover:shadow-sm active:scale-95"
          >
            <Share size={15} className="text-neutral-500" />
            <span className="text-neutral-800">{triggerLabel}</span>
          </button>

          <div
            className={cn(
              "absolute top-[calc(100%+8px)] left-1/2 z-[100] w-64 -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
              open
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0",
            )}
            style={{ transformOrigin: "top" }}
          >
            <p className="mb-3 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              {menuTitle}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  aria-label={`Share via ${option.label}`}
                  onClick={() => {
                    setOpen(false);
                    onShare?.(option);
                  }}
                  className={cn(
                    "flex cursor-pointer flex-col items-center gap-2 rounded-xl p-3 text-xs font-medium transition-all duration-200 active:scale-95",
                    option.color,
                  )}
                >
                  <option.icon size={18} />
                  {option.label}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2">
              <span className="flex-1 truncate text-[11px] text-neutral-400">
                {shareUrl}
              </span>
              <button
                type="button"
                aria-label={copyLabel}
                onClick={() => onCopy?.()}
                className="cursor-pointer font-mono text-[10px] font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {copyLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ShareMenuDropdown.displayName = "ShareMenuDropdown";
