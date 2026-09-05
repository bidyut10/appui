import type { CSSProperties, ReactNode } from "react";

import { BOX_PATTERN } from "@/lib/shared";
import { cn } from "@/lib/cn";

import { ShowcasePreviewContent } from "../shared/showcase-preview-content";

type DocsPreviewStageProps = Readonly<{
  children: ReactNode;
  className?: string;
  variant?: "default" | "input" | "form";
  fullBleed?: boolean;
  flushPreview?: boolean;
  backdropImage?: string;
}>;

export function DocsPreviewStage({
  children,
  className,
  variant = "default",
  fullBleed = false,
  flushPreview = false,
  backdropImage,
}: DocsPreviewStageProps) {
  const stageStyle: CSSProperties | undefined = backdropImage
    ? {
        backgroundImage: `url(${backdropImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : fullBleed
      ? undefined
      : BOX_PATTERN;

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        flushPreview
          ? "min-h-96 bg-transparent p-0 md:min-h-120"
          : cn(
              "rounded-xl border border-neutral-100",
              fullBleed
                ? "min-h-96 bg-black p-0 md:min-h-120"
                : "min-h-96 items-center justify-center p-8 md:min-h-120 md:p-12",
              backdropImage && "items-center justify-center p-8 md:p-12",
            ),
        className,
      )}
      style={stageStyle}
    >
      <ShowcasePreviewContent variant={variant} fullBleed={fullBleed}>
        {children}
      </ShowcasePreviewContent>
    </div>
  );
}
