import {
    forwardRef,
    type ComponentPropsWithoutRef,
    type ReactNode,
  } from "react";
  
  import { cn } from "@/lib/cn";
  
  const ipodFrameVariants = {
    silver: {
      body: "bg-linear-to-b from-[#ececef] to-[#d4d4d8]",
      ring: "ring-black/10",
      wheel: "bg-linear-to-b from-[#f4f4f6] to-[#d8d8de]",
      wheelRing: "ring-black/10",
      label: "text-neutral-500",
    },
    black: {
      body: "bg-linear-to-b from-[#3a3a3e] to-[#1c1c1f]",
      ring: "ring-white/10",
      wheel: "bg-linear-to-b from-[#4a4a4f] to-[#2a2a2e]",
      wheelRing: "ring-white/10",
      label: "text-neutral-400",
    },
    white: {
      body: "bg-linear-to-b from-[#fafafa] to-[#e8e8ec]",
      ring: "ring-black/8",
      wheel: "bg-linear-to-b from-[#ffffff] to-[#e4e4e8]",
      wheelRing: "ring-black/8",
      label: "text-neutral-500",
    },
    pink: {
      body: "bg-linear-to-b from-[#f5c4d0] to-[#e8a0b2]",
      ring: "ring-black/8",
      wheel: "bg-linear-to-b from-[#f8d2dc] to-[#dea0b0]",
      wheelRing: "ring-black/8",
      label: "text-rose-700/70",
    },
    blue: {
      body: "bg-linear-to-b from-[#b8d4f0] to-[#8eb8dc]",
      ring: "ring-black/8",
      wheel: "bg-linear-to-b from-[#c8dff5] to-[#9ec0e0]",
      wheelRing: "ring-black/8",
      label: "text-sky-800/70",
    },
    green: {
      body: "bg-linear-to-b from-[#b8dcb8] to-[#8ec48e]",
      ring: "ring-black/8",
      wheel: "bg-linear-to-b from-[#c8e8c8] to-[#9ed09e]",
      wheelRing: "ring-black/8",
      label: "text-emerald-800/70",
    },
    red: {
      body: "bg-linear-to-b from-[#e87878] to-[#d05050]",
      ring: "ring-black/8",
      wheel: "bg-linear-to-b from-[#f08888] to-[#d86060]",
      wheelRing: "ring-black/8",
      label: "text-red-900/70",
    },
  } as const;
  
  export type IpodFrameVariant = keyof typeof ipodFrameVariants;
  
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
          "relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full ring-1",
          frame.wheel,
          frame.wheelRing,
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
            "flex h-8 w-8 items-center justify-center rounded-full bg-white/35 ring-1",
            frame.wheelRing,
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
            "flex w-[220px] flex-col rounded-[1.35rem] p-2.5 pb-3.5 shadow-lg ring-1",
            frame.body,
            frame.ring,
            className,
          )}
          {...props}
        >
          <div className="relative aspect-[1.32] w-full overflow-hidden rounded-md bg-black ring-1 ring-black/25">
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
  