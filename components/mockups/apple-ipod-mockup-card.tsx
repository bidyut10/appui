import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const ipodFrameVariants = {
  silver: {
    body: "border-neutral-200/80 bg-[#e8e8ec]",
    wheel: "border-neutral-200/80 bg-[#efeff2]",
    wheelCenter: "border-neutral-200/70 bg-[#f8f8fa]",
    label: "text-neutral-500",
  },
  black: {
    body: "border-neutral-700/50 bg-[#2a2a2e]",
    wheel: "border-neutral-600/50 bg-[#3a3a3e]",
    wheelCenter: "border-neutral-600/40 bg-[#4a4a4f]",
    label: "text-neutral-400",
  },
  white: {
    body: "border-neutral-200/80 bg-[#f2f2f6]",
    wheel: "border-neutral-200/80 bg-[#fafafa]",
    wheelCenter: "border-neutral-200/70 bg-white",
    label: "text-neutral-500",
  },
  pink: {
    body: "border-rose-200/60 bg-[#eec0cc]",
    wheel: "border-rose-200/60 bg-[#f4d0da]",
    wheelCenter: "border-rose-200/50 bg-[#fae8ee]",
    label: "text-rose-700/70",
  },
  blue: {
    body: "border-sky-200/60 bg-[#a8c8e8]",
    wheel: "border-sky-200/60 bg-[#c0d8f0]",
    wheelCenter: "border-sky-200/50 bg-[#d8e8f8]",
    label: "text-sky-800/70",
  },
  green: {
    body: "border-emerald-200/60 bg-[#a8d4a8]",
    wheel: "border-emerald-200/60 bg-[#c0e0c0]",
    wheelCenter: "border-emerald-200/50 bg-[#d8f0d8]",
    label: "text-emerald-800/70",
  },
  red: {
    body: "border-red-200/50 bg-[#e07070]",
    wheel: "border-red-200/50 bg-[#e88888]",
    wheelCenter: "border-red-200/40 bg-[#f0a0a0]",
    label: "text-red-900/70",
  },
} as const;

export type IpodFrameVariant = keyof typeof ipodFrameVariants;

const FRAME_RADIUS = "1.35rem";
const FRAME_PADDING = "0.625rem";
const SCREEN_RADIUS = `calc(${FRAME_RADIUS} - ${FRAME_PADDING})`;

type IpodMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: IpodFrameVariant;
    children?: ReactNode;
  }
>;

function ClickWheel({
  frame,
}: {
  frame: (typeof ipodFrameVariants)[IpodFrameVariant];
}) {
  return (
    <div
      className={cn(
        "relative flex h-22 w-22 items-center justify-center rounded-full border",
        frame.wheel,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "absolute top-2 left-1/2 -translate-x-1/2 text-[6px] font-semibold tracking-wide uppercase",
          frame.label,
        )}
      >
        Menu
      </span>
      <span
        className={cn(
          "absolute top-1/2 left-2 -translate-y-1/2 text-[7px] font-bold",
          frame.label,
        )}
      >
        {"\u25C0\u25C0"}
      </span>
      <span
        className={cn(
          "absolute top-1/2 right-2 -translate-y-1/2 text-[7px] font-bold",
          frame.label,
        )}
      >
        {"\u25B6\u25B6"}
      </span>
      <span
        className={cn(
          "absolute bottom-2 left-1/2 -translate-x-1/2 text-[7px] font-bold",
          frame.label,
        )}
      >
        {"\u25B6\u275A"}
      </span>

      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full border",
          frame.wheelCenter,
        )}
      />
    </div>
  );
}

export const IpodMockupCard = forwardRef<HTMLDivElement, IpodMockupCardProps>(
  ({ className, children, variant = "silver", ...props }, ref) => {
    const frame = ipodFrameVariants[variant];

    return (
      <div
        ref={ref}
        data-slot="ipod-mockup-card"
        data-variant={variant}
        className={cn(
          "flex w-55 flex-col border p-2.5 pb-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.07)]",
          frame.body,
          className,
        )}
        style={{ borderRadius: FRAME_RADIUS }}
        {...props}
      >
        <div
          className="relative aspect-[1.32] w-full overflow-hidden bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
          style={{ borderRadius: SCREEN_RADIUS }}
        >
          {children}
        </div>

        <div className="mt-3 flex justify-center">
          <ClickWheel frame={frame} />
        </div>
      </div>
    );
  },
);

IpodMockupCard.displayName = "IpodMockupCard";
