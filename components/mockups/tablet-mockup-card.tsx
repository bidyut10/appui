import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

// Colors pulled from Apple's actual current iPad lineup (Air, mini, base
// iPad, and Pro) rather than reused iPhone finishes.
const ipadFrameVariants = {
  spaceGray: {
    frame: "bg-linear-to-b from-[#7a7a7f] to-[#525256]",
    button: "bg-[#3d3d41]",
  },
  spaceBlack: {
    frame: "bg-linear-to-b from-[#45454a] to-[#232326]",
    button: "bg-[#141416]",
  },
  silver: {
    frame: "bg-linear-to-b from-[#f4f4f6] to-[#dcdce0]",
    button: "bg-[#c9c9cd]",
  },
  starlight: {
    frame: "bg-linear-to-b from-[#f4ecdc] to-[#e3d7bd]",
    button: "bg-[#cfc19f]",
  },
  blue: {
    frame: "bg-linear-to-b from-[#b3d0e6] to-[#87afcf]",
    button: "bg-[#6c93b3]",
  },
  purple: {
    frame: "bg-linear-to-b from-[#d0c0e0] to-[#ac99c5]",
    button: "bg-[#8f7aa8]",
  },
  pink: {
    frame: "bg-linear-to-b from-[#f2d2d7] to-[#e1b1b9]",
    button: "bg-[#c88f98]",
  },
  yellow: {
    frame: "bg-linear-to-b from-[#f6e29a] to-[#ecc95d]",
    button: "bg-[#d1ab3d]",
  },
} as const;

// Exported so consumers (e.g. a color-picker page) can type against it.
export type IpadFrameVariant = keyof typeof ipadFrameVariants;

// iPad Air 11" proportions: 247.6 x 178.5 mm, portrait width/height.
const IPAD_ASPECT = 178.5 / 247.6;

type IpadMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: IpadFrameVariant;
    // Fraction of the frame height to show (0–1). Default 1 = full iPad. Crops from the top.
    visibleRatio?: number;
    // Show or hide the front camera dot.
    showCamera?: boolean;
  }
>;

function IpadTopButtons({
  frame,
}: Readonly<{
  frame: (typeof ipadFrameVariants)[IpadFrameVariant];
}>) {
  return (
    <>
      {/* Volume up */}
      <div
        className={cn(
          "absolute -top-[3px] left-[13%] h-[3px] w-[9%] rounded-t-[2px]",
          frame.button,
        )}
        aria-hidden="true"
      />
      {/* Volume down */}
      <div
        className={cn(
          "absolute -top-[3px] left-[24%] h-[3px] w-[9%] rounded-t-[2px]",
          frame.button,
        )}
        aria-hidden="true"
      />
      {/* Power button */}
      <div
        className={cn(
          "absolute -top-[3px] right-[16%] h-[3px] w-[16%] rounded-t-[2px]",
          frame.button,
        )}
        aria-hidden="true"
      />
    </>
  );
}

function IpadScreen({
  children,
  showCamera,
}: Readonly<{
  children: ReactNode;
  showCamera: boolean;
}>) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-black">
      {/* Screen — uniform bezel, thicker and flatter than the iPhone's */}
      <div className="absolute inset-[7px] overflow-hidden rounded-[1.5rem] bg-white">
        <div className="relative h-full w-full">{children}</div>

        {/* Subtle glass reflection for a more finished, on-camera look */}
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/0 via-white/[0.06] to-white/0"
          aria-hidden="true"
        />

        {showCamera ? (
          <div
            className="absolute top-[10px] left-1/2 z-20 flex h-[7px] w-[7px] -translate-x-1/2 items-center justify-center rounded-full bg-[#151517] ring-[3px] ring-black/5"
            aria-hidden="true"
          >
            <div className="h-[2.5px] w-[2.5px] rounded-full bg-[#3a4a5c]" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

// iPad, at last-mockup scale: thicker frame, metallic gradient, top-edge
// power + volume buttons, no notch.
export const IpadMockupCard = forwardRef<HTMLDivElement, IpadMockupCardProps>(
  (
    {
      className,
      children,
      variant = "silver",
      visibleRatio = 1,
      showCamera = true,
      style,
      ...props
    },
    ref,
  ) => {
    const frame = ipadFrameVariants[variant];
    const ratio = Math.min(1, Math.max(0, visibleRatio));
    const isCropped = ratio < 1;

    const ipadFrameClassName = cn(
      "relative w-[320px] rounded-[2.1rem] p-[4px] shadow-2xl shadow-black/25 ring-1 ring-black/10 md:w-[380px]",
      frame.frame,
    );

    const fullIpadFrameClassName = cn(
      ipadFrameClassName,
      "aspect-[178.5/247.6]",
    );

    if (!isCropped) {
      return (
        <div
          ref={ref}
          data-slot="ipad-mockup-card"
          data-variant={variant}
          className={cn(fullIpadFrameClassName, className)}
          style={style}
          {...props}
        >
          <IpadTopButtons frame={frame} />
          <IpadScreen showCamera={showCamera}>{children}</IpadScreen>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        data-slot="ipad-mockup-card"
        data-variant={variant}
        data-visible-ratio={ratio}
        className={cn(
          "relative w-[324px] overflow-hidden md:w-[384px]",
          className,
        )}
        style={{
          aspectRatio: IPAD_ASPECT / ratio,
          ...style,
        }}
        {...props}
      >
        {/* Frame + screen — clipped from top */}
        <div className="absolute inset-0 right-[4px] left-[4px] overflow-hidden">
          <div
            className={cn(ipadFrameClassName, "w-full shrink-0")}
            style={{ height: `${100 / ratio}%` }}
          >
            <IpadScreen showCamera={showCamera}>{children}</IpadScreen>
          </div>
        </div>

        {/* Top buttons — outside clip layer, full iPad height */}
        <div
          className="pointer-events-none absolute top-0 left-[4px] z-10 w-[320px] shrink-0 md:w-[380px]"
          style={{ height: `${100 / ratio}%` }}
        >
          <IpadTopButtons frame={frame} />
        </div>
      </div>
    );
  },
);

IpadMockupCard.displayName = "IpadMockupCard";
