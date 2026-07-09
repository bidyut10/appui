import Image from "next/image";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { ViewLink } from "./view-link";
import { PHONE_PANEL, BOX_PATTERN } from "./pattern";

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
    <div className="relative flex w-full min-[1300px]:flex-1 items-stretch">
      {panel}
      <ViewLink>{link}</ViewLink>
    </div>
  );
}