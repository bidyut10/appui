import { getShowcaseByCategory } from "@/lib/showcase";

import { ComponentsDocsShell } from "./_components/shell";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getShowcaseByCategory();

  return (
    <ComponentsDocsShell categories={categories}>{children}</ComponentsDocsShell>
  );
}
