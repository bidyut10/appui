import React, { forwardRef } from "react";
import { Home } from "@/icons/Home";
import { ChevronDown } from "@/icons/ChevronDown";

export const BreadcrumbNav = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <nav ref={ref} className={`flex items-center gap-1.5 font-sans ${className}`} {...props}>
    <button className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">
      <Home size={13} />
      Home
    </button>
    <ChevronDown size={12} className="text-neutral-300 -rotate-90" />
    <button className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">Dashboard</button>
    <ChevronDown size={12} className="text-neutral-300 -rotate-90" />
    <button className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">Analytics</button>
    <ChevronDown size={12} className="text-neutral-300 -rotate-90" />
    <span className="text-xs font-medium text-neutral-900">Revenue Report</span>
  </nav>
));
BreadcrumbNav.displayName = "BreadcrumbNav";
