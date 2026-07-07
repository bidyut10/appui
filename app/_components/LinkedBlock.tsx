import type { ReactNode } from "react";
import { ViewLink } from "./ViewLink";

export function LinkedBlock({
  className,
  link,
  href,
  children,
}: {
  className: string;
  link: string;
  href?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}> 
      {children}
      <ViewLink href={href}>{link}</ViewLink>
    </div>
  );
}