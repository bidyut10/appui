"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { X } from "@/icons/X";

/**
 * Notification toast built with React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo title, description, and actions
 * with your own notification content.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type NotificationToastProps = {
  title?: string;
  description?: string;
  viewChangesLabel?: string;
  dismissLabel?: string;
  showNotificationLabel?: string;
  onViewChanges?: () => void;
  onDismiss?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const NotificationToast = forwardRef<
  HTMLDivElement,
  NotificationToastProps
>(
  (
    {
      className,
      title = "Changes saved",
      description = "Your component library has been updated successfully.",
      viewChangesLabel = "View changes",
      dismissLabel = "Dismiss",
      showNotificationLabel = "Show notification",
      onViewChanges,
      onDismiss,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <button
          type="button"
          aria-label={showNotificationLabel}
          onClick={() => setVisible(true)}
          data-slot="notification-toast-show"
          className="cursor-pointer rounded-xl border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          {showNotificationLabel}
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
        data-slot="notification-toast"
        className={cn(
          "flex w-80 items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]",
          className,
        )}
        {...props}
      >
        <div
          data-slot="notification-toast-icon"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50"
        >
          <Check size={16} className="text-emerald-600" />
        </div>
        <div data-slot="notification-toast-content" className="min-w-0 flex-1">
          <p className="mb-0.5 text-sm font-semibold text-neutral-900">
            {title}
          </p>
          <p className="text-xs leading-relaxed text-neutral-500">
            {description}
          </p>
          <div
            data-slot="notification-toast-actions"
            className="mt-2.5 flex items-center gap-3"
          >
            <button
              type="button"
              aria-label={viewChangesLabel}
              onClick={onViewChanges}
              className="cursor-pointer text-xs font-medium text-neutral-900 hover:underline"
            >
              {viewChangesLabel}
            </button>
            <button
              type="button"
              aria-label={dismissLabel}
              onClick={handleDismiss}
              className="cursor-pointer text-xs text-neutral-400 hover:text-neutral-600"
            >
              {dismissLabel}
            </button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Close notification"
          onClick={handleDismiss}
          data-slot="notification-toast-close"
          className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
        >
          <X size={12} />
        </button>
      </div>
    );
  },
);

NotificationToast.displayName = "NotificationToast";
