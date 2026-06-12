import React from "react";

export const Box = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="flex min-h-[280px] flex-1 items-center justify-center overflow-auto border border-neutral-100 p-3 sm:min-h-[380px] sm:p-4 lg:h-[450px] lg:min-h-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      <div className="flex w-full max-w-full items-center justify-center [&>*]:max-w-full">
        {children}
      </div>
    </div>
  );
};
