"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";
import { Command } from "lucide-react";

function getComponentsSearchPath(pathname: string) {
  return pathname.startsWith("/components") ? "/components" : pathname;
}

function getSearchShortcutLabel() {
  if (typeof navigator === "undefined") return "Control K";

  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();
  const isApple =
    platform.includes("mac") ||
    platform.includes("iphone") ||
    platform.includes("ipad") ||
    userAgent.includes("mac os");

  return isApple ? "Command K" : "Control K";
}

function DocsSearchInput({ query }: Readonly<{ query: string }>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(query);
  const [shortcutLabel] = useState(getSearchShortcutLabel);

  useEffect(() => {
    const timer = globalThis.setTimeout(() => {
      const trimmed = value.trim();
      const current = query.trim();

      if (trimmed === current) return;

      const params = new URLSearchParams(searchParams.toString());
      if (trimmed) {
        params.set("q", trimmed);
        params.delete("category");
      } else {
        params.delete("q");
      }

      const nextQuery = params.toString();
      const base = getComponentsSearchPath(pathname);
      router.push(nextQuery ? `${base}?${nextQuery}` : base, { scroll: false });
    }, 250);

    return () => globalThis.clearTimeout(timer);
  }, [value, query, pathname, router, searchParams]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }

      if (
        event.key === "Escape" &&
        document.activeElement === inputRef.current
      ) {
        setValue("");
        inputRef.current?.blur();
      }
    }

    globalThis.addEventListener("keydown", onKeyDown);
    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <label className="relative block w-full md:max-w-sm">
      <span className="sr-only">Search components</span>
      <Search
        size={14}
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-rose-500"
        aria-hidden
      />
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search components…"
        className="w-full rounded-lg border border-neutral-100 bg-neutral-50/50 py-1.5 pr-3 pl-8 font-sans text-sm text-neutral-800 transition-colors outline-none placeholder:text-neutral-400 focus:border-rose-200 focus:bg-white md:pr-14"
      />
      <kbd
        aria-label={shortcutLabel}
        className="pointer-events-none absolute top-1/2 right-2.5 hidden -translate-y-1/2 items-center gap-0.5 rounded border border-neutral-100 bg-white px-1.5 py-0.5 font-mono text-[10px] text-neutral-400 md:inline-flex"
      >
        <Command size={10} aria-hidden className="text-neutral-400" />
        <span> + K</span>
      </kbd>
    </label>
  );
}

export function DocsSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return <DocsSearchInput key={query} query={query} />;
}
