import React from "react";

export const Box = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="relative flex min-h-120 min-w-0 flex-1 items-center justify-center overflow-hidden border border-neutral-100 p-5"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* Crosshair border overlay — sits on top without blocking interaction with children */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
        <span className="absolute top-0 left-0 h-3 w-px bg-neutral-300" />
        <span className="absolute top-0 left-0 h-px w-3 bg-neutral-300" />
        <span className="absolute top-0 right-0 h-3 w-px bg-neutral-300" />
        <span className="absolute top-0 right-0 h-px w-3 bg-neutral-300" />
        <span className="absolute bottom-0 left-0 h-3 w-px bg-neutral-300" />
        <span className="absolute bottom-0 left-0 h-px w-3 bg-neutral-300" />
        <span className="absolute right-0 bottom-0 h-3 w-px bg-neutral-300" />
        <span className="absolute right-0 bottom-0 h-px w-3 bg-neutral-300" />
        <span className="absolute top-1/2 left-0 h-3 w-px -translate-y-1/2 bg-neutral-300" />
        <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-neutral-300" />
        <span className="absolute top-1/2 right-0 h-3 w-px -translate-y-1/2 bg-neutral-300" />
        <span className="absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-neutral-300" />
        <span className="absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-neutral-300" />
        <span className="absolute top-0 left-1/2 h-px w-3 -translate-x-1/2 bg-neutral-300" />
        <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-neutral-300" />
        <span className="absolute bottom-0 left-1/2 h-px w-3 -translate-x-1/2 bg-neutral-300" />
      </div>
      <div className="flex w-full min-w-0 items-center justify-center *:max-w-full *:min-w-0">
        {children}
      </div>
    </div>
  );
};
