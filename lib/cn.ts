import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines class names and resolves Tailwind CSS conflicts.
// @example cn("p-2", "p-4") // => "p-4"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
