import React from "react";

export const Box = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="flex h-112.5 flex-1 items-center justify-center overflow-hidden border border-neutral-100 p-4"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      <div className="flex w-full max-w-full items-center justify-center *:max-w-full">
        {children}
      </div>
    </div>
  );
};
