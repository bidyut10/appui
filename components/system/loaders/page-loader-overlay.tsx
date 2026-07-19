import { Loader } from "lucide-react";

import { cn } from "@/lib/cn";

type PageLoaderOverlayProps = Readonly<{
  /** `dark` = black screen + white spinner; `light` = white screen + black spinner. */
  variant?: "dark" | "light";
}>;

// Full-screen loader used during route transitions and dashboard fetches.
export function PageLoaderOverlay({
  variant = "dark",
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
