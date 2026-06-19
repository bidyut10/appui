import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type CreditCardGlassProps = Readonly<
  {
    holderName?: string;
    cardNumber?: string;
    expiryDate?: string;
    tier?: string;
  } & ComponentPropsWithoutRef<"div">
>;

// Production-ready Credit Card Glass component — styled with Tailwind CSS.
export const CreditCardGlass = forwardRef<HTMLDivElement, CreditCardGlassProps>(
  (
    {
      className,
      holderName = "Bidyut Kundu",
      cardNumber = "4532 •••• •••• 7891",
      expiryDate = "09/28",
      tier = "Platinum",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="credit-card-glass"
      className={cn(
        "group relative h-48 w-80 cursor-pointer overflow-hidden rounded-2xl font-sans",
        className,
      )}
      {...props}
    >
      {/* Background */}
      <div
        data-slot="credit-card-glass-background"
        className="absolute inset-0 bg-linear-to-br from-neutral-800 via-neutral-900 to-black"
      />

      {/* Glow Effects */}
      <div
        data-slot="credit-card-glass-glow-top"
        className="absolute top-[-20%] right-[-10%] h-40 w-40 rounded-full bg-teal-500/30 blur-[50px] transition-colors duration-700 group-hover:bg-teal-500/40"
      />

      <div
        data-slot="credit-card-glass-glow-bottom"
        className="absolute bottom-[-30%] left-[-10%] h-48 w-48 rounded-full bg-cyan-500/20 blur-[60px]"
      />

      {/* Card Content */}
      <div
        data-slot="credit-card-glass-content"
        className="relative z-10 flex h-full flex-col justify-between p-5"
      >
        {/* Top Section */}
        <div
          data-slot="credit-card-glass-header"
          className="flex items-start justify-between"
        >
          <div
            data-slot="credit-card-glass-chip"
            className="h-7 w-10 rounded-md bg-linear-to-br from-amber-300 to-amber-500 opacity-90"
          />

          <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            {tier}
          </span>
        </div>

        {/* Bottom Section */}
        <div data-slot="credit-card-glass-details">
          <p className="mb-3 font-mono text-lg tracking-[0.15em] text-white/90">
            {cardNumber}
          </p>

          <div className="flex items-end justify-between">
            <div>
              <p className="mb-0.5 font-mono text-[8px] tracking-widest text-white/30 uppercase">
                Card Holder
              </p>

              <p className="text-xs font-medium tracking-wider text-white/80 uppercase">
                {holderName}
              </p>
            </div>

            <div className="text-right">
              <p className="mb-0.5 font-mono text-[8px] tracking-widest text-white/30 uppercase">
                Expires
              </p>

              <p className="font-mono text-xs text-white/80">{expiryDate}</p>
            </div>

            {/* Payment Network */}
            <div
              data-slot="credit-card-glass-network"
              className="flex -space-x-2"
            >
              <div className="h-7 w-7 rounded-full bg-red-500/80 opacity-90" />
              <div className="h-7 w-7 rounded-full bg-amber-500/80 opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);

CreditCardGlass.displayName = "CreditCardGlass";
