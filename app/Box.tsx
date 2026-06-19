import Link from "next/link";
import React from "react";

import { CrosshairOverlay } from "@/app/crosshair-frame";
import { ArrowRight } from "@/icons/actions/arrow-right";

const BOX_PATTERN: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
  backgroundSize: "12px 12px",
};

type BoxProps = Readonly<
  React.PropsWithChildren<{
    detailHref?: string;
  }>
>;

export const Box = ({ children, detailHref }: BoxProps) => {
  return (
    <div
      className="relative flex min-h-120 min-w-0 flex-1 items-center justify-center overflow-hidden border border-neutral-100 p-5"
      style={BOX_PATTERN}
    >
      {detailHref ? (
        <Link
          href={detailHref}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center border border-neutral-200 bg-white text-neutral-500 transition-colors hover:text-neutral-900"
          aria-label="View component details"
        >
          <ArrowRight size={16} className="-rotate-45" />
        </Link>
      ) : null}

      <CrosshairOverlay tone="light" />
      <div className="relative z-0 flex w-full min-w-0 items-center justify-center *:max-w-full *:min-w-0">
        {children}
      </div>
    </div>
  );
};
