import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Folder } from "@/icons/Folder";
import { ArrowRight } from "@/icons/ArrowRight";

/**
 * Empty State built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type EmptyStateProps = {
  title?: string;
  description?: string;
  count?: string;
  actionLabel?: string;
  secondaryActionLabel?: string;
} & ComponentPropsWithoutRef<"div">;

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      title = "No projects yet",
      description = "Create your first project to start building with our component library.",
      count = "0",
      actionLabel = "Create Project",
      secondaryActionLabel = "import from template",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="empty-state"
      className={cn("w-72 text-center font-sans", className)}
      {...props}
    >
      <div
        data-slot="empty-state-icon"
        className="relative mx-auto mb-5 h-24 w-24"
      >
        <div className="absolute inset-0 rotate-6 rounded-3xl bg-linear-to-br from-pink-100 to-cyan-100" />
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-neutral-100 bg-white shadow-sm">
          <Folder size={32} className="text-neutral-300" />
        </div>
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500">
          <span className="text-[10px] font-bold text-white">{count}</span>
        </div>
      </div>

      <h3
        data-slot="empty-state-title"
        className="mb-1.5 text-base font-semibold text-neutral-900"
      >
        {title}
      </h3>
      <p
        data-slot="empty-state-description"
        className="mx-auto mb-5 max-w-55 text-xs leading-relaxed text-neutral-500"
      >
        {description}
      </p>

      <button
        type="button"
        aria-label={actionLabel}
        className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-lg bg-neutral-900 px-5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95"
      >
        {actionLabel}
        <ArrowRight size={12} />
      </button>

      <p className="mt-4 text-[10px] text-neutral-400">
        or{" "}
        <button
          type="button"
          aria-label={secondaryActionLabel}
          className="cursor-pointer text-neutral-800 hover:underline"
        >
          {secondaryActionLabel}
        </button>
      </p>
    </div>
  ),
);

EmptyState.displayName = "EmptyState";
