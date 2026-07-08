import type { CSSProperties } from "react";

export const BOX_PATTERN: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
  backgroundSize: "12px 12px",
};

export const PHONE_PANEL =
  "flex w-full min-[1300px]:flex-1 items-end justify-center rounded-2xl overflow-hidden border border-neutral-100 py-10 md:py-14";