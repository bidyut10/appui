import Image from "next/image";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { ViewLink } from "./ViewLink";
import { PHONE_PANEL, BOX_PATTERN } from "./Pattern";

export function PhoneColumn({
  variant,
  src,
  link,
}: {
  variant: "purple" | "orange" | "titanium";
  src: string;
  link?: string;
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
          sizes="500px"
          quality={100}
          className="object-cover select-none"
        />
      </PhoneMockupCard>
    </div>
  );

  if (!link) return panel;

  return (
    <div className="relative flex flex-1 items-stretch">
      {panel}
      <ViewLink>{link}</ViewLink>
    </div>
  );
}