import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const laptopFrameVariants = {
  gray: {
    border: "border-neutral-300",
    base: "bg-linear-to-b from-neutral-300 to-neutral-400",
    notch: "bg-neutral-500",
  },
  titanium: {
    border: "border-[#7a7671]",
    base: "bg-linear-to-b from-[#8a8580] to-[#6a6560]",
    notch: "bg-[#5c5854]",
  },
  white: {
    border: "border-neutral-200",
    base: "bg-linear-to-b from-neutral-100 to-neutral-300",
    notch: "bg-neutral-400",
  },
  purple: {
    border: "border-[#5a515f]",
    base: "bg-linear-to-b from-[#5a515f] to-[#403948]",
    notch: "bg-[#332d3a]",
  },
  orange: {
    border: "border-[#c97f52]",
    base: "bg-linear-to-b from-[#dc9268] to-[#c26f45]",
    notch: "bg-[#a85e39]",
  },
  cherry: {
    border: "border-[#c48a98]",
    base: "bg-linear-to-b from-[#daa8b5] to-[#c48a98]",
    notch: "bg-[#b57987]",
  },
  midnight: {
    border: "border-[#26262c]",
    base: "bg-linear-to-b from-[#34343c] to-[#1c1c22]",
    notch: "bg-[#131318]",
  },
  starlight: {
    border: "border-[#d8cdb8]",
    base: "bg-linear-to-b from-[#f0e6d4] to-[#dcd0b8]",
    notch: "bg-[#c9bc9e]",
  },
  skyBlue: {
    border: "border-[#a9c4d8]",
    base: "bg-linear-to-b from-[#c3dbe8] to-[#9fc0d4]",
    notch: "bg-[#87abc2]",
  },
  gold: {
    border: "border-[#c9a13b]",
    base: "bg-linear-to-b from-[#e8c563] to-[#d4a93f]",
    notch: "bg-[#b8902e]",
  },
} as const;

export type LaptopFrameVariant = keyof typeof laptopFrameVariants;

type LaptopMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: LaptopFrameVariant;
    children?: ReactNode;
  }
>;

export const LaptopMockupCard = forwardRef<
  HTMLDivElement,
  LaptopMockupCardProps
>(({ className, children, variant = "gray", ...props }, ref) => {
  const frame = laptopFrameVariants[variant];

  return (
    <div
      ref={ref}
      data-slot="laptop-mockup-card"
      data-variant={variant}
      className={cn("flex flex-col items-center font-sans", className)}
      {...props}
    >
      <div
        className={cn(
          "w-70 overflow-hidden rounded-t-xl border-2 border-b-0 shadow-xl md:w-[384px]",
          frame.border,
        )}
      >
        <div className="bg-neutral-800 p-1.5 pb-0">
          <div className="relative h-46 overflow-hidden rounded-t-sm bg-neutral-900 md:h-63">
            <div className="relative size-full overflow-hidden rounded-t-sm">
              {children}
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative h-2.5 w-78.75 rounded-b-xl md:h-3 md:w-108",
          frame.base,
        )}
      >
        <div
          className={cn(
            "absolute top-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-b-md md:w-16",
            frame.notch,
          )}
          aria-hidden="true"
        />
      </div>
    </div>
  );
});

LaptopMockupCard.displayName = "LaptopMockupCard";
