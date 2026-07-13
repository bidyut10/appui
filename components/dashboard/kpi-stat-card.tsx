"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  Minus,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

type KpiTone = "revenue" | "users" | "orders" | "views";

type KpiTrend = "up" | "down" | "neutral";

const TONE_STYLES: Record<KpiTone, { icon: LucideIcon; iconWrap: string }> = {
  revenue: {
    icon: DollarSign,
    iconWrap: "bg-emerald-50 text-emerald-700",
  },
  users: {
    icon: Users,
    iconWrap: "bg-sky-50 text-sky-700",
  },
  orders: {
    icon: ShoppingCart,
    iconWrap: "bg-amber-50 text-amber-700",
  },
  views: {
    icon: Eye,
    iconWrap: "bg-teal-50 text-teal-700",
  },
};

const TREND_STYLES: Record<KpiTrend, string> = {
  up: "text-emerald-700",
  down: "text-red-600",
  neutral: "text-neutral-500",
};

export type KpiStatCardProps = Readonly<
  {
    label?: string;
    value?: string | number;
    change?: string;
    changeLabel?: string;
    trend?: KpiTrend;
    tone?: KpiTone;
    hint?: string;
  } & ComponentPropsWithoutRef<"article">
>;

// KPI stat card — label, value, delta, and icon tone for analytics dashboards.
export const KpiStatCard = forwardRef<HTMLElement, KpiStatCardProps>(
  (
    {
      className,
      label = "Total revenue",
      value = "$48,290",
      change = "+12.4%",
      changeLabel = "vs last month",
      trend = "up",
      tone = "revenue",
      hint,
      ...props
    },
    ref,
  ) => {
    const { icon: Icon, iconWrap } = TONE_STYLES[tone];
    const TrendIcon =
      trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;

    return (
      <article
        ref={ref}
        data-slot="kpi-stat-card"
        className={cn(
          "w-full min-w-0 border border-neutral-200 bg-white p-4 font-sans md:p-5",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
              {label}
            </p>
            <p className="mt-2 font-serif text-2xl leading-none tracking-tight text-neutral-950 tabular-nums md:text-3xl">
              {value}
            </p>
          </div>

          <div
            className={cn(
              "flex size-9 shrink-0 items-center justify-center",
              iconWrap,
            )}
          >
            <Icon size={16} aria-hidden />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-neutral-100 pt-3">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium tabular-nums",
              TREND_STYLES[trend],
            )}
          >
            <TrendIcon size={13} aria-hidden />
            {change}
          </span>
          <span className="text-xs text-neutral-500">{changeLabel}</span>
        </div>

        {hint ? (
          <p className="mt-2 text-xs leading-relaxed text-neutral-500">{hint}</p>
        ) : null}
      </article>
    );
  },
);

KpiStatCard.displayName = "KpiStatCard";
