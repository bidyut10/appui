import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type RetailPriceTagCardProps = Readonly<{
  productName?: string;
  price?: string;
  originalPrice?: string;
  sku?: string;
  discount?: string;
} & ComponentPropsWithoutRef<"div">>;

const BARCODE_SLOTS = [
  "barcode-01",
  "barcode-02",
  "barcode-03",
  "barcode-04",
  "barcode-05",
  "barcode-06",
  "barcode-07",
  "barcode-08",
  "barcode-09",
  "barcode-10",
  "barcode-11",
  "barcode-12",
  "barcode-13",
  "barcode-14",
  "barcode-15",
  "barcode-16",
  "barcode-17",
  "barcode-18",
  "barcode-19",
  "barcode-20",
  "barcode-21",
  "barcode-22",
  "barcode-23",
  "barcode-24",
] as const;

// Production-ready Retail Price Tag component — styled with Tailwind CSS.
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
      className={cn("relative w-40 font-sans", className)}
      {...props}
    >
      <div className="absolute -top-1 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-stone-300 bg-stone-50 shadow-sm" />
      <div
        className="absolute top-0 left-1/2 z-0 h-8 w-px -translate-x-1/2 bg-stone-300"
        aria-hidden
      />
      <div className="relative mt-6 -rotate-2 rounded-sm border border-stone-300 bg-gradient-to-b from-stone-50 to-stone-100/90 px-4 py-3 shadow-sm shadow-stone-300/30">
        <span className="absolute -top-2.5 right-2 rounded-sm border border-stone-300 bg-white px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-stone-600 uppercase">
          {discount}
        </span>
        <p className="pr-10 text-[11px] leading-tight font-semibold text-stone-600">
          {productName}
        </p>
        <p className="mt-2 text-2xl font-bold tracking-tight text-stone-800">
          {price}
        </p>
        <p className="text-[11px] text-stone-400 line-through">
          {originalPrice}
        </p>
        <p className="mt-2 font-mono text-[8px] tracking-wider text-stone-400 uppercase">
          {sku}
        </p>
        <div className="mt-2 border-t border-dashed border-stone-300 pt-2">
          <div className="flex justify-center gap-0.5">
            {BARCODE_SLOTS.map((slotId, slotIndex) => (
              <div
                key={slotId}
                className={cn(
                  "h-4 w-px",
                  slotIndex % 2 === 0 ? "bg-stone-500/70" : "bg-transparent",
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
