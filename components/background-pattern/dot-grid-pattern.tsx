import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface DotGridPatternProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const DotGridPattern = forwardRef<HTMLDivElement, DotGridPatternProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dot-grid-pattern"
        className={cn(
          "relative isolate overflow-hidden bg-neutral-50 [background-image:radial-gradient(circle,#e8e8e8_1px,transparent_1px)] [background-size:12px_12px]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

DotGridPattern.displayName = "DotGridPattern";

export { DotGridPattern };
