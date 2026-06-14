"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Apple Wallet Stack built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleWalletPass = {
  name: string;
  title: string;
  color: string;
  detail: string;
};

export type AppleWalletStackProps = {
  passes?: AppleWalletPass[];
  onPassClick?: (pass: AppleWalletPass, index: number) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultPasses: AppleWalletPass[] = [
  {
    name: "Boarding Pass",
    title: "AI 2847",
    color: "from-blue-600 to-blue-800",
    detail: "CCU → DEL",
  },
  {
    name: "Event Ticket",
    title: "Design Conf 2026",
    color: "from-blue-600 to-blue-800",
    detail: "VIP Pass",
  },
  {
    name: "Membership",
    title: "AppUI Pro",
    color: "from-neutral-700 to-neutral-900",
    detail: "Valid until Dec 2026",
  },
];

export const AppleWalletStack = forwardRef<
  HTMLDivElement,
  AppleWalletStackProps
>(({ className, passes = defaultPasses, onPassClick, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="apple-wallet-stack"
    className={cn("relative h-64 w-72 font-sans", className)}
    {...props}
  >
    {passes.map((pass, index) => (
      <div
        key={pass.name}
        data-slot="apple-wallet-stack-pass"
        onClick={() => onPassClick?.(pass, index)}
        className={cn(
          "absolute inset-x-0 cursor-pointer rounded-2xl bg-linear-to-br p-4 text-white shadow-lg transition-transform hover:-translate-y-1",
          pass.color,
          onPassClick && "cursor-pointer",
        )}
        style={{ top: `${index * 28}px`, zIndex: passes.length - index }}
      >
        <p className="text-[10px] font-medium tracking-wider text-white/60 uppercase">
          {pass.name}
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight">
          {pass.title}
        </p>
        <p className="mt-1 text-[12px] text-white/60">{pass.detail}</p>
        {index === 0 && (
          <div className="absolute right-4 bottom-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <div className="grid h-6 w-6 grid-cols-3 gap-px">
              {Array.from({ length: 9 }).map((_, j) => (
                <div
                  key={j}
                  className={cn(j % 2 === 0 ? "bg-white" : "bg-transparent")}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
));

AppleWalletStack.displayName = "AppleWalletStack";
