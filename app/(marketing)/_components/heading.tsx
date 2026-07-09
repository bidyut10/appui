import type { ReactNode } from "react";

export function Heading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`font-serif text-3xl text-neutral-900 ${className}`}>
      {children}
    </h1>
  );
}
