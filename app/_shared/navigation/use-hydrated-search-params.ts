"use client";

import { useSyncExternalStore } from "react";
import { useSearchParams, type ReadonlyURLSearchParams } from "next/navigation";

function subscribe() {
  return () => {};
}

function getHydratedSnapshot() {
  return true;
}

function getHydratedServerSnapshot() {
  return false;
}

/**
 * Query params are unavailable in static HTML exports. Defer reading them until
 * after hydration so server HTML and the first client render stay in sync.
 */
export function useHydratedSearchParams(): ReadonlyURLSearchParams | null {
  const searchParams = useSearchParams();
  const hydrated = useSyncExternalStore(
    subscribe,
    getHydratedSnapshot,
    getHydratedServerSnapshot,
  );

  return hydrated ? searchParams : null;
}

export function getHydratedSearchParam(
  searchParams: ReadonlyURLSearchParams | null,
  key: string,
): string | null {
  return searchParams?.get(key) ?? null;
}
