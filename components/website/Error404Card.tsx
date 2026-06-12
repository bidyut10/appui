"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Home } from "@/icons/Home";
import { ArrowRight } from "@/icons/ArrowRight";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type Error404CardProps = {
  code?: string;

  title?: string;

  description?: string;

  primaryActionLabel?: string;
  secondaryActionLabel?: string;

  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Error 404 Card                                */
/* -------------------------------------------------------------------------- */

export const Error404Card = forwardRef<HTMLDivElement, Error404CardProps>(
  (
    {
      className,

      code = "404",

      title = "Page not found",

      description = `Sorry, the page you're looking for doesn't exist or has been moved.`,

      primaryActionLabel = "Go Home",
      secondaryActionLabel = "Contact",

      onPrimaryAction,
      onSecondaryAction,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="error-404-card"
      className={cn("w-72 text-center font-sans", className)}
      {...props}
    >
      {/* ---------------------------------------------------------------------- */}
      {/* Error Code                                                             */}
      {/* ---------------------------------------------------------------------- */}

      <p
        data-slot="error-404-card-code"
        className="text-7xl leading-none font-extralight tracking-tighter text-neutral-200"
      >
        {code}
      </p>

      {/* ---------------------------------------------------------------------- */}
      {/* Content                                                                */}
      {/* ---------------------------------------------------------------------- */}

      <div data-slot="error-404-card-content">
        <h3
          data-slot="error-404-card-title"
          className="mt-2 mb-1 text-lg font-semibold text-neutral-900"
        >
          {title}
        </h3>

        <p
          data-slot="error-404-card-description"
          className="mx-auto mb-5 max-w-55 text-xs leading-relaxed text-neutral-500"
        >
          {description}
        </p>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Actions                                                                */}
      {/* ---------------------------------------------------------------------- */}

      <div
        data-slot="error-404-card-actions"
        className="flex items-center justify-center gap-2"
      >
        <button
          type="button"
          onClick={onPrimaryAction}
          className="flex h-9 cursor-pointer items-center gap-1.5 rounded-lg bg-neutral-900 px-4 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <Home size={12} />
          {primaryActionLabel}
        </button>

        <button
          type="button"
          onClick={onSecondaryAction}
          className="flex h-9 cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-4 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          {secondaryActionLabel}
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  ),
);

Error404Card.displayName = "Error404Card";
