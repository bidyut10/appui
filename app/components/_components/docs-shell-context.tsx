"use client";

import { createContext, useContext } from "react";

type DocsShellContextValue = Readonly<{
  toggleSidebar: () => void;
  closeSidebar: () => void;
  isSidebarOpen: boolean;
}>;

const DocsShellContext = createContext<DocsShellContextValue | null>(null);

export function DocsShellProvider({
  value,
  children,
}: Readonly<{
  value: DocsShellContextValue;
  children: React.ReactNode;
}>) {
  return (
    <DocsShellContext.Provider value={value}>{children}</DocsShellContext.Provider>
  );
}

export function useDocsShell() {
  return useContext(DocsShellContext);
}
