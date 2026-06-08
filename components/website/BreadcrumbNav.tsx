import React, { forwardRef } from "react";
import { Home } from "@/icons/Home";
import { ChevronDown } from "@/icons/ChevronDown";

export const BreadcrumbNav = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <nav
    ref={ref}
    className={`flex items-center gap-1.5 font-sans ${className}`}
    {...props}
  >
    <button className="flex cursor-pointer items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-neutral-900">
      <Home size={13} />
      Home
    </button>
    <ChevronDown size={12} className="-rotate-90 text-neutral-300" />
    <button className="cursor-pointer text-xs text-neutral-500 transition-colors hover:text-neutral-900">
      Dashboard
    </button>
    <ChevronDown size={12} className="-rotate-90 text-neutral-300" />
    <button className="cursor-pointer text-xs text-neutral-500 transition-colors hover:text-neutral-900">
      Analytics
    </button>
    <ChevronDown size={12} className="-rotate-90 text-neutral-300" />
    <span className="text-xs font-medium text-neutral-900">Revenue Report</span>
  </nav>
));
BreadcrumbNav.displayName = "BreadcrumbNav";
