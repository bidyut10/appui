import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface GraphPaperPatternProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const GraphPaperPattern = forwardRef<HTMLDivElement, GraphPaperPatternProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="graph-paper-pattern"
        className={cn(
          "relative isolate overflow-hidden bg-white [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:20px_20px]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

GraphPaperPattern.displayName = "GraphPaperPattern";

export { GraphPaperPattern };
