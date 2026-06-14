"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Trash } from "@/icons/Trash";

/**
 * Confirm Dialog Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type ConfirmDialogCardProps = {
  open?: boolean;

  defaultOpen?: boolean;

  title?: string;

  description?: string;

  confirmLabel?: string;

  cancelLabel?: string;

  icon?: ReactNode;

  onConfirm?: () => void;

  onCancel?: () => void;

  onOpenChange?: (open: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

export const ConfirmDialogCard = forwardRef<
  HTMLDivElement,
  ConfirmDialogCardProps
>(
  (
    {
      className,

      open: controlledOpen,

      defaultOpen = true,

      title = "Delete project?",

      description = `This will permanently delete "Design System v2" and all its files. This action cannot be undone.`,

      confirmLabel = "Delete",

      cancelLabel = "Cancel",

      icon,

      onConfirm,

      onCancel,

      onOpenChange,

      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

    const setOpen = (value: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(value);
      }

      onOpenChange?.(value);
    };

    const handleCancel = () => {
      setOpen(false);
      onCancel?.();
    };

    const handleConfirm = () => {
      setOpen(false);
      onConfirm?.();
    };

    
    if (!isOpen) {
      return (
        <button
          type="button"
          data-slot="confirm-dialog-trigger"
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium transition-colors hover:bg-neutral-50"
        >
          Show dialog
        </button>
      );
    }

    
    return (
      <div
        ref={ref}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
        data-slot="confirm-dialog-card"
        className={cn(
          "w-72 rounded-2xl border border-neutral-200 bg-white p-5 text-center font-sans shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]",
          className,
        )}
        {...props}
      >
        
        <div
          data-slot="confirm-dialog-icon"
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50"
        >
          {icon ?? <Trash size={20} className="text-red-500" />}
        </div>

        
        <h4
          id="confirm-dialog-title"
          data-slot="confirm-dialog-title"
          className="mb-1 text-sm font-semibold text-neutral-900"
        >
          {title}
        </h4>

        <p
          id="confirm-dialog-description"
          data-slot="confirm-dialog-description"
          className="mb-5 text-[11px] leading-relaxed text-neutral-500"
        >
          {description}
        </p>

        
        <div data-slot="confirm-dialog-actions" className="flex gap-2">
          <button
            type="button"
            data-slot="confirm-dialog-cancel"
            onClick={handleCancel}
            className="h-9 flex-1 cursor-pointer rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            {cancelLabel}
          </button>

          <button
            type="button"
            data-slot="confirm-dialog-confirm"
            onClick={handleConfirm}
            className="h-9 flex-1 cursor-pointer rounded-lg bg-red-500 text-xs font-medium text-white transition-colors hover:bg-red-600"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    );
  },
);

ConfirmDialogCard.displayName = "ConfirmDialogCard";
