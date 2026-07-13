import type { ReactNode } from "react";

type ShowcasePreviewContentProps = Readonly<{
  children: ReactNode;
  variant?: "default" | "input" | "form";
}>;

export function ShowcasePreviewContent({
  children,
  variant = "default",
}: ShowcasePreviewContentProps) {
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
