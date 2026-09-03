import type { CSSProperties, ReactNode } from "react";

import {
  BOX_PATTERN,
  GRID_PATTERN,
  WATCH_STAGE_PATTERN,
} from "@/lib/shared/pattern";

type MockupStagePattern = "diagonal" | "grid" | "watch";

const STAGE_PATTERNS: Record<MockupStagePattern, CSSProperties> = {
  diagonal: BOX_PATTERN,
  grid: GRID_PATTERN,
  watch: WATCH_STAGE_PATTERN,
};

export function MockupStage({
  children,
  pattern = "diagonal",
}: Readonly<{
  children: ReactNode;
  pattern?: MockupStagePattern;
}>) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-2xl bg-neutral-50 px-4 py-12 md:py-14"
      style={STAGE_PATTERNS[pattern]}
    >
      {children}
    </div>
  );
}
