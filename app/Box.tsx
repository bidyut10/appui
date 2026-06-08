import React from "react";

export const Box = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="flex h-[450px] flex-1 items-center justify-center border border-neutral-100"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      {children}
    </div>
  );
};
