import type { CSSProperties } from "react";

export const BOX_PATTERN: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
  backgroundSize: "12px 12px",
};

export const GRID_PATTERN: CSSProperties = {
  backgroundColor: "#f7f7f7",
  backgroundImage: [
    "linear-gradient(168deg, #fefefe 0%, #f4f4f4 52%, #fafafa 100%)",
    "repeating-linear-gradient(0deg, transparent, transparent 21px, rgba(0,0,0,0.022) 21px, rgba(0,0,0,0.022) 22px)",
  ].join(", "),
  backgroundSize: "100% 100%, 100% 22px",
};

export const WATCH_STAGE_PATTERN: CSSProperties = {
  backgroundColor: "#fafafa",
  backgroundImage: "radial-gradient(circle, #e8e8e8 1px, transparent 1px)",
  backgroundSize: "12px 12px",
  backgroundRepeat: "repeat",
};

export const PHONE_PANEL =
  "flex w-full min-[1300px]:flex-1 items-end justify-center rounded-2xl overflow-hidden border border-neutral-100 py-10 md:py-14";
