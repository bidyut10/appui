"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ChevronUp } from "@/icons/actions/chevron-up";

const SCROLL_THRESHOLD = 320;

export function ScrollToTopButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (!isHome) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 bottom-5 z-40 flex h-10 w-10 items-center justify-center bg-cyan-200 text-black shadow-lg shadow-cyan-600/30 cursor-pointer transition-all duration-300 hover:bg-cyan-300 hover:shadow-cyan-700/35 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-cyan-600 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronUp size={18} color="currentColor" />
    </button>
  );
}
