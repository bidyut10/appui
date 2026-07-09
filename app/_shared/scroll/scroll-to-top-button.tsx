"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp, MoveUp } from "lucide-react";

const SCROLL_THRESHOLD = 320;

export function ScrollToTopButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

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
      className={`group fixed right-5 bottom-5 z-40 flex h-10 w-10 items-center justify-center bg-neutral-800 text-white shadow-lg rounded-full shadow-neutral-600/30 cursor-pointer transition-[background-color,box-shadow,opacity,transform] duration-300 hover:bg-neutral-900 hover:shadow-neutral-700/35 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-neutral-600 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="relative flex size-full items-center justify-center">
        <ChevronUp
          size={18}
          strokeWidth={2}
          className="absolute transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:scale-95 group-hover:opacity-0"
        />
        <MoveUp
          size={14}
          strokeWidth={2}
          className="absolute scale-95 translate-y-0.5 opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
        />
      </span>
    </button>
  );
}
