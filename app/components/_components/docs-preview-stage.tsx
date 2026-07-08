import type { ReactNode } from "react";

import { BOX_PATTERN } from "@/app/_components/Pattern";

type DocsPreviewStageProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function DocsPreviewStage({ children, className }: DocsPreviewStageProps) {
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
      <div className="relative z-0 flex w-full min-w-0 items-center justify-center *:max-w-full *:min-w-0">
        {children}
      </div>
    </div>
  );
}
