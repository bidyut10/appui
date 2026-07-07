import type { ReactNode } from "react";

export function Paragraph({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "muted" | "dark";
}) {
  return (
    <p
      className={`text-start text-base tracking-tight mt-6 ${tone === "muted" ? "text-neutral-700" : "text-neutral-900"}`}
    >
      {children}
    </p>
  );
}