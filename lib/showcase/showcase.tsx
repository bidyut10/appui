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
import { DailyMotivationCard } from "@/components/text/daily-motivation-card";
import { DenimProductEditorialCard } from "@/components/text/denim-product-editorial-card";
import { CreditCardGlass } from "@/components/users/credit-card-glass";
import { DiscordChatCard } from "@/components/discord/discord-chat-card";
import { DropCapEditorialCard } from "@/components/text/drop-cap-editorial-card";
import { EditorialQuoteCard } from "@/components/text/editorial-quote-card";
import { EventTicketCard } from "@/components/event/event-ticket-card";
import { FacebookPostCard } from "@/components/facebook/facebook-post-card";
import { FilmStripCard } from "@/components/gallery/film-strip-card";
import { GalleryGridCard } from "@/components/gallery/gallery-grid-card";
import { GitHubRepoCard } from "@/components/github/github-repo-card";
import { GlassOverlayImageCard } from "@/components/gallery/glass-overlay-image-card";
import { InstagramPostCard } from "@/components/instagram/instagram-post-card";
import { JournalWritingCard } from "@/components/text/journal-writing-card";
import { KeyboardShortcutsCard } from "@/components/text/keyboard-shortcuts-card";
import { LinkedInPostCard } from "@/components/linkedin/linked-in-post-card";
import { LinkedInProfileCard } from "@/components/linkedin/linked-in-profile-card";
import { MuseumPlacardCard } from "@/components/gallery/museum-placard-card";
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
import { SlowLivingPolaroidCard } from "@/components/gallery/slow-living-polaroid-card";
import { StampPostcardCard } from "@/components/gallery/stamp-postcard-card";
import { TeamMemberCard } from "@/components/users/team-member-card";
import { TerminalLogCard } from "@/components/others/terminal-log-card";
import { TestimonialCard } from "@/components/users/testimonial-card";
import { FlightBoardingCard } from "@/components/travel/flight-boarding-card";
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
          "A live analog clock dressed in roman numerals — classic dial, real moving hands. Swap the variant prop to match the mood of your layout.",
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
        description:
          "Ticks and hands on a quiet face, nothing else. When you want the time to sit in the background without shouting over your UI.",
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
        description:
          "Arabic numerals and a live second hand on a clean analog dial. Readable from across the room, still far from a default system clock.",
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
          "The toggle you'd expect on an iPhone — network name, on/off switch, that familiar iOS weight. Drop it into any control panel or settings screen.",
        usage: '<WiFiToggleWidget networkName="Studio-5G" defaultOn={false} />',
      },
    ),
    c(
      "voice-assistant",
      <VoiceAssistantWidget />,
      "components/audio/voice-assistant-widget.tsx",
      "VoiceAssistantWidget",
      {
        description:
          "Animated equalizer bars and a mic button that flip between idle and listening. Builds the voice-AI moment without building the whole assistant.",
        usage: '<VoiceAssistantWidget label="Listening…" />',
      },
    ),
    c(
      "ios-earbuds",
      <IosEarbudsWidget />,
      "components/audio/ios-earbuds-widget.tsx",
      "IosEarbudsWidget",
      {
        description:
          "AirPods-style widget showing device name and connection status. Small, familiar, and perfect beside other iOS-style controls.",
        usage: '<IosEarbudsWidget name="AirPods Pro" connected />',
      },
    ),
  ],
  [
    c(
      "recorder-face",
      <RecorderFaceWidget />,
      "components/audio/recorder-face-widget.tsx",
      "RecorderFaceWidget",
      {
        description:
          "A quirky record button with a mascot face, circular dial, and live timer. Tap to start and pause — feels like a tiny dedicated recorder app.",
      },
    ),
    c(
      "battery-face",
      <BatteryFaceWidget />,
      "components/battery/battery-face-widget.tsx",
      "BatteryFaceWidget",
      {
        description:
          "Battery level as a character — arc ring, percentage, hours left, and a face that actually looks sad when you're running low.",
        usage: '<BatteryFaceWidget percent={57} hoursLeft="~5h left" />',
      },
    ),
    c(
      "compass",
      <CompassWidget />,
      "components/compass/compass-widget.tsx",
      "CompassWidget",
      {
        description:
          "A compass dial with labeled directions and a needle that follows device tilt. Pass a heading prop or let the browser handle orientation.",
        usage: "<CompassWidget heading={45} />",
      },
    ),
  ],
  [
    c(
      "bluetooth-face",
      <BluetoothFaceWidget />,
      "components/bluetooth/bluetooth-face-widget.tsx",
      "BluetoothFaceWidget",
      {
        description:
          "A teal mascot face that reacts when Bluetooth connects or drops. Toggle on/off with an expression change — playful, but still reads as a real status widget.",
        usage: '<BluetoothFaceWidget deviceName="Bluetooth" defaultOn />',
      },
    ),
    c(
      "torch-face",
      <TorchFaceWidget />,
      "components/torch/torch-face-widget.tsx",
      "TorchFaceWidget",
      {
        description:
          "Yellow flashlight toggle with a face that lights up when the torch is on. Small detail, but the kind people notice on a control sheet.",
      },
    ),
    c(
      "dnd-face",
      <DndFaceWidget />,
      "components/activity/dnd-face-widget.tsx",
      "DndFaceWidget",
      {
        description:
          "Focus mode as a purple moon mascot — tap to toggle DND and watch the expression shift. Makes a utilitarian setting feel a little human.",
        usage: '<DndFaceWidget label="Focus" defaultOn />',
      },
    ),
  ],
  [
    c(
      "ios-digital-clock",
      <IosDigitalClockWidget />,
      "components/clocks/ios-digital-clock-widget.tsx",
      "IosDigitalClockWidget",
      {
        description:
          "Live HH:MM in an iOS squircle with subtle tick marks around the edge. The kind of clock tile you'd find on a lock screen.",
      },
    ),
    c(
      "ios-calender",
      <IosCalenderWidget />,
      "components/calender/ios-calender-widget.tsx",
      "IosCalenderWidget",
      {
        description:
          "Today's date in the classic iOS calendar tile — red weekday, big day number, month underneath. Updates live, no refresh needed.",
      },
    ),
    c(
      "stopwatch",
      <StopwatchWidget />,
      "components/stopwatch/stopwatch-widget.tsx",
      "StopwatchWidget",
      {
        description:
          "Millisecond-precision stopwatch with reset, play-pause, and stop in a compact white widget. Running state shown with a small indicator dot.",
      },
    ),
  ],
  [
    c(
      "ios-map-location",
      <IosMapLocationWidget />,
      "components/map-location/ios-map-location-widget.tsx",
      "IosMapLocationWidget",
      {
        description:
          "Map pin widget with your city name — simple location card in the iOS family. Good for travel apps, weather screens, or profile headers.",
        usage: '<IosMapLocationWidget city="Kolkata" />',
      },
    ),
    c(
      "focus-breath",
      <FocusBreathWidget />,
      "components/activity/focus-breath-widget.tsx",
      "FocusBreathWidget",
      {
        description:
          "A breathing guide that pulses between inhale and exhale every four seconds. One tap to start — useful in wellness or focus flows.",
        usage: '<FocusBreathWidget label="Breathe" />',
      },
    ),
    c(
      "blob-profile",
      <BlobProfileCard />,
      "components/profile/blob-profile.tsx",
      "BlobProfileCard",
      {
        description:
          "Profile card with an organic blob-shaped photo frame, name, verified check, and handle. Stands out from every circular-avatar layout on the web.",
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
        description:
          "Month grid with a highlighted day — like a lightweight activity calendar without the GitHub heatmap complexity. Good for habit trackers and dashboards.",
        usage:
          '<DailyActivityCalendarWidget month="August 2024" year={2024} highlightDay={15} />',
      },
    ),
    c(
      "audio-recorder",
      <AudioRecorderWidget />,
      "components/audio/audio-recorder-widget.tsx",
      "AudioRecorderWidget",
      {
        description:
          "Dark recording card with title, date, animated red waveform, and elapsed time. Play and pause feel like a native voice memo app.",
        usage: '<AudioRecorderWidget title="New Audio" date="12.8.24" />',
      },
    ),
    c(
      "flight-arrival",
      <FlightArrivalWidget />,
      "components/travel/flight-arrival-widget.tsx",
      "FlightArrivalWidget",
      {
        description:
          "Countdown to landing with departure and arrival airports and a plane moving along a progress bar. Built for travel dashboards and trip widgets.",
        usage: "<FlightArrivalWidget arrivalMinutes={53} />",
      },
    ),
  ],
  [
    c(
      "minimal-agenda",
      <MinimalAgendaWidget />,
      "components/travel/minimal-agenda-widget.tsx",
      "MinimalAgendaWidget",
      {
        description:
          "Today's tasks with times — tap a row to mark it done with a strikethrough and checkmark. Clean enough for a daily planner sidebar.",
      },
    ),
    c(
      "ride-pickup",
      <RidePickupWidget />,
      "components/travel/ride-pickup-widget.tsx",
      "RidePickupWidget",
      {
        description:
          "Uber-style pickup card with brand, ETA, car illustration, and vehicle ID. The waiting-screen moment, ready to paste into a mobility app.",
        usage:
          '<RidePickupWidget eta="2 min" message="Meet at the pickup point" vehicle="Mercedes-Benz S00121" image="/car.png" />',
      },
    ),
    c(
      "electric-scooter",
      <ElectricScooterWidget />,
      "components/travel/electric-scooter-widget.tsx",
      "ElectricScooterWidget",
      {
        description:
          "Ride summary with scooter photo, distance, average speed, and duration. Leaf icon included — built for micro-mobility or fitness stats.",
      },
    ),
  ],
  [
    c(
      "laptop",
      <LaptopMockupCard />,
      "components/mockups/laptop-mockup-card.tsx",
      "LaptopMockupCard",
      {
        description:
          "MacBook Pro frame wrapping your screenshot — black lid and bezel with a gray outer frame and base. Pass variant=\"titanium\" for a titanium outer frame and base.",
        usage: '<LaptopMockupCard variant="titanium" />',
      },
    ),
    c(
      "phone",
      <PhoneMockupCard />,
      "components/mockups/phone-mockup-card.tsx",
      "PhoneMockupCard",
      {
        description:
          "iPhone 15 Pro frame with Dynamic Island and a full-screen preview slot. Pass variant for purple, orange, white, titanium, or cherry finishes. Use visibleRatio to crop from the top, and showDynamicIsland to toggle the island and camera.",
        usage:
          '<PhoneMockupCard variant="titanium" visibleRatio={2 / 3} showDynamicIsland={false} />',
      },
    ),
  ],
  [
    c(
      "browser",
      <BrowserMockupCard />,
      "components/mockups/browser-mockup-card.tsx",
      "BrowserMockupCard",
      {
        description:
          "Desktop browser chrome with traffic lights and a URL bar framing your website screenshot. Pass theme for light, dark, or transparent chrome.",
        usage:
          '<BrowserMockupCard theme="dark" url="yoursite.com/dashboard" />',
      },
    ),
  ],
  [
    c(
      "polaroid-image",
      <PolaroidImageCard />,
      "components/gallery/polaroid-image-card.tsx",
      "PolaroidImageCard",
      {
        description:
          "Classic white polaroid with photo, caption, and date — slight tilt that straightens on hover. Nostalgic without feeling like a filter preset.",
        usage:
          '<PolaroidImageCard image="/your-photo.jpg" imageAlt="Summer trip" caption="Goa, 2024" />',
      },
    ),
    c(
      "notepad",
      <NotepadCard />,
      "components/text/notepad-card.tsx",
      "NotepadCard",
      {
        description:
          "Sticky notepad with an italic quote, author line, and checkbox task list. Bookmark ribbon on top — good for editorial or productivity layouts.",
        usage:
          '<NotepadCard title="Note to self" quote="Your quote here" author="Name" checklist={["One", "Two"]} />',
      },
    ),
    c(
      "thermal-receipt",
      <ThermalReceiptCard />,
      "components/others/thermal-receipt-card.tsx",
      "ThermalReceiptCard",
      {
        description:
          "Monospace receipt with line items, tax, total, perforated edges, and a QR footer. Reads like paper from a real register.",
      },
    ),
  ],
  [
    c(
      "instagram-post",
      <InstagramPostCard />,
      "components/instagram/instagram-post-card.tsx",
      "InstagramPostCard",
      {
        description:
          "Full Instagram post layout — header, square image, action icons, like count, caption, and timestamp. Looks native, props for your content.",
        usage:
          '<InstagramPostCard username="you" caption="Your caption" avatar="/avatar.png" postImage="/post.jpg" />',
      },
    ),
    c(
      "threads-post",
      <ThreadsPostCard />,
      "components/facebook/threads-post-card.tsx",
      "ThreadsPostCard",
      {
        description:
          "Threads-style post with avatar thread line, text, optional image, and engagement counts. Like toggles on tap.",
        usage:
          '<ThreadsPostCard username="you" content="Your thread text" avatar="/avatar.png" />',
      },
    ),
  ],
  [
    c(
      "now-playing-bar",
      <NowPlayingBar />,
      "components/audio/now-playing-bar.tsx",
      "NowPlayingBar",
      {
        description:
          "Compact dark player bar with artwork, track info, transport controls, and a scrubber. The footer bar every music app eventually needs.",
      },
    ),
    c(
      "twitter-post",
      <TwitterPostCard />,
      "components/twitter/twitter-post-card.tsx",
      "TwitterPostCard",
      {
        description:
          "Tweet card with avatar, handle, timestamp, hashtags, and full engagement row. For social embeds, mockups, or feed previews.",
      },
    ),
    c(
      "film-strip",
      <FilmStripCard />,
      "components/gallery/film-strip-card.tsx",
      "FilmStripCard",
      {
        description:
          "Horizontal 35mm strip with sprocket holes and multiple frames. Roll label up top — great for photo galleries and vintage layouts.",
      },
    ),
  ],
  [
    c(
      "github-contribution",
      <GithubContributionCard />,
      "components/github/github-contribution.tsx",
      "GithubContributionCard",
      {
        description:
          "GitHub-style contribution heatmap with year selector, total count, and Less/More legend. Pulls real data when you pass a username.",
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
        description:
          "Frosted iOS notification with app name, sender, message, and avatar — dismisses with animation and can be triggered again via button.",
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
        description:
          "Folder icon you can right-click or tap to open a centered action menu — edit, duplicate, pin, move, delete. Keyboard-friendly item hints included.",
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
        description:
          "Account pill with avatar, name, and email that opens into profile, settings, messages, and sign out. The header dropdown every SaaS app needs, with keyboard shortcut labels.",
        usage:
          '<UserMenuDropdown userName="Your Name" userEmail="you@email.com" avatarSrc="/avatar.png" />',
      },
    ),
  ],
  [
    c(
      "cinema-ticket",
      <CinemaTicketCard />,
      "components/text/cinema-ticket-card.tsx",
      "CinemaTicketCard",
      {
        description:
          "Split cinema ticket with film title, venue, screen, seats, show time, and a perforated stub. Dark ticket stock that feels printed, not flat.",
      },
    ),
    c(
      "wallet-pass",
      <WalletPassCard />,
      "components/wallet/wallet-pass-card.tsx",
      "WalletPassCard",
      {
        description:
          "Flippable membership pass — gradient front with tier and expiry, QR grid on the back. Tap or hover to flip between sides.",
      },
    ),
    c(
      "credit-card-glass",
      <CreditCardGlass />,
      "components/users/credit-card-glass.tsx",
      "CreditCardGlass",
      {
        description:
          "Glassmorphism payment card with chip, masked number, holder name, and expiry. Glow on hover — fintech landing pages eat this up.",
      },
    ),
  ],
  [
    c(
      "drop-cap-editorial",
      <DropCapEditorialCard />,
      "components/text/drop-cap-editorial-card.tsx",
      "DropCapEditorialCard",
      {
        description:
          "Editorial quote block with a large drop-cap letter, body text, and author attribution. Magazine typography without opening InDesign.",
      },
    ),

    c(
      "editorial-quote",
      <EditorialQuoteCard />,
      "components/text/editorial-quote-card.tsx",
      "EditorialQuoteCard",
      {
        description:
          "Pull quote with issue metadata and a highlighted word inside the line — author and role at the bottom. Built for case studies and long reads.",
      },
    ),
    c(
      "discord-chat",
      <DiscordChatCard />,
      "components/discord/discord-chat-card.tsx",
      "DiscordChatCard",
      {
        description:
          "Dark Discord channel with server header, threaded messages, avatars, timestamps, and a send input. Community product mockups in one card.",
      },
    ),
  ],
  [
    c(
      "linked-in-profile",
      <LinkedInProfileCard />,
      "components/linkedin/linked-in-profile-card.tsx",
      "LinkedInProfileCard",
      {
        description:
          "LinkedIn profile card with cover photo, avatar, headline, stats, bio, and Connect/Message buttons. Professional social, component-sized.",
      },
    ),
    c(
      "facebook-post",
      <FacebookPostCard />,
      "components/facebook/facebook-post-card.tsx",
      "FacebookPostCard",
      {
        description:
          "Facebook feed post with reactions, comments, share counts, optional image, and the full action bar. Familiar layout, your content.",
      },
    ),
    c(
      "twitter-profile",
      <TwitterProfileCard />,
      "components/twitter/twitter-profile-card.tsx",
      "TwitterProfileCard",
      {
        description:
          "Twitter/X profile with cover, avatar, bio, location, website link, and follower counts. Follow button included.",
      },
    ),
  ],

  [
    c(
      "event-ticket",
      <EventTicketCard />,
      "components/event/event-ticket-card.tsx",
      "EventTicketCard",
      {
        description:
          "Perforated event ticket with a cover-image date block and VIP pass details on the right. Concert, conference, or launch night — same component.",
      },
    ),
    c(
      "flight-boarding",
      <FlightBoardingCard />,
      "components/travel/flight-boarding-card.tsx",
      "FlightBoardingCard",
      {
        description:
          "Airline boarding pass with tear line, route codes, seat, gate, boarding time, and passenger name. Travel mockups that feel airport-real.",
      },
    ),
    c(
      "gallery-grid",
      <GalleryGridCard />,
      "components/gallery/gallery-grid-card.tsx",
      "GalleryGridCard",
      {
        description:
          "Album preview with title, subtitle, and a three-cell photo grid — last cell shows a +N overflow count. Portfolio and gallery index pages.",
      },
    ),
  ],
  [
    c(
      "glass-overlay-image",
      <GlassOverlayImageCard />,
      "components/gallery/glass-overlay-image-card.tsx",
      "GlassOverlayImageCard",
      {
        description:
          "Full-bleed photo with frosted bottom panel — location, title, saved avatars, and Explore CTA. Like and share buttons float top-right.",
      },
    ),
    c(
      "photo-album",
      <PhotoAlbumCard />,
      "components/gallery/photo-album-card.tsx",
      "PhotoAlbumCard",
      {
        description:
          "Swipeable square photo carousel with place and date caption plus dot indicators. Swap in your own photos and tell a travel story.",
      },
    ),
    c(
      "magazine-cover",
      <MagazineCoverCard />,
      "components/text/magazine-cover-card.tsx",
      "MagazineCoverCard",
      {
        description:
          "Tall magazine cover with issue badge, category, title, author, and read time. Hover zoom on the cover image — editorial hero material.",
      },
    ),
  ],
  [
    c(
      "journal-writing",
      <JournalWritingCard />,
      "components/text/journal-writing-card.tsx",
      "JournalWritingCard",
      {
        description:
          "Journal card with title, date header, editable textarea, live word count, and saving status. The writing flow, not just a static textarea mockup.",
      },
    ),
    c(
      "terminal-log",
      <TerminalLogCard />,
      "components/others/terminal-log-card.tsx",
      "TerminalLogCard",
      {
        description:
          "macOS terminal window with traffic-light dots, colored log lines, blinking cursor, and status footer. Dev tool aesthetic for changelogs or demos.",
      },
    ),
    c(
      "keyboard-shortcuts",
      <KeyboardShortcutsCard />,
      "components/text/keyboard-shortcuts-card.tsx",
      "KeyboardShortcutsCard",
      {
        description:
          "Shortcut reference card with rendered key caps and a ⌘K header hint. Docs pages and onboarding modals use this constantly.",
      },
    ),
  ],
  [
    c(
      "github-repo",
      <GitHubRepoCard />,
      "components/github/github-repo-card.tsx",
      "GitHubRepoCard",
      {
        description:
          "GitHub repo card with owner, description, language dot, star/fork counts, and a toggleable Star button. Open source landing pages, simplified.",
      },
    ),
    c(
      "museum-placard",
      <MuseumPlacardCard />,
      "components/gallery/museum-placard-card.tsx",
      "MuseumPlacardCard",
      {
        title: "Museum Placard",
        description:
          "Gallery exhibition label that flips to reveal curator notes and acquisition details. Art portfolios and culture sites love this interaction.",
        usage:
          '<MuseumPlacardCard artist="Name" title="Artwork title" year="2024" />',
      },
    ),
    c(
      "linked-in-post",
      <LinkedInPostCard />,
      "components/linkedin/linked-in-post-card.tsx",
      "LinkedInPostCard",
      {
        description:
          "LinkedIn feed post with headline, body text, link preview card, reaction counts, and like/comment/repost/send actions.",
      },
    ),
  ],
  [
    c(
      "music-player",
      <MusicPlayerCard />,
      "components/audio/music-player-card.tsx",
      "MusicPlayerCard",
      {
        description:
          "Full dark player card with cover art, album info, progress scrubber with times, and transport controls. Not a bar — the whole now-playing screen.",
      },
    ),
    c(
      "photo-contact-sheet",
      <PhotoContactSheetCard />,
      "components/gallery/photo-contact-sheet-card.tsx",
      "PhotoContactSheetCard",
      {
        description:
          "Film contact sheet with a 2×2 numbered frame grid and roll label header. Photographer portfolio vibes, straight from the darkroom.",
      },
    ),
    c(
      "music-playlist",
      <MusicPlaylistCard />,
      "components/audio/music-playlist-card.tsx",
      "MusicPlaylistCard",
      {
        description:
          "Playlist card with cover, header stats, and a track list where each row toggles play independently. One component, full playlist UI.",
      },
    ),
  ],
  [
    c(
      "stacked-cards-effect",
      <StackedCardsEffect />,
      "components/others/stacked-cards-effect.tsx",
      "StackedCardsEffect",
      {
        description:
          "Three skewed cards fanned behind a front hero card — hover brings subtle motion. Collection and portfolio layouts with depth, no Three.js required.",
      },
    ),
    c(
      "retail-price-tag",
      <RetailPriceTagCard />,
      "components/pricing/retail-price-tag-card.tsx",
      "RetailPriceTagCard",
      {
        description:
          "Hanging store tag with discount badge, sale price, SKU, and barcode stripes. E-commerce editorial and product drops.",
      },
    ),
    c(
      "stamp-postcard",
      <StampPostcardCard />,
      "components/gallery/stamp-postcard-card.tsx",
      "StampPostcardCard",
      {
        description:
          "Vintage postcard with landscape photo, postage stamp overlay, handwritten message, and posted-from address. Travel and lifestyle brands love this one.",
      },
    ),
  ],
  [
    c(
      "progress-ring",
      <ProgressRingCard />,
      "components/others/progress-ring-card.tsx",
      "ProgressRingCard",
      {
        description:
          "Animated SVG ring with percentage label and clickable stage rows below. Defaults to Design/Development/Testing — pass your own milestones.",
      },
    ),
    c(
      "team-member",
      <TeamMemberCard />,
      "components/users/team-member-card.tsx",
      "TeamMemberCard",
      {
        description:
          "Full-bleed portrait card — hover reveals GitHub and mail buttons, role, name, and bio. About pages without the generic card grid.",
      },
    ),

    c(
      "testimonial",
      <TestimonialCard />,
      "components/users/testimonial-card.tsx",
      "TestimonialCard",
      {
        description:
          "Auto-advancing testimonial carousel with stars, quote, avatar, and dot navigation. Social proof that moves on its own.",
      },
    ),
  ],
  [
    c(
      "toggle-pricing-cards",
      <TogglePricingCards />,
      "components/pricing/toggle-pricing-cards.tsx",
      "TogglePricingCards",
      {
        description:
          "Monthly and yearly billing toggle that updates three plan cards side by side — price and feature checklist included. SaaS pricing page, one paste away.",
      },
    ),
    c(
      "travel-postcard",
      <TravelPostcardCard />,
      "components/travel/travel-postcard-card.tsx",
      "TravelPostcardCard",
      {
        description:
          "Vintage sepia postcard with map badge, greeting title, location, and author signature. Wanderlust landing pages and newsletter headers.",
      },
    ),
  ],
  [
    c(
      "slow-living-polaroid",
      <SlowLivingPolaroidCard />,
      "components/gallery/slow-living-polaroid-card.tsx",
      "SlowLivingPolaroidCard",
      {
        description:
          "Dark editorial layout with a taped, tilted polaroid and lowercase lifestyle copy. Slow living, coffee brands, quiet product launches.",
      },
    ),
    c(
      "denim-product-editorial",
      <DenimProductEditorialCard />,
      "components/text/denim-product-editorial-card.tsx",
      "DenimProductEditorialCard",
      {
        description:
          "Fashion editorial with two square photos, rotated callout labels, and uppercase product description. Lookbook energy for apparel and accessories.",
      },
    ),
    c(
      "daily-motivation",
      <DailyMotivationCard />,
      "components/text/daily-motivation-card.tsx",
      "DailyMotivationCard",
      {
        description:
          "Editorial poster with multi-line headline, flower icon, tilted polaroid, and a GOOD DAY sticker. Morning routine apps and wellness newsletters.",
      },
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
