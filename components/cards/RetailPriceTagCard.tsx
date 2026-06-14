import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Retail price tag card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type RetailPriceTagCardProps = {
  productName?: string;
  price?: string;
  originalPrice?: string;
  sku?: string;
  discount?: string;
} & ComponentPropsWithoutRef<"div">;

export const RetailPriceTagCard = forwardRef<
  HTMLDivElement,
  RetailPriceTagCardProps
>(
  (
    {
      className,
      productName = "Merino Crew Neck",
      price = "₹2,499",
      originalPrice = "₹3,999",
      sku = "SKU-8842",
      discount = "38% OFF",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="retail-price-tag-card"
      className={cn("relative w-full max-w-[160px] font-sans", className)}
      {...props}
    >
      <div className="absolute -top-1 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-neutral-300 bg-white shadow-sm" />
      <div
        className="absolute top-0 left-1/2 z-0 h-8 w-px -translate-x-1/2 bg-neutral-300"
        aria-hidden
      />
      <div className="relative mt-6 rotate-[-2deg] rounded-sm border-2 border-amber-400 bg-amber-50 px-4 py-3 shadow-md">
        <span className="absolute -top-2.5 right-2 rounded bg-rose-500 px-1.5 py-0.5 text-[8px] font-black text-white">
          {discount}
        </span>
        <p className="text-[11px] leading-tight font-bold text-neutral-900">
          {productName}
        </p>
        <p className="mt-2 text-2xl font-black tracking-tight text-neutral-900">
          {price}
        </p>
        <p className="text-[11px] text-neutral-400 line-through">
          {originalPrice}
        </p>
        <p className="mt-2 font-mono text-[8px] text-neutral-400">{sku}</p>
        <div className="mt-2 border-t border-dashed border-amber-300 pt-2">
          <div className="flex justify-center gap-0.5">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-4 w-px",
                  i % 2 === 0 ? "bg-neutral-800" : "bg-transparent",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
);

RetailPriceTagCard.displayName = "RetailPriceTagCard";
