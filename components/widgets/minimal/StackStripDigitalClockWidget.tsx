"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

const IOS_RED = "#FF3B30";
const IOS_LABEL = "#8E8E93";

export type StackStripDigitalClockWidgetProps = ComponentPropsWithoutRef<"div">;

/** iOS Calendar systemSmall widget. */
export const StackStripDigitalClockWidget = forwardRef<
  HTMLDivElement,
  StackStripDigitalClockWidgetProps
>(({ className, ...props }, ref) => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const weekday = now
    ? now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
    : "";
  const day = now ? now.getDate() : 0;
  const month = now
    ? now.toLocaleDateString("en-US", { month: "long" })
    : "";

  return (
    <div
      ref={ref}
      data-slot="stack-strip-digital-clock-widget"
      className={cn(
        "flex h-44 w-44 flex-col overflow-hidden rounded-[22px] bg-white px-4 pt-4 pb-3.5 font-sans shadow-[0_2px_14px_rgba(0,0,0,0.07)]",
        className,
      )}
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif' }}
      {...props}
    >
      {now ? (
        <>
          <p
            className="text-[13px] font-semibold leading-none tracking-[-0.02em]"
            style={{ color: IOS_RED }}
          >
            {weekday}
          </p>

          <div className="mt-auto flex items-baseline gap-1.5">
            <p className="text-[62px] leading-none font-extralight tracking-[-0.05em] text-black tabular-nums">
              {day}
            </p>
            <p
              className="pb-1 text-[17px] leading-none font-normal tracking-[-0.01em]"
              style={{ color: IOS_LABEL }}
            >
              {month}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col pt-0.5">
          <div className="h-3 w-9 rounded bg-neutral-100" aria-hidden />
          <div className="mt-auto flex items-baseline gap-1.5">
            <div className="h-12 w-10 rounded bg-neutral-100" aria-hidden />
            <div className="h-4 w-14 rounded bg-neutral-100" aria-hidden />
          </div>
        </div>
      )}
    </div>
  );
});

StackStripDigitalClockWidget.displayName = "StackStripDigitalClockWidget";
