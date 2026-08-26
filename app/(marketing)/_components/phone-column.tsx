import type { ReactNode } from "react";

import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { cn } from "@/lib/cn";
import { BOX_PATTERN } from "@/lib/shared";

import { ViewLink } from "./view-link";

type PhoneFrameVariant = "purple" | "orange" | "titanium" | "white";

const PANEL_CLASS =
  "flex w-full items-end justify-center overflow-hidden rounded-2xl border border-neutral-100 py-8 px-3 min-[900px]:px-4 min-[1500px]:p-6";

export function PhoneColumn({
  variant,
  children,
  link,
  href,
  className,
}: Readonly<{
  variant: PhoneFrameVariant;
  children: ReactNode;
  link?: string;
  href?: string;
  className?: string;
}>) {
  const panel = (
    <div className={PANEL_CLASS} style={BOX_PATTERN}>
      <PhoneMockupCard variant={variant}>
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0">{children}</div>
        </div>
      </PhoneMockupCard>
    </div>
  );

  return (
    <div className={cn("relative w-full min-[1500px]:shrink-0", className)}>
      {panel}
      {link ? (
        <ViewLink href={href ?? "/components/phone"}>{link}</ViewLink>
      ) : null}
    </div>
  );
}
