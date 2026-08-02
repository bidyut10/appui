import Image from "next/image";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { ViewLink } from "./view-link";
import { PHONE_PANEL, BOX_PATTERN } from "@/lib/shared";

export function PhoneColumn({
  variant,
  src,
  link,
  href,
}: {
  variant: "purple" | "orange" | "titanium";
  src: string;
  link?: string;
  href?: string;
}) {
  const panel = (
    <div
      className={
        link
          ? "flex w-full items-end justify-center overflow-hidden rounded-2xl border border-neutral-100 py-10 md:py-14"
          : PHONE_PANEL
      }
      style={BOX_PATTERN}
    >
      <PhoneMockupCard variant={variant}>
        <Image
          src={src}
          alt="App screen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </PhoneMockupCard>
    </div>
  );

  if (!link) return panel;

  return (
    <div className="relative flex w-full items-stretch min-[1300px]:flex-1">
      {panel}
      <ViewLink href={href ?? "/components/phone"}>{link}</ViewLink>
    </div>
  );
}
