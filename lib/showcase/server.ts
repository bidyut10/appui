import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readShowcaseSource(file: string) {
  const root = process.cwd();
  const [cnSource, componentSource] = await Promise.all([
    readFile(path.join(root, "lib", "cn.ts"), "utf8"),
    readFile(path.join(root, file), "utf8"),
  ]);
  return { cnSource, componentSource };
}
