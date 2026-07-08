"use client";

import { Suspense, useEffect, useState, type ReactNode } from "react";

import type { ShowcaseCategoryGroup } from "@/lib/showcase";

import { DocsHeader } from "./docs-header";
import { DocsShellProvider } from "./docs-shell-context";
import { DocsSidebar } from "./docs-sidebar";

type DocsShellClientProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  children: ReactNode;
}>;

function DocsSidebarFallback() {
  return (
    <aside className="hidden w-80 shrink-0 border-r border-neutral-100 bg-white md:flex" />
  );
}

export function DocsShellClient({ categories, children }: DocsShellClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isSidebarOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    }

    globalThis.addEventListener("keydown", onKeyDown);
    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, [isSidebarOpen]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const shellValue = {
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen((open) => !open),
    closeSidebar: () => setIsSidebarOpen(false),
  };

  return (
    <DocsShellProvider value={shellValue}>
      <div className="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-white selection:bg-neutral-800 selection:text-white">
        <DocsHeader />
        <div className="flex min-h-0 flex-1">
          <Suspense fallback={<DocsSidebarFallback />}>
            <DocsSidebar categories={categories} />
          </Suspense>
          <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
        </div>
      </div>
    </DocsShellProvider>
  );
}
