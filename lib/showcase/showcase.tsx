/**
 * Homepage showcase — edit this file only.
 *
 * 1. Import your component at the top
 * 2. Add c("slug", <Component />, "components/.../file.tsx", "ExportName") to a row
 * 3. Each inner array = one row — use 1, 2, or 3 items
 */
import { cloneElement, type ReactElement, type ReactNode } from "react";

import { DndFaceWidget } from "@/components/activity/dnd-face-widget";
import { FocusBreathWidget } from "@/components/activity/focus-breath-widget";
import { AudioRecorderWidget } from "@/components/audio/audio-recorder-widget";
import { IosEarbudsWidget } from "@/components/audio/ios-earbuds-widget";
import { RecorderFaceWidget } from "@/components/audio/recorder-face-widget";
import { VoiceAssistantWidget } from "@/components/audio/voice-assistant-widget";
import { BatteryFaceWidget } from "@/components/battery/battery-face-widget";
import { BluetoothFaceWidget } from "@/components/bluetooth/bluetooth-face-widget";
import { DailyActivityCalendarWidget } from "@/components/calender/daily-activity-calendar-widget";
import { IosCalenderWidget } from "@/components/calender/ios-calender-widget";
import { CinemaTicketCard } from "@/components/text/cinema-ticket-card";
import { CreditCardGlass } from "@/components/users/credit-card-glass";
import { DiscordChatCard } from "@/components/discord/discord-chat-card";
import { DropCapEditorialCard } from "@/components/text/drop-cap-editorial-card";
import { EditorialQuoteCard } from "@/components/text/editorial-quote-card";
import { EventTicketCard } from "@/components/event/event-ticket-card";
import { FacebookPostCard } from "@/components/facebook/facebook-post-card";
import { FilmStripCard } from "@/components/gallery/film-strip-card";
import { FlightBoardingCard } from "@/components/travel/flight-boarding-card";
import { GalleryGridCard } from "@/components/gallery/gallery-grid-card";
import { GitHubRepoCard } from "@/components/github/github-repo-card";
import { GlassOverlayImageCard } from "@/components/gallery/glass-overlay-image-card";
import { InstagramPostCard } from "@/components/instagram/instagram-post-card";
import { JournalWritingCard } from "@/components/text/journal-writing-card";
import { KeyboardShortcutsCard } from "@/components/text/keyboard-shortcuts-card";
import { LinkedInPostCard } from "@/components/linkedin/linked-in-post-card";
import { LinkedInProfileCard } from "@/components/linkedin/linked-in-profile-card";
import { MagazineCoverCard } from "@/components/text/magazine-cover-card";
import { MusicPlayerCard } from "@/components/audio/music-player-card";
import { MusicPlaylistCard } from "@/components/audio/music-playlist-card";
import { NotepadCard } from "@/components/text/notepad-card";
import { NowPlayingBar } from "@/components/audio/now-playing-bar";
import { PhotoAlbumCard } from "@/components/gallery/photo-album-card";
import { PhotoContactSheetCard } from "@/components/gallery/photo-contact-sheet-card";
import { PolaroidImageCard } from "@/components/gallery/polaroid-image-card";
import { ProgressRingCard } from "@/components/others/progress-ring-card";
import { RetailPriceTagCard } from "@/components/pricing/retail-price-tag-card";
import { StackedCardsEffect } from "@/components/others/stacked-cards-effect";
import { StampPostcardCard } from "@/components/gallery/stamp-postcard-card";
import { TeamMemberCard } from "@/components/users/team-member-card";
import { TerminalLogCard } from "@/components/others/terminal-log-card";
import { TestimonialCard } from "@/components/users/testimonial-card";
import { ThermalReceiptCard } from "@/components/others/thermal-receipt-card";
import { ThreadsPostCard } from "@/components/facebook/threads-post-card";
import { TogglePricingCards } from "@/components/pricing/toggle-pricing-cards";
import { TravelPostcardCard } from "@/components/travel/travel-postcard-card";
import { TwitterPostCard } from "@/components/twitter/twitter-post-card";
import { TwitterProfileCard } from "@/components/twitter/twitter-profile-card";
import { WalletPassCard } from "@/components/wallet/wallet-pass-card";
import { AnalogClockWidget } from "@/components/clocks/analog-clock-widget";
import { IosDigitalClockWidget } from "@/components/clocks/ios-digital-clock-widget";
import { CompassWidget } from "@/components/compass/compass-widget";
import { ContextMenuDropdown } from "@/components/dropdowns/context-menu-dropdown";
import { UserMenuDropdown } from "@/components/dropdowns/user-menu-dropdown";
import { GithubContributionCard } from "@/components/github/github-contribution";
import { IosMapLocationWidget } from "@/components/map-location/ios-map-location-widget";
import { BrowserMockupCard } from "@/components/mockups/browser-mockup-card";
import { LaptopMockupCard } from "@/components/mockups/laptop-mockup-card";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { AppleNotificationBanner } from "@/components/notifications/apple-notification-banner";
import { BlobProfileCard } from "@/components/profile/blob-profile";
import { StopwatchWidget } from "@/components/stopwatch/stopwatch-widget";
import { TorchFaceWidget } from "@/components/torch/torch-face-widget";
import { ElectricScooterWidget } from "@/components/travel/electric-scooter-widget";
import { FlightArrivalWidget } from "@/components/travel/flight-arrival-widget";
import { MinimalAgendaWidget } from "@/components/travel/minimal-agenda-widget";
import { RidePickupWidget } from "@/components/travel/ride-pickup-widget";
import { WiFiToggleWidget } from "@/components/wifi/wifi-toggle-widget";

