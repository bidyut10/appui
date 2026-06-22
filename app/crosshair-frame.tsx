"use client";

import React from "react";

const CROSSHAIR_BORDER = {
  light: "border-neutral-300",
  dark: "border-neutral-600",
} as const;

type CrosshairTone = keyof typeof CROSSHAIR_BORDER;

const ARM = "h-3 w-3";

function Corner({
  className,
  borderClassName,
  verticalSide,
  horizontalSide,
}: Readonly<{
  className: string;
  borderClassName: string;
  verticalSide: "border-l" | "border-r";
  horizontalSide: "border-t" | "border-b";
}>) {
  return (
    <>
      <span
        className={`absolute block ${ARM} w-0 ${verticalSide} ${borderClassName} ${className}`}
      />
      <span
        className={`absolute block h-0 ${ARM} ${horizontalSide} ${borderClassName} ${className}`}
      />
    </>
  );
}

function EdgeCross({
  className,
  borderClassName,
  orientation,
}: Readonly<{
  className: string;
  borderClassName: string;
  orientation: "left" | "right" | "top" | "bottom";
}>) {
  if (orientation === "left" || orientation === "right") {
    const verticalSide = orientation === "left" ? "border-l" : "border-r";

    return (
      <>
        <span
          className={`absolute block ${ARM} w-0 -mt-1.5 ${verticalSide} ${borderClassName} ${className}`}
        />
        <span
          className={`absolute block h-0 ${ARM} -mt-px border-t ${borderClassName} ${className}`}
        />
      </>
    );
  }

  const horizontalSide = orientation === "top" ? "border-t" : "border-b";

  return (
    <>
      <span
        className={`absolute block ${ARM} w-0 -ml-px border-l ${borderClassName} ${className}`}
      />
      <span
        className={`absolute block h-0 ${ARM} -ml-1.5 ${horizontalSide} ${borderClassName} ${className}`}
      />
    </>
  );
}

export function CrosshairOverlay({
  tone = "light",
}: Readonly<{ tone?: CrosshairTone }>) {
  const border = CROSSHAIR_BORDER[tone];

  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
      <Corner
        className="top-0 left-0"
        borderClassName={border}
        verticalSide="border-l"
        horizontalSide="border-t"
      />
      <Corner
        className="top-0 right-0"
        borderClassName={border}
        verticalSide="border-r"
        horizontalSide="border-t"
      />
      <Corner
        className="bottom-0 left-0"
        borderClassName={border}
        verticalSide="border-l"
        horizontalSide="border-b"
      />
      <Corner
        className="right-0 bottom-0"
        borderClassName={border}
        verticalSide="border-r"
        horizontalSide="border-b"
      />
      <EdgeCross
        className="top-1/2 left-0"
        borderClassName={border}
        orientation="left"
      />
      <EdgeCross
        className="top-1/2 right-0"
        borderClassName={border}
        orientation="right"
      />
      <EdgeCross
        className="top-0 left-1/2"
        borderClassName={border}
        orientation="top"
      />
      <EdgeCross
        className="bottom-0 left-1/2"
        borderClassName={border}
        orientation="bottom"
      />
    </div>
  );
}

const BOX_PATTERN: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
  backgroundSize: "12px 12px",
};

type CrosshairFrameProps = Readonly<
  React.PropsWithChildren<{
    className?: string;
    tone?: CrosshairTone;
    pattern?: boolean;
    borderClassName?: string;
  }>
>;

export function CrosshairFrame({
  children,
  className = "",
  tone = "light",
  pattern = false,
  borderClassName = "border-neutral-100",
}: CrosshairFrameProps) {
  return (
    <div
      className={`relative overflow-hidden border ${borderClassName} ${className}`}
      style={pattern ? BOX_PATTERN : undefined}
    >
      <CrosshairOverlay tone={tone} />
      {children}
    </div>
  );
}
