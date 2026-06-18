import { cloneElement, type ReactElement } from "react";

import { AnalogClockWidget } from "@/components/clocks/analog-clock-widget";
import { WiFiToggleWidget } from "@/components/wifi/wifi-toggle-widget";
import { VoiceAssistantWidget } from "@/components/audio/voice-assistant-widget";
import { IosEarbudsWidget } from "@/components/audio/ios-earbuds-widget";
import { RecorderFaceWidget } from "@/components/audio/recorder-face-widget";
import { BatteryFaceWidget } from "@/components/battery/battery-face-widget";
import { CompassWidget } from "@/components/compass/compass-widget";
import { BluetoothFaceWidget } from "@/components/bluetooth/bluetooth-face-widget";
import { TorchFaceWidget } from "@/components/torch/torch-face-widget";
import { DndFaceWidget } from "@/components/activity/dnd-face-widget";
import { IosDigitalClockWidget } from "@/components/clocks/ios-digital-clock-widget";
import { IosCalenderWidget } from "@/components/calender/ios-calender-widget";
import { StopwatchWidget } from "@/components/stopwatch/stopwatch-widget";
import { IosMapLocationWidget } from "@/components/map-location/ios-map-location-widget";
import { FocusBreathWidget } from "@/components/activity/focus-breath-widget";
import { BlobProfileCard } from "@/components/profile/blob-profile";
import { DailyActivityCalendarWidget } from "@/components/calender/daily-activity-calendar-widget";
import { AudioRecorderWidget } from "@/components/audio/audio-recorder-widget";
import { FlightArrivalWidget } from "@/components/travel/flight-arrival-widget";
import { MinimalAgendaWidget } from "@/components/travel/minimal-agenda-widget";
import { RidePickupWidget } from "@/components/travel/ride-pickup-widget";
import { ElectricScooterWidget } from "@/components/travel/electric-scooter-widget";
import { LaptopMockupCard } from "@/components/mockups/laptop-mockup-card";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { ThreadsPostCard } from "@/components/cards/threads-post-card";
import { InstagramPostCard } from "@/components/cards/instagram-post-card";
import { PolaroidImageCard } from "@/components/cards/polaroid-image-card";
import { GithubContributionCard } from "@/components/github/github-contribution";
import { BrowserMockupCard } from "@/components/mockups/browser-mockup-card";
import { NotepadCard } from "@/components/cards/notepad-card";
import { ThermalReceiptCard } from "@/components/cards/thermal-receipt-card";
import { AppleNotificationBanner } from "@/components/notifications/apple-notification-banner";
import { UserMenuDropdown } from "@/components/dropdowns/user-menu-dropdown";
import { ContextMenuDropdown } from "@/components/dropdowns/context-menu-dropdown";

