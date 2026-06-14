import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

function SpecimenRow({
  size,
  className,
  children,
}: {
  size: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="w-7 shrink-0 text-right font-mono text-[9px] leading-none text-neutral-300 tabular-nums select-none">
        {size}
      </span>
      <p className={cn("min-w-0 flex-1", className)}>{children}</p>
    </div>
  );
}

export type TypographyShowcaseWidgetProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div">;

export const TypographyShowcaseWidget = forwardRef<
  HTMLDivElement,
  TypographyShowcaseWidgetProps
>(({ className, title = "Type scale", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="typography-showcase-widget"
    className={cn("w-xs bg-white p-5 font-sans", className)}
    {...props}
  >
    <p className="mb-5 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
      {title}
    </p>

    <div className="space-y-1">
      <SpecimenRow
        size="24"
        className="text-2xl font-bold tracking-tight text-neutral-900"
      >
        Morning brief
      </SpecimenRow>
      <SpecimenRow
        size="18"
        className="text-lg font-semibold text-neutral-800"
      >
        Sunday · Partly cloudy
      </SpecimenRow>
    </div>

    <div className="mt-4 flex gap-3">
      <span aria-hidden className="w-7 shrink-0" />
      <div className="min-w-0 flex-1 border-t border-neutral-100" />
    </div>

    <div className="mt-4 space-y-3">
      <SpecimenRow
        size="14"
        className="text-sm leading-relaxed text-neutral-600"
      >
        Rain holds off until evening. Good window for a walk before 4 PM.
      </SpecimenRow>
      <SpecimenRow
        size="10"
        className="text-[10px] font-medium text-neutral-400"
      >
        6:42 AM · Weather
      </SpecimenRow>
    </div>
  </div>
));

TypographyShowcaseWidget.displayName = "TypographyShowcaseWidget";
