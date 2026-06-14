"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type MinimalEarbudsWidgetProps = ComponentPropsWithoutRef<"div">;

export const MinimalEarbudsWidget = forwardRef<
  HTMLDivElement,
  MinimalEarbudsWidgetProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-earbuds-widget"
    className={cn(
      "flex h-44 w-44 flex-col items-center justify-center gap-3 rounded-[2rem] border border-neutral-100 bg-white font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <div className="flex gap-6">
      <div className="h-14 w-8 rounded-full bg-neutral-900" />
      <div className="h-14 w-8 rounded-full bg-neutral-900" />
    </div>
    <p className="font-mono text-xs font-bold tracking-[0.3em] text-neutral-900 uppercase">
      Connect
    </p>
  </div>
));

MinimalEarbudsWidget.displayName = "MinimalEarbudsWidget";
