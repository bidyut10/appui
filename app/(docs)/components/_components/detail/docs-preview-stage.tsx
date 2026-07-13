import type { ReactNode } from "react";

import { BOX_PATTERN } from "@/lib/shared";

import { ShowcasePreviewContent } from "../shared/showcase-preview-content";

type DocsPreviewStageProps = Readonly<{
  children: ReactNode;
  className?: string;
  variant?: "default" | "input" | "form";
}>;

export function DocsPreviewStage({
  children,
  className,
  variant = "default",
}: DocsPreviewStageProps) {
  return (
    <div
      className={[
        "relative flex min-h-96 items-center justify-center overflow-hidden rounded-xl border border-neutral-100 p-8 md:min-h-120 md:p-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={BOX_PATTERN}
    >
      <ShowcasePreviewContent variant={variant}>{children}</ShowcasePreviewContent>
    </div>
  );
}
