"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { saveShowcaseScroll } from "@/lib/showcase/scroll-restoration";

type SaveScrollLinkProps = ComponentProps<typeof Link>;

export function SaveScrollLink({ onClick, ...props }: SaveScrollLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        saveShowcaseScroll();
        onClick?.(event);
      }}
    />
  );
}