import type { Row } from "@/types/types";
import type { ShowcaseEntry } from "./types";

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function categoryFromFile(file: string): string {
  const segment = file.split("/")[1] ?? "components";
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

function defineEntry(
  slug: string,
  exportName: string,
  file: string,
  preview: ReactElement,
  options?: Partial<
    Pick<ShowcaseEntry, "title" | "category" | "description" | "usage">
  >,
): ShowcaseEntry {
  return {
    slug,
    exportName,
    file,
    title: options?.title ?? titleFromSlug(slug),
    category: options?.category ?? categoryFromFile(file),
    description:
      options?.description ??
      `Copy ${exportName} into your app and pass props to match your content.`,
    usage: options?.usage ?? `<${exportName} />`,
    preview,
  };
}

export const showcaseCatalog: Record<string, ShowcaseEntry> = {
  "analog-clock-roman": defineEntry(
    "analog-clock-roman",
    "AnalogClockWidget",
    "components/clocks/analog-clock-widget.tsx",
    <AnalogClockWidget variant="roman" />,
    {
      title: "Analog Clock — Roman",
      usage: '<AnalogClockWidget variant="roman" />',
      description:
        "Live analog clock with roman numerals on the dial. Pass variant to switch face styles.",
    },
  ),
  "analog-clock-minimal": defineEntry(
    "analog-clock-minimal",
    "AnalogClockWidget",
    "components/clocks/analog-clock-widget.tsx",
    <AnalogClockWidget variant="minimal" />,
    {
      title: "Analog Clock — Minimal",
      usage: '<AnalogClockWidget variant="minimal" />',
    },
  ),
  "analog-clock-numeric": defineEntry(
    "analog-clock-numeric",
    "AnalogClockWidget",
    "components/clocks/analog-clock-widget.tsx",
    <AnalogClockWidget variant="numeric" />,
    {
      title: "Analog Clock — Numeric",
      usage: '<AnalogClockWidget variant="numeric" />',
    },
  ),
  "wifi-toggle": defineEntry(
    "wifi-toggle",
    "WiFiToggleWidget",
    "components/wifi/wifi-toggle-widget.tsx",
    <WiFiToggleWidget />,
    {
      usage: '<WiFiToggleWidget networkName="Studio-5G" defaultOn={false} />',
      description:
        "iOS-style Wi-Fi toggle with network label and on/off switch.",
    },
  ),
  "voice-assistant": defineEntry(
    "voice-assistant",
    "VoiceAssistantWidget",
    "components/audio/voice-assistant-widget.tsx",
    <VoiceAssistantWidget />,
    {
      usage: '<VoiceAssistantWidget label="Listening…" />',
    },
  ),
  "ios-earbuds": defineEntry(
    "ios-earbuds",
    "IosEarbudsWidget",
    "components/audio/ios-earbuds-widget.tsx",
    <IosEarbudsWidget />,
    {
      usage: '<IosEarbudsWidget name="AirPods Pro" connected />',
    },
  ),
  "recorder-face": defineEntry(
    "recorder-face",
    "RecorderFaceWidget",
    "components/audio/recorder-face-widget.tsx",
    <RecorderFaceWidget />,
  ),
  "battery-face": defineEntry(
    "battery-face",
    "BatteryFaceWidget",
    "components/battery/battery-face-widget.tsx",
    <BatteryFaceWidget />,
    {
      usage: '<BatteryFaceWidget percent={57} hoursLeft="~5h left" />',
    },
  ),
  compass: defineEntry(
    "compass",
    "CompassWidget",
    "components/compass/compass-widget.tsx",
    <CompassWidget />,
    {
      usage: '<CompassWidget heading={45} />',
    },
  ),
  "bluetooth-face": defineEntry(
    "bluetooth-face",
    "BluetoothFaceWidget",
    "components/bluetooth/bluetooth-face-widget.tsx",
    <BluetoothFaceWidget />,
    {
      usage: '<BluetoothFaceWidget deviceName="Bluetooth" defaultOn />',
    },
  ),
  "torch-face": defineEntry(
    "torch-face",
    "TorchFaceWidget",
    "components/torch/torch-face-widget.tsx",
    <TorchFaceWidget />,
  ),
  "dnd-face": defineEntry(
    "dnd-face",
    "DndFaceWidget",
    "components/activity/dnd-face-widget.tsx",
    <DndFaceWidget />,
    {
      usage: '<DndFaceWidget label="Focus" defaultOn />',
    },
  ),
  "ios-digital-clock": defineEntry(
    "ios-digital-clock",
    "IosDigitalClockWidget",
    "components/clocks/ios-digital-clock-widget.tsx",
    <IosDigitalClockWidget />,
  ),
  "ios-calender": defineEntry(
    "ios-calender",
    "IosCalenderWidget",
    "components/calender/ios-calender-widget.tsx",
    <IosCalenderWidget />,
  ),
  stopwatch: defineEntry(
    "stopwatch",
    "StopwatchWidget",
    "components/stopwatch/stopwatch-widget.tsx",
    <StopwatchWidget />,
  ),
  "ios-map-location": defineEntry(
    "ios-map-location",
    "IosMapLocationWidget",
    "components/map-location/ios-map-location-widget.tsx",
    <IosMapLocationWidget />,
    {
      usage: '<IosMapLocationWidget city="Kolkata" />',
    },
  ),
  "focus-breath": defineEntry(
    "focus-breath",
    "FocusBreathWidget",
    "components/activity/focus-breath-widget.tsx",
    <FocusBreathWidget />,
    {
      usage: '<FocusBreathWidget label="Breathe" />',
    },
  ),
  "blob-profile": defineEntry(
    "blob-profile",
    "BlobProfileCard",
    "components/profile/blob-profile.tsx",
    <BlobProfileCard />,
    {
      usage:
        '<BlobProfileCard name="Natalie Portman" handle="@natalieportman" image="/your-photo.png" />',
    },
  ),
  "daily-activity-calendar": defineEntry(
    "daily-activity-calendar",
    "DailyActivityCalendarWidget",
    "components/calender/daily-activity-calendar-widget.tsx",
    <DailyActivityCalendarWidget />,
    {
      usage:
        '<DailyActivityCalendarWidget month="August 2024" year={2024} highlightDay={15} />',
    },
  ),
  "audio-recorder": defineEntry(
    "audio-recorder",
    "AudioRecorderWidget",
    "components/audio/audio-recorder-widget.tsx",
    <AudioRecorderWidget />,
    {
      usage: '<AudioRecorderWidget title="New Audio" date="12.8.24" />',
    },
  ),
  "flight-arrival": defineEntry(
    "flight-arrival",
    "FlightArrivalWidget",
    "components/travel/flight-arrival-widget.tsx",
    <FlightArrivalWidget />,
    {
      usage: "<FlightArrivalWidget arrivalMinutes={53} />",
    },
  ),
  "minimal-agenda": defineEntry(
    "minimal-agenda",
    "MinimalAgendaWidget",
    "components/travel/minimal-agenda-widget.tsx",
    <MinimalAgendaWidget />,
  ),
  "ride-pickup": defineEntry(
    "ride-pickup",
    "RidePickupWidget",
    "components/travel/ride-pickup-widget.tsx",
    <RidePickupWidget />,
    {
      usage:
        '<RidePickupWidget eta="2 min" message="Meet at the pickup point" vehicle="Mercedes-Benz S00121" image="/car.png" />',
    },
  ),
  "electric-scooter": defineEntry(
    "electric-scooter",
    "ElectricScooterWidget",
    "components/travel/electric-scooter-widget.tsx",
    <ElectricScooterWidget />,
  ),
  "laptop-mockup": defineEntry(
    "laptop-mockup",
    "LaptopMockupCard",
    "components/mockups/laptop-mockup-card.tsx",
    <LaptopMockupCard />,
  ),
  "phone-mockup": defineEntry(
    "phone-mockup",
    "PhoneMockupCard",
    "components/mockups/phone-mockup-card.tsx",
    <PhoneMockupCard />,
  ),
  "browser-mockup": defineEntry(
    "browser-mockup",
    "BrowserMockupCard",
    "components/mockups/browser-mockup-card.tsx",
    <BrowserMockupCard />,
  ),
  "polaroid-image": defineEntry(
    "polaroid-image",
    "PolaroidImageCard",
    "components/cards/polaroid-image-card.tsx",
    <PolaroidImageCard />,
    {
      usage:
        '<PolaroidImageCard image="/your-photo.jpg" imageAlt="Summer trip" caption="Goa, 2024" />',
    },
  ),
  notepad: defineEntry(
    "notepad",
    "NotepadCard",
    "components/cards/notepad-card.tsx",
    <NotepadCard />,
    {
      usage:
        '<NotepadCard title="Note to self" quote="Your quote here" author="Name" checklist={["One", "Two"]} />',
    },
  ),
  "thermal-receipt": defineEntry(
    "thermal-receipt",
    "ThermalReceiptCard",
    "components/cards/thermal-receipt-card.tsx",
    <ThermalReceiptCard />,
  ),
  "instagram-post": defineEntry(
    "instagram-post",
    "InstagramPostCard",
    "components/cards/instagram-post-card.tsx",
    <InstagramPostCard />,
    {
      usage:
        '<InstagramPostCard username="you" caption="Your caption" avatar="/avatar.png" postImage="/post.jpg" />',
    },
  ),
  "threads-post": defineEntry(
    "threads-post",
    "ThreadsPostCard",
    "components/cards/threads-post-card.tsx",
    <ThreadsPostCard />,
    {
      usage:
        '<ThreadsPostCard username="you" content="Your thread text" avatar="/avatar.png" />',
    },
  ),
  "github-contribution": defineEntry(
    "github-contribution",
    "GithubContributionCard",
    "components/github/github-contribution.tsx",
    <GithubContributionCard />,
    {
      usage: '<GithubContributionCard username="your-handle" year={2026} />',
    },
  ),
  "apple-notification": defineEntry(
    "apple-notification",
    "AppleNotificationBanner",
    "components/notifications/apple-notification-banner.tsx",
    <AppleNotificationBanner />,
    {
      usage:
        '<AppleNotificationBanner title="Messages" sender="Sarah" message="Hey!" avatarSrc="/avatar.png" />',
    },
  ),
  "context-menu": defineEntry(
    "context-menu",
    "ContextMenuDropdown",
    "components/dropdowns/context-menu-dropdown.tsx",
    <ContextMenuDropdown />,
    {
      usage:
        '<ContextMenuDropdown cardTitle="My file" onItemClick={(item) => console.log(item.id)} />',
    },
  ),
  "user-menu": defineEntry(
    "user-menu",
    "UserMenuDropdown",
    "components/dropdowns/user-menu-dropdown.tsx",
    <UserMenuDropdown />,
    {
      usage:
        '<UserMenuDropdown userName="Your Name" userEmail="you@email.com" avatarSrc="/avatar.png" />',
    },
  ),
};

const rowLayouts: readonly (readonly string[])[] = [
  ["analog-clock-roman", "analog-clock-minimal", "analog-clock-numeric"],
  ["wifi-toggle", "voice-assistant", "ios-earbuds"],
  ["recorder-face", "battery-face", "compass"],
  ["bluetooth-face", "torch-face", "dnd-face"],
  ["ios-digital-clock", "ios-calender", "stopwatch"],
  ["ios-map-location", "focus-breath", "blob-profile"],
  ["daily-activity-calendar", "audio-recorder", "flight-arrival"],
  ["minimal-agenda", "ride-pickup", "electric-scooter"],
  ["laptop-mockup", "phone-mockup"],
  ["browser-mockup"],
  ["polaroid-image", "notepad", "thermal-receipt"],
  ["instagram-post", "threads-post"],
  ["github-contribution"],
  ["apple-notification", "context-menu", "user-menu"],
];

export function buildShowcaseRows(layout: readonly (readonly string[])[]): Row[] {
  return layout.map((slugs) =>
    slugs.map((slug) => {
      const entry = showcaseCatalog[slug];
      return cloneElement(entry.preview, { key: slug });
    }),
  );
}

export const showcaseRows: Row[] = buildShowcaseRows(rowLayouts);

export function getShowcaseEntry(slug: string): ShowcaseEntry | undefined {
  return showcaseCatalog[slug];
}

export function getAllShowcaseSlugs(): string[] {
  return Object.keys(showcaseCatalog);
}
