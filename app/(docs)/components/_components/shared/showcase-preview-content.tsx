import type { ReactNode } from "react";

type ShowcasePreviewContentProps = Readonly<{
  children: ReactNode;
  variant?: "default" | "input" | "form";
  fullBleed?: boolean;
}>;

export function ShowcasePreviewContent({
  children,
  variant = "default",
  fullBleed = false,
}: ShowcasePreviewContentProps) {
  if (fullBleed) {
    return (
      <div className="relative z-0 flex h-full min-h-96 w-full items-center justify-center md:min-h-120">
        {children}
      </div>
    );
  }
  if (variant === "input") {
    return (
      <div className="relative z-0 flex w-full min-w-0 items-center justify-center px-6 py-2 md:px-12 md:py-4">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    );
  }

  if (variant === "form") {
    return (
      <div className="relative z-0 flex w-full min-w-0 items-center justify-center px-6 py-2 md:px-12 md:py-4">
        <div className="w-full max-w-md">{children}</div>
      </div>
    );
  }

  return (
    <div className="relative z-0 flex w-full min-w-0 items-center justify-center *:max-w-full *:min-w-0">
      {children}
    </div>
  );
}
