import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Home } from "@/icons/Home";
import { ChevronDown } from "@/icons/ChevronDown";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type BreadcrumbItem = {
  label: string;
  onClick?: () => void;
};

export type BreadcrumbNavProps = {
  items?: BreadcrumbItem[];

  homeLabel?: string;
  homeIcon?: ReactNode;
  onHomeClick?: () => void;
} & ComponentPropsWithoutRef<"nav">;

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export const BreadcrumbNav = forwardRef<HTMLElement, BreadcrumbNavProps>(
  (
    {
      className,

      homeLabel = "Home",

      homeIcon,

      onHomeClick,

      items = [
        { label: "Dashboard" },
        { label: "Analytics" },
        { label: "Revenue Report" },
      ],

      ...props
    },
    ref,
  ) => {
    const lastIndex = items.length - 1;

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        data-slot="breadcrumb-nav"
        className={cn("flex items-center gap-1.5 font-sans", className)}
        {...props}
      >
        {/* ---------------------------------------------------------------------- */}
        {/*                                Home Item                               */}
        {/* ---------------------------------------------------------------------- */}

        <button
          type="button"
          onClick={onHomeClick}
          data-slot="breadcrumb-home"
          className="flex cursor-pointer items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-neutral-900"
        >
          {homeIcon ?? <Home size={13} />}
          {homeLabel}
        </button>

        {/* ---------------------------------------------------------------------- */}
        {/*                               Breadcrumbs                              */}
        {/* ---------------------------------------------------------------------- */}

        {items.map((item, index) => {
          const isLast = index === lastIndex;

          return (
            <div
              key={`${item.label}-${index}`}
              data-slot="breadcrumb-item-wrapper"
              className="flex items-center gap-1.5"
            >
              <ChevronDown
                size={12}
                data-slot="breadcrumb-separator"
                className="-rotate-90 text-neutral-300"
              />

              {isLast ? (
                <span
                  data-slot="breadcrumb-current"
                  aria-current="page"
                  className="text-xs font-medium text-neutral-900"
                >
                  {item.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  data-slot="breadcrumb-item"
                  className="cursor-pointer text-xs text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {item.label}
                </button>
              )}
            </div>
          );
        })}
      </nav>
    );
  },
);

BreadcrumbNav.displayName = "BreadcrumbNav";
