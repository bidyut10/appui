"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type PaginationBarProps = {
  defaultPage?: number;

  page?: number;

  totalPages?: number;

  visiblePages?: number[];

  onPageChange?: (page: number) => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export const PaginationBar = forwardRef<HTMLDivElement, PaginationBarProps>(
  (
    {
      className,

      defaultPage = 3,

      page: controlledPage,

      totalPages = 12,

      visiblePages = [1, 2, 3, 4, 5],

      onPageChange,

      ...props
    },
    ref,
  ) => {
    const [internalPage, setInternalPage] = useState(defaultPage);

    const currentPage = controlledPage ?? internalPage;

    const setPage = (page: number) => {
      const nextPage = Math.min(totalPages, Math.max(1, page));

      if (controlledPage === undefined) {
        setInternalPage(nextPage);
      }

      onPageChange?.(nextPage);
    };

    return (
      <div
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        data-slot="pagination-bar"
        className={cn("flex items-center gap-1 font-sans", className)}
        {...props}
      >
        {/* ------------------------------------------------------------------ */}
        {/*                             Previous                               */}
        {/* ------------------------------------------------------------------ */}

        <button
          type="button"
          aria-label="Previous page"
          data-slot="pagination-previous"
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-white text-sm text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft />
        </button>

        {/* ------------------------------------------------------------------ */}
        {/*                               Pages                                */}
        {/* ------------------------------------------------------------------ */}

        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            aria-current={currentPage === pageNumber ? "page" : undefined}
            data-slot="pagination-page"
            onClick={() => setPage(pageNumber)}
            className={cn(
              "h-8 w-8 cursor-pointer rounded-lg text-xs font-medium transition-colors",
              currentPage === pageNumber
                ? "bg-neutral-900 text-white shadow-sm"
                : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50",
            )}
          >
            {pageNumber}
          </button>
        ))}

        {/* ------------------------------------------------------------------ */}
        {/*                              Ellipsis                              */}
        {/* ------------------------------------------------------------------ */}

        <span
          aria-hidden="true"
          data-slot="pagination-ellipsis"
          className="px-1 text-xs text-neutral-400"
        >
          …
        </span>

        {/* ------------------------------------------------------------------ */}
        {/*                             Last Page                              */}
        {/* ------------------------------------------------------------------ */}

        <button
          type="button"
          data-slot="pagination-last-page"
          onClick={() => setPage(totalPages)}
          className="h-8 w-8 cursor-pointer rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          {totalPages}
        </button>

        {/* ------------------------------------------------------------------ */}
        {/*                               Next                                 */}
        {/* ------------------------------------------------------------------ */}

        <button
          type="button"
          aria-label="Next page"
          data-slot="pagination-next"
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-white text-sm text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight />
        </button>
      </div>
    );
  },
);

PaginationBar.displayName = "PaginationBar";
