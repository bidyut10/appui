"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { ArrowRight } from "@/icons/ArrowRight";

/**
 * Cryptocurrency ticker card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CryptoAsset = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  positive: boolean;
  sparkline: number[];
};

export type CryptoTickerCardProps = {
  title?: string;
  assets?: CryptoAsset[];
  updatedAt?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultAssets: CryptoAsset[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$67,420",
    change: "+2.4%",
    positive: true,
    sparkline: [40, 55, 48, 62, 58, 70, 65],
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,512",
    change: "-0.8%",
    positive: false,
    sparkline: [60, 52, 48, 45, 50, 42, 44],
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$148",
    change: "+5.1%",
    positive: true,
    sparkline: [30, 38, 45, 52, 48, 60, 72],
  },
];

export const CryptoTickerCard = forwardRef<
  HTMLDivElement,
  CryptoTickerCardProps
>(
  (
    {
      className,
      title = "Market Watch",
      assets = defaultAssets,
      updatedAt = "Live · 2s ago",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="crypto-ticker-card"
      className={cn(
        "w-xs overflow-hidden rounded-2xl bg-[#0a0a0b] font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div
        data-slot="crypto-ticker-card-header"
        className="flex items-center justify-between border-b border-white/5 px-4 py-3"
      >
        <p className="text-xs font-semibold text-white">{title}</p>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          {updatedAt}
        </span>
      </div>

      <div
        data-slot="crypto-ticker-card-list"
        className="divide-y divide-white/5"
      >
        {assets.map((asset) => {
          const max = Math.max(...asset.sparkline);
          const min = Math.min(...asset.sparkline);
          const range = max - min || 1;
          const points = asset.sparkline
            .map((v, i) => {
              const x = (i / (asset.sparkline.length - 1)) * 48;
              const y = 16 - ((v - min) / range) * 14;
              return `${x},${y}`;
            })
            .join(" ");

          return (
            <div
              key={asset.symbol}
              data-slot="crypto-ticker-card-asset"
              className="flex items-center gap-3 px-4 py-3"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                    {asset.symbol}
                  </span>
                  <span className="truncate text-[11px] text-neutral-500">
                    {asset.name}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {asset.price}
                </p>
              </div>

              <svg
                viewBox="0 0 48 18"
                className="h-5 w-12 shrink-0"
                aria-hidden
              >
                <polyline
                  points={points}
                  fill="none"
                  stroke={asset.positive ? "#34d399" : "#f87171"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                className={cn(
                  "shrink-0 text-xs font-semibold",
                  asset.positive ? "text-emerald-400" : "text-rose-400",
                )}
              >
                {asset.change}
              </span>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-1 border-t border-white/5 py-2.5 text-[11px] font-medium text-neutral-500 transition-colors hover:text-white"
      >
        View all markets
        <ArrowRight size={12} />
      </button>
    </div>
  ),
);

CryptoTickerCard.displayName = "CryptoTickerCard";
