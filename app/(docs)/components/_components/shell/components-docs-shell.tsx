import { Suspense, type ReactNode } from "react";

import type { ShowcaseNavCategoryGroup } from "@/lib/showcase";

import { DocsShellClient } from "./docs-shell-client";

type ComponentsDocsShellProps = Readonly<{
  categories: ShowcaseNavCategoryGroup[];
  children: ReactNode;
}>;

function DocsShellFallback() {
  return (
    <div className="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-white">
      <div className="h-14 shrink-0 border-b border-neutral-200" />
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-80 shrink-0 border-r border-neutral-100 bg-white md:flex" />
        <div className="min-h-0 min-w-0 flex-1" />
      </div>
    </div>
  );
}

export function ComponentsDocsShell({
  categories,
  children,
}: ComponentsDocsShellProps) {
  return (
    <Suspense fallback={<DocsShellFallback />}>
      <DocsShellClient categories={categories}>{children}</DocsShellClient>
    </Suspense>
  );
}
