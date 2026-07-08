import { Suspense, type ReactNode } from "react";

import type { ShowcaseCategoryGroup } from "@/lib/showcase";

import { DocsHeader } from "./docs-header";
import { DocsSidebar } from "./docs-sidebar";

type ComponentsDocsShellProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  children: ReactNode;
}>;

export function ComponentsDocsShell({
  categories,
  children,
}: ComponentsDocsShellProps) {
  return (
    <div className="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-white selection:bg-neutral-800 selection:text-white">
      <DocsHeader />
      <div className="flex min-h-0 flex-1">
        <Suspense fallback={<aside className="hidden w-60 shrink-0 border-r border-neutral-100 bg-white md:block" />}>
          <DocsSidebar categories={categories} />
        </Suspense>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
