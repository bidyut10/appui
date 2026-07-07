import type { ReactNode } from "react";

export function Heading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl font-serif text-neutral-900 ${className}`}>
      {children}
    </h1>
  );
}