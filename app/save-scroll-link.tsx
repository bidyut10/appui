"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { trackComponentClick } from "@/lib/analytics/client";
import { saveShowcaseScroll } from "@/lib/showcase/scroll-restoration";

type SaveScrollLinkProps = ComponentProps<typeof Link>;

function slugFromHref(href: SaveScrollLinkProps["href"]): string | null {
  if (typeof href !== "string") return null;
  const match = /^\/components\/([a-z0-9-]+)$/.exec(href);
  return match?.[1] ?? null;
}

export function SaveScrollLink({ href, onClick, ...props }: SaveScrollLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        saveShowcaseScroll();

        const slug = slugFromHref(href);
        if (slug && typeof globalThis !== "undefined") {
          trackComponentClick(globalThis.location.pathname, slug);
        }

        onClick?.(event);
      }}
    />
  );
}
