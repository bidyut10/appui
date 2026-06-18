import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

export type ShowcaseSourceBundle = Readonly<{
  cnSource: string;
  componentSource: string;
}>;

export async function readShowcaseSource(
  file: string,
): Promise<ShowcaseSourceBundle> {
  const [cnSource, componentSource] = await Promise.all([
    readFile(path.join(ROOT, "lib", "cn.ts"), "utf8"),
    readFile(path.join(ROOT, file), "utf8"),
  ]);

  return { cnSource, componentSource };
}
