"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn, scrollHover } from "@/lib/utils";

type Axis = "y" | "x" | "both";

type ThumbMetrics = {
  size: number;
  offset: number;
  active: boolean;
};

function computeVerticalThumb(el: HTMLElement): ThumbMetrics {
  const { scrollHeight, clientHeight, scrollTop } = el;
  if (scrollHeight <= clientHeight + 1) {
    return { size: 0, offset: 0, active: false };
  }

  const thumbSize = Math.max(24, (clientHeight / scrollHeight) * clientHeight);
  const maxOffset = clientHeight - thumbSize;
  const offset =
    maxOffset <= 0
      ? 0
      : (scrollTop / (scrollHeight - clientHeight)) * maxOffset;

  return { size: thumbSize, offset, active: true };
}

function computeHorizontalThumb(el: HTMLElement): ThumbMetrics {
  const { scrollWidth, clientWidth, scrollLeft } = el;
  if (scrollWidth <= clientWidth + 1) {
    return { size: 0, offset: 0, active: false };
  }

  const thumbSize = Math.max(24, (clientWidth / scrollWidth) * clientWidth);
  const maxOffset = clientWidth - thumbSize;
  const offset =
    maxOffset <= 0 ? 0 : (scrollLeft / (scrollWidth - clientWidth)) * maxOffset;

  return { size: thumbSize, offset, active: true };
}

export type ScrollHoverAreaProps = {
  children: ReactNode;
  viewportClassName?: string;
  axis?: Axis;
} & ComponentPropsWithoutRef<"div">;

export const ScrollHoverArea = forwardRef<HTMLDivElement, ScrollHoverAreaProps>(
  ({ className, viewportClassName, children, axis = "y", ...props }, ref) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const [vertical, setVertical] = useState<ThumbMetrics>({
      size: 0,
      offset: 0,
      active: false,
    });
    const [horizontal, setHorizontal] = useState<ThumbMetrics>({
      size: 0,
      offset: 0,
      active: false,
    });

    const update = useCallback(() => {
      const el = viewportRef.current;
      if (!el) return;

      if (axis === "y" || axis === "both") {
        setVertical(computeVerticalThumb(el));
      }

      if (axis === "x" || axis === "both") {
        setHorizontal(computeHorizontalThumb(el));
      }
    }, [axis]);

    useEffect(() => {
      const el = viewportRef.current;
      if (!el) return;

      update();

      const ro = new ResizeObserver(update);
      ro.observe(el);
      for (const child of el.children) {
        ro.observe(child);
      }

      el.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);

      return () => {
        ro.disconnect();
        el.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    }, [update, children]);

    const overflowClass =
      axis === "x"
        ? "overflow-x-scroll overflow-y-hidden"
        : axis === "both"
          ? "overflow-scroll"
          : "overflow-y-scroll overflow-x-hidden";

    const clipClass =
      axis === "x"
        ? "-mb-4 pb-4"
        : axis === "both"
          ? "-mr-4 pr-4 -mb-4 pb-4"
          : "-mr-4 pr-4";

    return (
      <div
        ref={ref}
        data-slot="scroll-hover-area"
        className={cn("scroll-hover-area relative overflow-hidden", className)}
        {...props}
      >
        <div
          ref={viewportRef}
          className={cn(
            "h-full w-full",
            scrollHover,
            overflowClass,
            clipClass,
            viewportClassName,
          )}
        >
          {children}
        </div>

        {vertical.active && (axis === "y" || axis === "both") && (
          <div
            className="scroll-hover-bar pointer-events-none absolute top-0 right-1 bottom-0 z-10 w-1"
            aria-hidden
          >
            <div
              className="absolute right-0 w-1 rounded-full bg-neutral-400"
              style={{ height: vertical.size, top: vertical.offset }}
            />
          </div>
        )}

        {horizontal.active && (axis === "x" || axis === "both") && (
          <div
            className="scroll-hover-bar pointer-events-none absolute right-0 bottom-1 left-0 z-10 h-1"
            aria-hidden
          >
            <div
              className="absolute bottom-0 h-1 rounded-full bg-neutral-400"
              style={{ width: horizontal.size, left: horizontal.offset }}
            />
          </div>
        )}
      </div>
    );
  },
);

ScrollHoverArea.displayName = "ScrollHoverArea";
