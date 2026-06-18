import React from "react";

const CROSSHAIR_LINE = {
  light: "bg-neutral-300",
  dark: "bg-neutral-600",
} as const;

type CrosshairTone = keyof typeof CROSSHAIR_LINE;

export function CrosshairOverlay({
  tone = "light",
}: Readonly<{ tone?: CrosshairTone }>) {
  const line = CROSSHAIR_LINE[tone];

  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
      <span className={`absolute top-0 left-0 h-3 w-px ${line}`} />
      <span className={`absolute top-0 left-0 h-px w-3 ${line}`} />
      <span className={`absolute top-0 right-0 h-3 w-px ${line}`} />
      <span className={`absolute top-0 right-0 h-px w-3 ${line}`} />
      <span className={`absolute bottom-0 left-0 h-3 w-px ${line}`} />
      <span className={`absolute bottom-0 left-0 h-px w-3 ${line}`} />
      <span className={`absolute right-0 bottom-0 h-3 w-px ${line}`} />
      <span className={`absolute right-0 bottom-0 h-px w-3 ${line}`} />
      <span
        className={`absolute top-1/2 left-0 h-3 w-px -translate-y-1/2 ${line}`}
      />
      <span
        className={`absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 ${line}`}
      />
      <span
        className={`absolute top-1/2 right-0 h-3 w-px -translate-y-1/2 ${line}`}
      />
      <span
        className={`absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 ${line}`}
      />
      <span
        className={`absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 ${line}`}
      />
      <span
        className={`absolute top-0 left-1/2 h-px w-3 -translate-x-1/2 ${line}`}
      />
      <span
        className={`absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 ${line}`}
      />
      <span
        className={`absolute bottom-0 left-1/2 h-px w-3 -translate-x-1/2 ${line}`}
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
