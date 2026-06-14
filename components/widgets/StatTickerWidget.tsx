"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

export type StatTickerItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

/**
 * Animated stat ticker widget — counts up on mount.
 *
 * Replace demo stats with your own metrics.
 */
export type StatTickerWidgetProps = {
  title?: string;
  stats?: StatTickerItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultStats: StatTickerItem[] = [
  { label: "Components", value: 270, suffix: "+" },
  { label: "Downloads", value: 48, suffix: "K" },
  { label: "Contributors", value: 86 },
];

function useCountUp(target: number, duration = 1200, enabled: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const start = performance.now();
    const frame = (time: number) => {
      const t = Math.min(1, (time - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(frame);
    };

    const raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, enabled]);

  return value;
}

function StatItem({
  stat,
  enabled,
}: {
  stat: StatTickerItem;
  enabled: boolean;
}) {
  const count = useCountUp(stat.value, 1200, enabled);

  return (
    <div className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-3 text-center">
      <p className="font-mono text-2xl font-bold text-neutral-900 tabular-nums">
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="mt-0.5 text-[10px] font-medium text-neutral-500 uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}

export const StatTickerWidget = forwardRef<
  HTMLDivElement,
  StatTickerWidgetProps
>(
  (
    {
      className,
      title = "Platform stats",
      stats = defaultStats,
      ...props
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
      <div
        ref={ref}
        data-slot="stat-ticker-widget"
        className={cn(
          "w-72 rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>
        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} enabled={mounted} />
          ))}
        </div>
      </div>
    );
  },
);

StatTickerWidget.displayName = "StatTickerWidget";
