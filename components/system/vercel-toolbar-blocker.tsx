"use client";

import { useEffect } from "react";

const TOOLBAR_SELECTORS = [
  'button[aria-label="Vercel Toolbar"]',
  "[data-vercel-toolbar]",
  'iframe[src*="vercel.live"]',
  'script[src*="vercel.live"]',
  '[id*="vercel-toolbar" i]',
  '[class*="vercel-toolbar" i]',
];

function removeToolbarNode(node: Element) {
  const toolbarRoot =
    node.closest("[data-vercel-toolbar]") ??
    node.closest('[data-testid*="toolbar" i]') ??
    node.parentElement;

  (toolbarRoot ?? node).remove();
}

function removeVercelToolbar() {
  for (const selector of TOOLBAR_SELECTORS) {
    for (const node of document.querySelectorAll(selector)) {
      removeToolbarNode(node);
    }
  }
}

export function VercelToolbarBlocker() {
  useEffect(() => {
    removeVercelToolbar();

    const observer = new MutationObserver(() => removeVercelToolbar());
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
