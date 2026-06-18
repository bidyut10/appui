import type { ReactElement } from "react";

export type ShowcaseEntry = Readonly<{
  slug: string;
  title: string;
  category: string;
  file: string;
  exportName: string;
  description: string;
  usage: string;
  preview: ReactElement;
}>;