type ShowcaseOpts = {
  title?: string;
  description?: string;
  usage?: string;
};

// Add a showcased component to a row.
export function c(
  slug: string,
  preview: ReactNode,
  file: string,
  exportName: string,
  opts?: ShowcaseOpts,
) {
  return {
    slug,
    file,
    exportName,
    preview: cloneElement(preview as ReactElement, { key: slug }),
    ...opts,
  };
}

// Each inner array is one homepage row.
export const showcaseRows = [
  [
    c(
      "analog-clock-roman",
      <AnalogClockWidget variant="roman" />,
      "components/clocks/analog-clock-widget.tsx",
      "AnalogClockWidget",
      {
        title: "Analog Clock — Roman",
        description:
          "Live analog clock with roman numerals on the dial. Pass variant to switch face styles.",
        usage: '<AnalogClockWidget variant="roman" />',
      },
    ),
    c(
      "analog-clock-minimal",
      <AnalogClockWidget variant="minimal" />,
      "components/clocks/analog-clock-widget.tsx",
      "AnalogClockWidget",
      {
        title: "Analog Clock — Minimal",
        usage: '<AnalogClockWidget variant="minimal" />',
      },
    ),
    c(
      "analog-clock-numeric",
      <AnalogClockWidget variant="numeric" />,
      "components/clocks/analog-clock-widget.tsx",
      "AnalogClockWidget",
      {
        title: "Analog Clock — Numeric",
        usage: '<AnalogClockWidget variant="numeric" />',
      },
    ),
  ],
  [
    c(
      "wifi-toggle",
      <WiFiToggleWidget />,
      "components/wifi/wifi-toggle-widget.tsx",
      "WiFiToggleWidget",
      {
        description:
          "iOS-style Wi-Fi toggle with network label and on/off switch.",
        usage: '<WiFiToggleWidget networkName="Studio-5G" defaultOn={false} />',
      },
    ),
    c(
      "voice-assistant",
      <VoiceAssistantWidget />,
      "components/audio/voice-assistant-widget.tsx",
      "VoiceAssistantWidget",
      { usage: '<VoiceAssistantWidget label="Listening…" />' },
    ),
    c(
      "ios-earbuds",
      <IosEarbudsWidget />,
      "components/audio/ios-earbuds-widget.tsx",
      "IosEarbudsWidget",
      { usage: '<IosEarbudsWidget name="AirPods Pro" connected />' },
    ),
  ],
  [
    c(
      "recorder-face",
      <RecorderFaceWidget />,
      "components/audio/recorder-face-widget.tsx",
      "RecorderFaceWidget",
    ),
    c(
      "battery-face",
      <BatteryFaceWidget />,
      "components/battery/battery-face-widget.tsx",
      "BatteryFaceWidget",
      { usage: '<BatteryFaceWidget percent={57} hoursLeft="~5h left" />' },
    ),
    c(
      "compass",
      <CompassWidget />,
      "components/compass/compass-widget.tsx",
      "CompassWidget",
      { usage: "<CompassWidget heading={45} />" },
    ),
  ],
  [
    c(
      "bluetooth-face",
      <BluetoothFaceWidget />,
      "components/bluetooth/bluetooth-face-widget.tsx",
      "BluetoothFaceWidget",
      { usage: '<BluetoothFaceWidget deviceName="Bluetooth" defaultOn />' },
    ),
    c(
      "torch-face",
      <TorchFaceWidget />,
      "components/torch/torch-face-widget.tsx",
      "TorchFaceWidget",
    ),
    c(
      "dnd-face",
      <DndFaceWidget />,
      "components/activity/dnd-face-widget.tsx",
      "DndFaceWidget",
      { usage: '<DndFaceWidget label="Focus" defaultOn />' },
    ),
  ],
  [
    c(
      "ios-digital-clock",
      <IosDigitalClockWidget />,
      "components/clocks/ios-digital-clock-widget.tsx",
      "IosDigitalClockWidget",
    ),
    c(
      "ios-calender",
      <IosCalenderWidget />,
      "components/calender/ios-calender-widget.tsx",
      "IosCalenderWidget",
    ),
    c(
      "stopwatch",
      <StopwatchWidget />,
      "components/stopwatch/stopwatch-widget.tsx",
      "StopwatchWidget",
    ),
  ],
  [
    c(
      "ios-map-location",
      <IosMapLocationWidget />,
      "components/map-location/ios-map-location-widget.tsx",
      "IosMapLocationWidget",
      { usage: '<IosMapLocationWidget city="Kolkata" />' },
    ),
    c(
      "focus-breath",
      <FocusBreathWidget />,
      "components/activity/focus-breath-widget.tsx",
      "FocusBreathWidget",
      { usage: '<FocusBreathWidget label="Breathe" />' },
    ),
    c(
      "blob-profile",
      <BlobProfileCard />,
      "components/profile/blob-profile.tsx",
      "BlobProfileCard",
      {
        usage:
          '<BlobProfileCard name="Bidyut Kundu" handle="@bidyut.dev" image="/your-photo.png" />',
      },
    ),
  ],
  [
    c(
      "daily-activity-calendar",
      <DailyActivityCalendarWidget />,
      "components/calender/daily-activity-calendar-widget.tsx",
      "DailyActivityCalendarWidget",
      {
        usage:
          '<DailyActivityCalendarWidget month="August 2024" year={2024} highlightDay={15} />',
      },
    ),
    c(
      "audio-recorder",
      <AudioRecorderWidget />,
      "components/audio/audio-recorder-widget.tsx",
      "AudioRecorderWidget",
      { usage: '<AudioRecorderWidget title="New Audio" date="12.8.24" />' },
    ),
    c(
      "flight-arrival",
      <FlightArrivalWidget />,
      "components/travel/flight-arrival-widget.tsx",
      "FlightArrivalWidget",
      { usage: "<FlightArrivalWidget arrivalMinutes={53} />" },
    ),
  ],
  [
    c(
      "minimal-agenda",
      <MinimalAgendaWidget />,
      "components/travel/minimal-agenda-widget.tsx",
      "MinimalAgendaWidget",
    ),
    c(
      "ride-pickup",
      <RidePickupWidget />,
      "components/travel/ride-pickup-widget.tsx",
      "RidePickupWidget",
      {
        usage:
          '<RidePickupWidget eta="2 min" message="Meet at the pickup point" vehicle="Mercedes-Benz S00121" image="/car.png" />',
      },
    ),
    c(
      "electric-scooter",
      <ElectricScooterWidget />,
      "components/travel/electric-scooter-widget.tsx",
      "ElectricScooterWidget",
    ),
  ],
  [
    c(
      "laptop",
      <LaptopMockupCard />,
      "components/mockups/laptop-mockup-card.tsx",
      "LaptopMockupCard",
    ),
    c(
      "phone",
      <PhoneMockupCard />,
      "components/mockups/phone-mockup-card.tsx",
      "PhoneMockupCard",
    ),
  ],
  [
    c(
      "browser",
      <BrowserMockupCard />,
      "components/mockups/browser-mockup-card.tsx",
      "BrowserMockupCard",
    ),
  ],
  [
    c(
      "polaroid-image",
      <PolaroidImageCard />,
      "components/cards/polaroid-image-card.tsx",
      "PolaroidImageCard",
      {
        usage:
          '<PolaroidImageCard image="/your-photo.jpg" imageAlt="Summer trip" caption="Goa, 2024" />',
      },
    ),
    c(
      "notepad",
      <NotepadCard />,
      "components/cards/notepad-card.tsx",
      "NotepadCard",
      {
        usage:
          '<NotepadCard title="Note to self" quote="Your quote here" author="Name" checklist={["One", "Two"]} />',
      },
    ),
    c(
      "thermal-receipt",
      <ThermalReceiptCard />,
      "components/cards/thermal-receipt-card.tsx",
      "ThermalReceiptCard",
    ),
  ],
  [
    c(
      "instagram-post",
      <InstagramPostCard />,
      "components/cards/instagram-post-card.tsx",
      "InstagramPostCard",
      {
        usage:
          '<InstagramPostCard username="you" caption="Your caption" avatar="/avatar.png" postImage="/post.jpg" />',
      },
    ),
    c(
      "threads-post",
      <ThreadsPostCard />,
      "components/cards/threads-post-card.tsx",
      "ThreadsPostCard",
      {
        usage:
          '<ThreadsPostCard username="you" content="Your thread text" avatar="/avatar.png" />',
      },
    ),
  ],
  [
    c(
      "now-playing-bar",
      <NowPlayingBar />,
      "components/cards/now-playing-bar.tsx",
      "NowPlayingBar",
    ),
    c(
      "twitter-post",
      <TwitterPostCard />,
      "components/cards/twitter-post-card.tsx",
      "TwitterPostCard",
    ),
    c(
      "film-strip",
      <FilmStripCard />,
      "components/cards/film-strip-card.tsx",
      "FilmStripCard",
    ),
  ],
  [
    c(
      "github-contribution",
      <GithubContributionCard />,
      "components/github/github-contribution.tsx",
      "GithubContributionCard",
      {
        usage: '<GithubContributionCard username="your-handle" year={2026} />',
      },
    ),
  ],
  [
    c(
      "apple-notification",
      <AppleNotificationBanner />,
      "components/notifications/apple-notification-banner.tsx",
      "AppleNotificationBanner",
      {
        usage:
          '<AppleNotificationBanner title="Messages" sender="Sarah" message="Hey!" avatarSrc="/avatar.png" />',
      },
    ),
    c(
      "context-menu",
      <ContextMenuDropdown />,
      "components/dropdowns/context-menu-dropdown.tsx",
      "ContextMenuDropdown",
      {
        usage:
          '<ContextMenuDropdown cardTitle="My file" onItemClick={(item) => console.log(item.id)} />',
      },
    ),
    c(
      "user-menu",
      <UserMenuDropdown />,
      "components/dropdowns/user-menu-dropdown.tsx",
      "UserMenuDropdown",
      {
        usage:
          '<UserMenuDropdown userName="Your Name" userEmail="you@email.com" avatarSrc="/avatar.png" />',
      },
    ),
  ],
  [
    c(
      "cinema-ticket",
      <CinemaTicketCard />,
      "components/cards/cinema-ticket-card.tsx",
      "CinemaTicketCard",
    ),
    c(
      "wallet-pass",
      <WalletPassCard />,
      "components/cards/wallet-pass-card.tsx",
      "WalletPassCard",
    ),
    c(
      "credit-card-glass",
      <CreditCardGlass />,
      "components/cards/credit-card-glass.tsx",
      "CreditCardGlass",
    ),
  ],
  [
    c(
      "drop-cap-editorial",
      <DropCapEditorialCard />,
      "components/cards/drop-cap-editorial-card.tsx",
      "DropCapEditorialCard",
    ),

    c(
      "editorial-quote",
      <EditorialQuoteCard />,
      "components/cards/editorial-quote-card.tsx",
      "EditorialQuoteCard",
    ),
    c(
      "discord-chat",
      <DiscordChatCard />,
      "components/cards/discord-chat-card.tsx",
      "DiscordChatCard",
    ),
  ],
  [
    c(
      "linked-in-profile",
      <LinkedInProfileCard />,
      "components/cards/linked-in-profile-card.tsx",
      "LinkedInProfileCard",
    ),
    c(
      "facebook-post",
      <FacebookPostCard />,
      "components/cards/facebook-post-card.tsx",
      "FacebookPostCard",
    ),
    c(
      "twitter-profile",
      <TwitterProfileCard />,
      "components/cards/twitter-profile-card.tsx",
      "TwitterProfileCard",
    ),
  ],

  [
    c(
      "event-ticket",
      <EventTicketCard />,
      "components/cards/event-ticket-card.tsx",
      "EventTicketCard",
    ),
    c(
      "flight-boarding",
      <FlightBoardingCard />,
      "components/cards/flight-boarding-card.tsx",
      "FlightBoardingCard",
    ),
    c(
      "gallery-grid",
      <GalleryGridCard />,
      "components/cards/gallery-grid-card.tsx",
      "GalleryGridCard",
    ),
  ],
  [
    c(
      "glass-overlay-image",
      <GlassOverlayImageCard />,
      "components/cards/glass-overlay-image-card.tsx",
      "GlassOverlayImageCard",
    ),
    c(
      "photo-album",
      <PhotoAlbumCard />,
      "components/cards/photo-album-card.tsx",
      "PhotoAlbumCard",
    ),
    c(
      "magazine-cover",
      <MagazineCoverCard />,
      "components/cards/magazine-cover-card.tsx",
      "MagazineCoverCard",
    ),
  ],
  [
    c(
      "journal-writing",
      <JournalWritingCard />,
      "components/cards/journal-writing-card.tsx",
      "JournalWritingCard",
    ),
    c(
      "terminal-log",
      <TerminalLogCard />,
      "components/cards/terminal-log-card.tsx",
      "TerminalLogCard",
    ),
    c(
      "keyboard-shortcuts",
      <KeyboardShortcutsCard />,
      "components/cards/keyboard-shortcuts-card.tsx",
      "KeyboardShortcutsCard",
    ),
  ],
  [
    c(
      "github-repo",
      <GitHubRepoCard />,
      "components/cards/github-repo-card.tsx",
      "GitHubRepoCard",
    ),
    c(
      "linked-in-post",
      <LinkedInPostCard />,
      "components/cards/linked-in-post-card.tsx",
      "LinkedInPostCard",
    ),
  ],
  [
    c(
      "music-player",
      <MusicPlayerCard />,
      "components/cards/music-player-card.tsx",
      "MusicPlayerCard",
    ),
    c(
      "photo-contact-sheet",
      <PhotoContactSheetCard />,
      "components/cards/photo-contact-sheet-card.tsx",
      "PhotoContactSheetCard",
    ),
    c(
      "music-playlist",
      <MusicPlaylistCard />,
      "components/cards/music-playlist-card.tsx",
      "MusicPlaylistCard",
    ),
  ],
  [
    c(
      "stacked-cards-effect",
      <StackedCardsEffect />,
      "components/cards/stacked-cards-effect.tsx",
      "StackedCardsEffect",
    ),
    c(
      "retail-price-tag",
      <RetailPriceTagCard />,
      "components/cards/retail-price-tag-card.tsx",
      "RetailPriceTagCard",
    ),
    c(
      "stamp-postcard",
      <StampPostcardCard />,
      "components/cards/stamp-postcard-card.tsx",
      "StampPostcardCard",
    ),
  ],
  [
    c(
      "progress-ring",
      <ProgressRingCard />,
      "components/cards/progress-ring-card.tsx",
      "ProgressRingCard",
    ),
    c(
      "team-member",
      <TeamMemberCard />,
      "components/cards/team-member-card.tsx",
      "TeamMemberCard",
    ),

    c(
      "testimonial",
      <TestimonialCard />,
      "components/cards/testimonial-card.tsx",
      "TestimonialCard",
    ),
  ],
  [
    c(
      "toggle-pricing-cards",
      <TogglePricingCards />,
      "components/cards/toggle-pricing-cards.tsx",
      "TogglePricingCards",
    ),
    c(
      "travel-postcard",
      <TravelPostcardCard />,
      "components/cards/travel-postcard-card.tsx",
      "TravelPostcardCard",
    ),
  ],
];

// Catalog (auto — no need to edit)

export type ShowcaseItem = ReturnType<typeof c>;

export type ShowcaseEntry = Readonly<{
  slug: string;
  title: string;
  category: string;
  file: string;
  exportName: string;
  description: string;
  usage: string;
  preview: ReactElement;
}>;

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

function buildCatalog(): Record<string, ShowcaseEntry> {
  const catalog: Record<string, ShowcaseEntry> = {};

  for (const row of showcaseRows) {
    for (const item of row) {
      catalog[item.slug] = {
        slug: item.slug,
        exportName: item.exportName,
        file: item.file,
        title: item.title ?? titleFromSlug(item.slug),
        category: categoryFromFile(item.file),
        description:
          item.description ??
          `Copy ${item.exportName} into your app and pass props to match your content.`,
        usage: item.usage ?? `<${item.exportName} />`,
        preview: item.preview,
      };
    }
  }

  return catalog;
}

const catalog = buildCatalog();

export function getShowcaseEntry(slug: string): ShowcaseEntry | undefined {
  return catalog[slug];
}

export function getAllShowcaseSlugs(): string[] {
  return Object.keys(catalog);
}
