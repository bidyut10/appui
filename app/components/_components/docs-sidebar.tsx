"use client";

import { X } from "lucide-react";

import type { ShowcaseCategoryGroup } from "@/lib/showcase";
import { cn } from "@/lib/cn";

import { DocsSidebarFooter } from "./docs-sidebar-footer";
import { DocsSidebarNav } from "./docs-sidebar-nav";
import { useDocsShell } from "./docs-shell-context";

type DocsSidebarProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
}>;

export function DocsSidebar({ categories }: DocsSidebarProps) {
  const shell = useDocsShell();
  const isOpen = shell?.isSidebarOpen ?? false;
  const closeSidebar = shell?.closeSidebar;

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeSidebar}
        className={cn(
          "fixed inset-0 z-40 bg-neutral-900/20 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[min(20rem,88vw)] shrink-0 flex-col border-r border-neutral-100 bg-white transition-transform duration-300 ease-out md:static md:z-auto md:flex md:w-80 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3 md:hidden">
          <p className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
            Menu
          </p>
          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close menu"
            className="inline-flex size-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            <X size={16} aria-hidden />
          </button>
        </div>

        <DocsSidebarNav categories={categories} onNavigate={closeSidebar} />
        <DocsSidebarFooter />
      </aside>
    </>
  );
}
