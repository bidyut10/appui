"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Settings } from "@/icons/Settings";
import { Check } from "@/icons/Check";

/**
 * Cookie consent banner built with React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo copy and cookie preference actions
 * with your own consent management logic.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CookieBannerProps = {
  title?: string;
  description?: string;
  acceptAllLabel?: string;
  essentialOnlyLabel?: string;
  cookiePolicyLabel?: string;
  dismissLabel?: string;
  showBannerLabel?: string;
  allAcceptedMessage?: string;
  essentialAcceptedMessage?: string;
  onAcceptAll?: () => void;
  onAcceptEssential?: () => void;
  onDismiss?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const CookieBanner = forwardRef<HTMLDivElement, CookieBannerProps>(
  (
    {
      className,
      title = "We value your privacy",
      description = "We use cookies to enhance your experience, analyze traffic, and personalize content. You can customize your preferences below.",
      acceptAllLabel = "Accept All",
      essentialOnlyLabel = "Essential Only",
      cookiePolicyLabel = "Cookie Policy",
      dismissLabel = "Dismiss",
      showBannerLabel = "Show cookie banner",
      allAcceptedMessage = "All cookies accepted",
      essentialAcceptedMessage = "Essential cookies only",
      onAcceptAll,
      onAcceptEssential,
      onDismiss,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(true);
    const [accepted, setAccepted] = useState<"all" | "essential" | null>(null);

    if (!visible) {
      return (
        <button
          type="button"
          aria-label={showBannerLabel}
          onClick={() => {
            setVisible(true);
            setAccepted(null);
          }}
          data-slot="cookie-banner-show"
          className="cursor-pointer rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          {showBannerLabel}
        </button>
      );
    }

    const handleDismiss = () => {
      setVisible(false);
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        data-slot="cookie-banner"
        className={cn(
          "w-80 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white font-sans shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]",
          className,
        )}
        {...props}
      >
        <div data-slot="cookie-banner-content" className="p-5">
          <div
            data-slot="cookie-banner-header"
            className="mb-4 flex items-start gap-3"
          >
            <div
              data-slot="cookie-banner-icon"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-50"
            >
              <Settings size={16} className="text-amber-600" />
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold text-neutral-900">
                {title}
              </h4>
              <p className="text-[11px] leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          </div>

          {accepted ? (
            <div
              data-slot="cookie-banner-confirmation"
              className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 p-3"
            >
              <Check size={14} className="text-emerald-600" />
              <p className="text-xs font-medium text-emerald-700">
                {accepted === "all"
                  ? allAcceptedMessage
                  : essentialAcceptedMessage}
              </p>
            </div>
          ) : (
            <div data-slot="cookie-banner-actions" className="flex gap-2">
              <button
                type="button"
                aria-label={acceptAllLabel}
                onClick={() => {
                  setAccepted("all");
                  onAcceptAll?.();
                  setTimeout(() => setVisible(false), 1200);
                }}
                className="h-9 flex-1 cursor-pointer rounded-lg bg-neutral-900 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95"
              >
                {acceptAllLabel}
              </button>
              <button
                type="button"
                aria-label={essentialOnlyLabel}
                onClick={() => {
                  setAccepted("essential");
                  onAcceptEssential?.();
                  setTimeout(() => setVisible(false), 1200);
                }}
                className="h-9 flex-1 cursor-pointer rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                {essentialOnlyLabel}
              </button>
            </div>
          )}
        </div>

        <div
          data-slot="cookie-banner-footer"
          className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-5 py-2.5"
        >
          <button
            type="button"
            aria-label={cookiePolicyLabel}
            className="cursor-pointer text-[10px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            {cookiePolicyLabel}
          </button>
          <button
            type="button"
            aria-label={dismissLabel}
            onClick={handleDismiss}
            className="cursor-pointer text-[10px] text-neutral-400 transition-colors hover:text-neutral-600"
          >
            {dismissLabel}
          </button>
        </div>
      </div>
    );
  },
);

CookieBanner.displayName = "CookieBanner";
