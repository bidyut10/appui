"use client";

import { useEffect } from "react";

import { consumeShowcaseScroll } from "@/lib/showcase/scroll-restoration";

export function ShowcaseScrollRestoration() {
  useEffect(() => {
    const y = consumeShowcaseScroll();
    if (y === null) return;

    requestAnimationFrame(() => {
      window.scrollTo({ top: y, behavior: "instant" });
    });
  }, []);

  return null;
}
