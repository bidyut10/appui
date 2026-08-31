import { getShowcaseNavByCategory } from "@/lib/showcase";

import { ComponentsDocsShell } from "./_components/shell";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getShowcaseNavByCategory();

  return (
    <ComponentsDocsShell categories={categories}>
      {children}
    </ComponentsDocsShell>
  );
}
