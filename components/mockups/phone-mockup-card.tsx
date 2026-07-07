import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

const phoneFrameVariants = {
  purple: {
    frame: "bg-[#4a4254]",
    button: "bg-[#423d4d]",
  },
  orange: {
    frame: "bg-[#d4845a]",
    button: "bg-[#cc7a50]",
  },
  white: {
    frame: "bg-[#e4e4e8]",
    button: "bg-[#d8d8de]",
  },
  titanium: {
    frame: "bg-[#9a9590]",
    button: "bg-[#8f8a85]",
  },
  cherry: {
    frame: "bg-[#d49aa8]",
    button: "bg-[#ca90a0]",
  },
} as const;

type PhoneFrameVariant = keyof typeof phoneFrameVariants;

const PHONE_ASPECT = 70.6 / 146.6;

type PhoneMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    variant?: PhoneFrameVariant;
    // Fraction of the frame height to show (0–1). Default 1 = full phone. Crops from the top.
    visibleRatio?: number;
    // Show or hide the Dynamic Island and camera dot.
    showDynamicIsland?: boolean;
  }
>;

const buttonClass = (color: string) =>
  cn("absolute w-[2px] rounded-l-sm", color);

function PhoneSideButtons({
  frame,
}: Readonly<{
  frame: (typeof phoneFrameVariants)[PhoneFrameVariant];
}>) {
  return (
    <>
      {/* Mute switch */}
      <div
        className={cn(
          buttonClass(frame.button),
          "-left-[2px] top-[15.5%] h-[3.2%]",
        )}
        aria-hidden="true"
      />
      {/* Volume up */}
      <div
        className={cn(buttonClass(frame.button), "-left-[2px] top-[21%] h-[7.2%]")}
        aria-hidden="true"
      />
      {/* Volume down */}
      <div
        className={cn(
          buttonClass(frame.button),
          "-left-[2px] top-[30.5%] h-[7.2%]",
        )}
        aria-hidden="true"
      />
      {/* Power button */}
      <div
        className={cn(
          buttonClass(frame.button),
          "-right-[2px] top-[23%] h-[11.5%] rounded-l-none rounded-r-sm",
        )}
        aria-hidden="true"
      />
    </>
  );
}

function PhoneScreen({
  children,
  showDynamicIsland,
}: Readonly<{
  children: ReactNode;
  showDynamicIsland: boolean;
}>) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black">
      {/* Screen — thin ~4px bezel on all sides */}
      <div className="absolute inset-[3.5px] overflow-hidden rounded-[2.3rem] bg-white">
        <div className="relative h-full w-full">{children}</div>

        {showDynamicIsland ? (
          <div
            className="absolute top-[9px] left-1/2 z-20 h-[20px] w-[66px] -translate-x-1/2 rounded-full bg-black"
            aria-hidden="true"
          >
            <div
              className="absolute top-1/2 right-[5px] block h-[8px] w-[8px] shrink-0 -translate-y-1/2 rounded-full bg-[#6a90c8]/20"
              aria-hidden="true"
            />
          </div>
        ) : null}

        {/* Home indicator */}
        <div
          className="absolute bottom-[5.5px] left-1/2 z-20 h-[3px] w-[32%] -translate-x-1/2 rounded-full bg-black/20"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

// iPhone proportions: 70.6 x 146.6 mm — thin uniform bezels
export const PhoneMockupCard = forwardRef<HTMLDivElement, PhoneMockupCardProps>(
  (
    {
      className,
      children,
      variant = "purple",
      visibleRatio = 1,
      showDynamicIsland = true,
      style,
      ...props
    },
    ref,
  ) => {
    const frame = phoneFrameVariants[variant];
    const ratio = Math.min(1, Math.max(0, visibleRatio));
    const isCropped = ratio < 1;

    const phoneFrameClassName = cn(
      "relative w-[256px] rounded-[2.6rem] p-[2px]",
      frame.frame,
    );

    const fullPhoneFrameClassName = cn(
      phoneFrameClassName,
      "aspect-[70.6/146.6]",
    );

    if (!isCropped) {
      return (
        <div
          ref={ref}
          data-slot="phone-mockup-card"
          data-variant={variant}
          className={cn(fullPhoneFrameClassName, className)}
          style={style}
          {...props}
        >
          <PhoneSideButtons frame={frame} />
          <PhoneScreen showDynamicIsland={showDynamicIsland}>
            {children}
          </PhoneScreen>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        data-slot="phone-mockup-card"
        data-variant={variant}
        data-visible-ratio={ratio}
        className={cn("relative w-[260px] overflow-hidden", className)}
        style={{
          aspectRatio: PHONE_ASPECT / ratio,
          ...style,
        }}
        {...props}
      >
        {/* Frame + screen — clipped from top */}
        <div className="absolute inset-0 left-[2px] right-[2px] overflow-hidden">
          <div
            className={cn(phoneFrameClassName, "w-full shrink-0")}
            style={{ height: `${100 / ratio}%` }}
          >
            <PhoneScreen showDynamicIsland={showDynamicIsland}>
              {children}
            </PhoneScreen>
          </div>
        </div>

        {/* Side buttons — outside clip layer, full phone height */}
        <div
          className="pointer-events-none absolute top-0 left-[2px] z-10 w-[256px] shrink-0"
          style={{ height: `${100 / ratio}%` }}
        >
          <PhoneSideButtons frame={frame} />
        </div>
      </div>
    );
  },
);

PhoneMockupCard.displayName = "PhoneMockupCard";
