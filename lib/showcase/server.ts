import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readShowcaseSource(file: string) {
  const root = process.cwd();
  const componentsPrefix = "components/";
  if (!file.startsWith(componentsPrefix)) {
    throw new Error(`Showcase source must live in ${componentsPrefix}`);
  }

  const componentFile = file.slice(componentsPrefix.length);
  const [cnSource, componentSource] = await Promise.all([
    readFile(path.join(root, "lib", "cn.ts"), "utf8"),
    readFile(path.join(root, "components", componentFile), "utf8"),
  ]);
  return { cnSource, componentSource };
}
