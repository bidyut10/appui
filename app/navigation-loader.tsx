"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { PageLoaderOverlay } from "@/components/loaders/page-loader-overlay";

const SHOW_AFTER_MS = 300;

function isShowcaseRoute(path: string): boolean {
  return (
    path === "/" || path === "/components" || path.startsWith("/components/")
  );
}

export function NavigationLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const pendingRef = useRef(false);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearShowTimer = useCallback(() => {
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current);
      showTimerRef.current = null;
    }
  }, []);

  const startNavigation = useCallback(() => {
    pendingRef.current = true;
    clearShowTimer();

    showTimerRef.current = setTimeout(() => {
      if (pendingRef.current) {
        setVisible(true);
      }
    }, SHOW_AFTER_MS);
  }, [clearShowTimer]);

  const finishNavigation = useCallback(() => {
    pendingRef.current = false;
    clearShowTimer();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(false);
      });
    });
  }, [clearShowTimer]);

  useEffect(() => {
    finishNavigation();
  }, [pathname, finishNavigation]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor?.href || anchor.target === "_blank") return;

      const next = new URL(anchor.href);
      if (next.origin !== window.location.origin) return;

      const from = window.location.pathname;
      const to = next.pathname;

      if (from === to) return;
      if (!isShowcaseRoute(from) || !isShowcaseRoute(to)) return;

      startNavigation();
    };

    const onPopState = () => {
      if (isShowcaseRoute(window.location.pathname)) {
        startNavigation();
      }
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
      clearShowTimer();
    };
  }, [clearShowTimer, startNavigation]);

  if (!visible) return null;

  return <PageLoaderOverlay />;
}
