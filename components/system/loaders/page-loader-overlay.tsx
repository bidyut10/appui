import { Loader } from "lucide-react";

import { cn } from "@/lib/cn";

type PageLoaderOverlayProps = Readonly<{
  /**
   * `light` — white page + black spinner (marketing / docs).
   * `dark` — black page + white spinner (dashboard only).
   * Defaults to `light` so route `loading.tsx` files stay correct on white pages.
   */
  variant?: "light" | "dark";
}>;

/** Full-screen page loader for route transitions and dashboard fetches. */
export function PageLoaderOverlay({
  variant = "light",
}: PageLoaderOverlayProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        isDark ? "bg-neutral-950" : "bg-white",
      )}
      aria-live="polite"
      aria-busy="true"
      role="status"
      aria-label="Loading"
    >
      <Loader
        size={28}
        color={isDark ? "#ffffff" : "#171717"}
        className="animate-spin"
      />
    </div>
  );
}
