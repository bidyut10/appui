export const SHOWCASE_SCROLL_KEY = "showcase-scroll-y";

export function saveShowcaseScroll(): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SHOWCASE_SCROLL_KEY, String(window.scrollY));
}

export function consumeShowcaseScroll(): number | null {
  if (typeof window === "undefined") return null;

  const raw = sessionStorage.getItem(SHOWCASE_SCROLL_KEY);
  sessionStorage.removeItem(SHOWCASE_SCROLL_KEY);
  if (raw === null) return null;

  const y = Number(raw);
  return Number.isFinite(y) ? y : null;
}
