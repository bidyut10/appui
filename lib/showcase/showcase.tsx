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
import { HeartRateWidget } from "@/components/activity/heart-rate-widget";
import { HydrationWidget } from "@/components/activity/hydration-widget";
import { PomodoroWidget } from "@/components/activity/pomodoro-widget";
import { SleepScoreWidget } from "@/components/activity/sleep-score-widget";
import { StepCountWidget } from "@/components/activity/step-count-widget";
import { AudioRecorderWidget } from "@/components/audio/audio-recorder-widget";
import { IosEarbudsWidget } from "@/components/audio/ios-earbuds-widget";
import { RecorderFaceWidget } from "@/components/audio/recorder-face-widget";
import { VoiceAssistantWidget } from "@/components/audio/voice-assistant-widget";
import { BatteryFaceWidget } from "@/components/battery/battery-face-widget";
import { AddToCartButton } from "@/components/buttons/add-to-cart-button";
import { BookmarkSaveButton } from "@/components/buttons/bookmark-save-button";
import { CopyButton } from "@/components/buttons/copy-button";
import { DownloadButton } from "@/components/buttons/download-button";
import { FollowButton } from "@/components/buttons/follow-button";
import { HoldToDeleteButton } from "@/components/buttons/hold-to-delete-button";
import { LikeButton } from "@/components/buttons/like-button";
import { QuantityStepperButton } from "@/components/buttons/quantity-stepper-button";
import { SegmentedToggleButton } from "@/components/buttons/segmented-toggle-button";
import { SlideToConfirmButton } from "@/components/buttons/slide-to-confirm-button";
import { BluetoothFaceWidget } from "@/components/bluetooth/bluetooth-face-widget";
import { BookingSlotCalendar } from "@/components/calender/booking-slot-calendar";
import { DailyActivityCalendarWidget } from "@/components/calender/daily-activity-calendar-widget";
import { DateRangePickerCard } from "@/components/calender/date-range-picker-card";
import { EventCountdownCard } from "@/components/calender/event-countdown-card";
import { IosCalenderWidget } from "@/components/calender/ios-calender-widget";
import { MonthPickerCalendar } from "@/components/calender/month-picker-calendar";
import { WeekStripCalendar } from "@/components/calender/week-strip-calendar";
import { CustomersTable } from "@/components/table/customers-table";
import { OrdersTable } from "@/components/table/orders-table";
import { RecentTransactionsTable } from "@/components/table/recent-transactions-table";
import { ResourceLinksPanel } from "@/components/resources/resource-links-panel";
import { TasksTable } from "@/components/table/tasks-table";
import { TeamMembersTable } from "@/components/table/team-members-table";
import { UsersSelectTable } from "@/components/table/users-select-table";
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
import { ComboboxFieldInput } from "@/components/inputs/combobox-field-input";
import { DateFieldInput } from "@/components/inputs/date-field-input";
import { FileUploadFieldInput } from "@/components/inputs/file-upload-field-input";
import { FloatingLabelFieldInput } from "@/components/inputs/floating-label-field-input";
import { CheckboxFieldInput } from "@/components/inputs/checkbox-field-input";
import { InputGroupField } from "@/components/inputs/input-group-field";
import { PasswordFieldInput } from "@/components/inputs/password-field-input";
import { PhoneFieldInput } from "@/components/inputs/phone-field-input";
import { RadioGroupFieldInput } from "@/components/inputs/radio-group-field-input";
import { SearchInput } from "@/components/inputs/search-input";
import { SelectFieldInput } from "@/components/inputs/select-field-input";
import { SwitchFieldInput } from "@/components/inputs/switch-field-input";
import { TextFieldInput } from "@/components/inputs/text-field-input";
import { TextareaFieldInput } from "@/components/inputs/textarea-field-input";
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
import { StackedFolderCard } from "@/components/files/stacked-folder-card";
import { OpensourceFolderTabCard } from "@/components/folder/opensource-folder-tab-card";
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
import { FileMenuDropdown } from "@/components/dropdowns/file-menu-dropdown";
import { FilterSortDropdown } from "@/components/dropdowns/filter-sort-dropdown";
import { KebabActionsDropdown } from "@/components/dropdowns/kebab-actions-dropdown";
import { NotificationDropdown } from "@/components/dropdowns/notification-dropdown";
import { ShareMenuDropdown } from "@/components/dropdowns/share-menu-dropdown";
import { UserMenuDropdown } from "@/components/dropdowns/user-menu-dropdown";
import { WorkspaceSwitcherDropdown } from "@/components/dropdowns/workspace-switcher-dropdown";
import { GithubContributionCard } from "@/components/github/github-contribution";
import { IosMapLocationWidget } from "@/components/map-location/ios-map-location-widget";
import { BrowserMockupCard } from "@/components/mockups/browser-mockup-card";
import { LaptopMockupCard } from "@/components/mockups/laptop-mockup-card";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { AppleNotificationBanner } from "@/components/notifications/apple-notification-banner";
import { CalendarReminderNotificationBanner } from "@/components/notifications/calendar-reminder-notification-banner";
import { ChatBubbleNotificationBanner } from "@/components/notifications/chat-bubble-notification-banner";
import { DeliveryNotificationBanner } from "@/components/notifications/delivery-notification-banner";
import { DeployNotificationBanner } from "@/components/notifications/deploy-notification-banner";
import { EmailNotificationBanner } from "@/components/notifications/email-notification-banner";
import { IncomingCallNotificationBanner } from "@/components/notifications/incoming-call-notification-banner";
import { PaymentNotificationBanner } from "@/components/notifications/payment-notification-banner";
import { SystemAlertBanner } from "@/components/notifications/system-alert-banner";
import { ToastNotificationBanner } from "@/components/notifications/toast-notification-banner";
import { BlobProfileCard } from "@/components/profile/blob-profile";
import { StopwatchWidget } from "@/components/stopwatch/stopwatch-widget";
import { TorchFaceWidget } from "@/components/torch/torch-face-widget";
import { ElectricScooterWidget } from "@/components/travel/electric-scooter-widget";
import { FlightArrivalWidget } from "@/components/travel/flight-arrival-widget";
import { MinimalAgendaWidget } from "@/components/travel/minimal-agenda-widget";
import { RidePickupWidget } from "@/components/travel/ride-pickup-widget";
import { WiFiToggleWidget } from "@/components/wifi/wifi-toggle-widget";
import { AnnotatedTextShowcase, ANNOTATED_TEXT_USAGE } from "@/components/underlines/annotated-text-showcase";
import { OtpBoxedInput } from "@/components/otp/otp-boxed-input";
import { OtpUnderlineInput } from "@/components/otp/otp-underline-input";

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
      "slide-to-confirm-button",
      <SlideToConfirmButton />,
      "components/buttons/slide-to-confirm-button.tsx",
      "SlideToConfirmButton",
      {
        description:
          "Drag the knob across the track to commit an action — snaps back if you release early, locks green when confirmed. Great for irreversible or high-intent actions.",
        usage:
          '<SlideToConfirmButton label="Slide to pay" onConfirm={handlePay} />',
      },
    ),
    c(
      "hold-to-delete-button",
      <HoldToDeleteButton />,
      "components/buttons/hold-to-delete-button.tsx",
      "HoldToDeleteButton",
      {
        description:
          "Press and hold as a fill sweeps across; release early to cancel, hold to the end to delete. Prevents accidental destructive taps.",
        usage:
          '<HoldToDeleteButton holdMs={1100} onHoldComplete={handleDelete} />',
      },
    ),
  ],
  [
    c(
      "add-to-cart-button",
      <AddToCartButton />,
      "components/buttons/add-to-cart-button.tsx",
      "AddToCartButton",
      {
        description:
          "A single button that morphs through idle → loading → added, then settles back. The label slides vertically between states — no layout shift.",
        usage: '<AddToCartButton label="Add to cart" loadingMs={1200} />',
      },
    ),
    c(
      "like-button",
      <LikeButton />,
      "components/buttons/like-button.tsx",
      "LikeButton",
      {
        description:
          "Heart toggle that pops and scatters particles on the way up, with a live count. Pill fills rose when active — no glow, no gradient.",
        usage: '<LikeButton count={128} defaultLiked={false} />',
      },
    ),
    c(
      "copy-button",
      <CopyButton />,
      "components/buttons/copy-button.tsx",
      "CopyButton",
      {
        description:
          "Copies text to the clipboard and cross-fades the copy icon into a check with a Copied label. Monospace value, resets on its own.",
        usage: '<CopyButton value="npm i @appui/components" />',
      },
    ),
  ],
  [
    c(
      "quantity-stepper-button",
      <QuantityStepperButton />,
      "components/buttons/quantity-stepper-button.tsx",
      "QuantityStepperButton",
      {
        description:
          "Inline minus / count / plus control for carts and forms. Clamps between min and max, disables at the edges.",
        usage: '<QuantityStepperButton value={1} min={0} max={99} onChange={setQty} />',
      },
    ),
    c(
      "download-button",
      <DownloadButton />,
      "components/buttons/download-button.tsx",
      "DownloadButton",
      {
        description:
          "Download with a horizontal sky fill while the file loads, then a green done state. Different rhythm from the add-to-cart morph.",
        usage: '<DownloadButton label="Download" onDownload={fetchFile} />',
      },
    ),
    c(
      "follow-button",
      <FollowButton />,
      "components/buttons/follow-button.tsx",
      "FollowButton",
      {
        description:
          "Social follow toggle — dark Follow pill becomes a quiet Following state with a user-check icon. Tap again to unfollow.",
        usage: '<FollowButton label="Follow" followingLabel="Following" />',
      },
    ),
  ],
  [
    c(
      "bookmark-save-button",
      <BookmarkSaveButton />,
      "components/buttons/bookmark-save-button.tsx",
      "BookmarkSaveButton",
      {
        description:
          "Save for later — bookmark icon fills amber and label swaps to Saved. Square-ish control for articles and products.",
        usage: '<BookmarkSaveButton label="Save" savedLabel="Saved" />',
      },
    ),
    c(
      "segmented-toggle-button",
      <SegmentedToggleButton />,
      "components/buttons/segmented-toggle-button.tsx",
      "SegmentedToggleButton",
      {
        description:
          "iOS segmented control — sliding white pill between Day, Week, and Month. Pass your own options array for view modes or filters.",
        usage:
          '<SegmentedToggleButton options={["Day", "Week", "Month"]} onChange={(i, v) => {}} />',
      },
    ),
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
      "step-count",
      <StepCountWidget />,
      "components/activity/step-count-widget.tsx",
      "StepCountWidget",
      {
        description:
          "Editorial step stat — light wide card, large number, goal in a quiet footer row. No progress bars or icons.",
        usage: '<StepCountWidget steps={8432} goal={10000} label="steps today" />',
      },
    ),
    c(
      "pomodoro",
      <PomodoroWidget />,
      "components/activity/pomodoro-widget.tsx",
      "PomodoroWidget",
      {
        description:
          "Dark pomodoro timer — thin ring, split monospace time, tap to start or pause. Polished to match the DND card size and proportions.",
        usage: '<PomodoroWidget minutes={25} label="Focus" />',
      },
    ),
    c(
      "hydration",
      <HydrationWidget />,
      "components/activity/hydration-widget.tsx",
      "HydrationWidget",
      {
        description:
          "Tall bottle card — count at the top, water level rises inside a simple bottle outline. Tap to log a glass.",
        usage: '<HydrationWidget glasses={5} goal={8} label="glasses" />',
      },
    ),
  ],
  [
    c(
      "sleep-score",
      <SleepScoreWidget />,
      "components/activity/sleep-score-widget.tsx",
      "SleepScoreWidget",
      {
        description:
          "Sleep score in the DND face layout — sleeping mascot at the bottom, score and quality above, duration tucked below.",
        usage: '<SleepScoreWidget score={87} quality="Good" duration="7h 24m" />',
      },
    ),
    c(
      "heart-rate",
      <HeartRateWidget />,
      "components/activity/heart-rate-widget.tsx",
      "HeartRateWidget",
      {
        description:
          "Heart rate in the DND face layout — mascot at the bottom, BPM above the dial, soft pulse on the ring.",
        usage: '<HeartRateWidget bpm={72} />',
      },
    ),
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
  ],
  [
    c(
      "month-picker-calendar",
      <MonthPickerCalendar />,
      "components/calender/month-picker-calendar.tsx",
      "MonthPickerCalendar",
      {
        description:
          "Full month picker with prev/next navigation — tap any day to select it, today gets a quiet ring.",
        usage: '<MonthPickerCalendar onSelect={(date) => console.log(date)} />',
      },
    ),
    c(
      "week-strip-calendar",
      <WeekStripCalendar />,
      "components/calender/week-strip-calendar.tsx",
      "WeekStripCalendar",
      {
        description:
          "Horizontal week strip for booking and scheduling apps — arrow through weeks, tap a day to select.",
        usage: '<WeekStripCalendar onSelect={(date) => {}} />',
      },
    ),
    c(
      "date-range-picker",
      <DateRangePickerCard />,
      "components/calender/date-range-picker-card.tsx",
      "DateRangePickerCard",
      {
        description:
          "Travel-style date range picker — first tap sets check-in, second sets check-out, days between fill in.",
        usage: '<DateRangePickerCard onChange={(start, end) => {}} />',
      },
    ),
  ],
  [
    c(
      "team-members-table",
      <TeamMembersTable />,
      "components/table/team-members-table.tsx",
      "TeamMembersTable",
      {
        description:
          "Team members with profile photos, email, role, and status. Uses /profile-picture.png and /woman.png avatars.",
        usage: "<TeamMembersTable />",
      },
    ),
    c(
      "orders-table",
      <OrdersTable />,
      "components/table/orders-table.tsx",
      "OrdersTable",
      {
        description:
          "E-commerce orders table — sort by date, total, or status. The standard admin dashboard orders view.",
        usage: "<OrdersTable />",
      },
    ),
    c(
      "users-select-table",
      <UsersSelectTable />,
      "components/table/users-select-table.tsx",
      "UsersSelectTable",
      {
        description:
          "Bulk-select users table with header checkbox and live selection count. Clean white admin pattern for permissions or exports.",
        usage: "<UsersSelectTable />",
      },
    ),
  ],
  [
    c(
      "recent-transactions-table",
      <RecentTransactionsTable />,
      "components/table/recent-transactions-table.tsx",
      "RecentTransactionsTable",
      {
        description:
          "Stripe-style transaction list with positive and negative amounts and simple pagination.",
        usage: "<RecentTransactionsTable />",
      },
    ),
    c(
      "tasks-table",
      <TasksTable />,
      "components/table/tasks-table.tsx",
      "TasksTable",
      {
        description:
          "Project tasks with checkboxes, assignee avatars, and due dates. Tap to mark complete.",
        usage: "<TasksTable />",
      },
    ),
    c(
      "customers-table",
      <CustomersTable />,
      "components/table/customers-table.tsx",
      "CustomersTable",
      {
        description:
          "SaaS customer list with plan, last active, and MRR. Common billing dashboard table.",
        usage: "<CustomersTable />",
      },
    ),
  ],
  [
    c(
      "resource-links-panel",
      <ResourceLinksPanel className="mt-0" />,
      "components/resources/resource-links-panel.tsx",
      "ResourceLinksPanel",
      {
        description:
          "Resource link list with logo, name, description, and domain per row — same layout as the homepage Resources section. Copy and pass title + items.",
        usage:
          '<ResourceLinksPanel title="Resources" items={[{ name: "Lucide", description: "For icons", href: "https://lucide.dev", imageSrc: "/lucide-logo.svg" }]} />',
      },
    ),
    c(
      "event-countdown-card",
      <EventCountdownCard />,
      "components/calender/event-countdown-card.tsx",
      "EventCountdownCard",
      {
        description:
          "Live countdown to an event — days, hours, and minutes update every minute. Editorial typography, no ticker gimmicks.",
        usage:
          '<EventCountdownCard title="Product launch" targetDate="2026-12-01T09:00:00" />',
      },
    ),
    c(
      "booking-slot-calendar",
      <BookingSlotCalendar />,
      "components/calender/booking-slot-calendar.tsx",
      "BookingSlotCalendar",
      {
        description:
          "Appointment booking flow — week strip on top, time slots below. Unavailable slots are crossed out, tap to book.",
        usage: '<BookingSlotCalendar onBook={(date, slot) => {}} />',
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
          'MacBook Pro frame wrapping your screenshot — black lid and bezel with a gray outer frame and base. Pass variant="titanium" for a titanium outer frame and base.',
        usage: '<LaptopMockupCard variant="titanium" />',
      },
    ),
    c(
      "phone",
      <PhoneMockupCard variant="orange" />,
      "components/mockups/phone-mockup-card.tsx",
      "PhoneMockupCard",
      {
        description:
          "iPhone 15 Pro frame with Dynamic Island and a full-screen preview slot. Pass variant for purple, orange, white, titanium, or cherry finishes. Use visibleRatio to crop from the top, and showDynamicIsland to toggle the island and camera.",
        usage:
          '<PhoneMockupCard variant="orange" visibleRatio={2 / 3} showDynamicIsland={false} />',
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
      "toast-notification",
      <ToastNotificationBanner />,
      "components/notifications/toast-notification-banner.tsx",
      "ToastNotificationBanner",
      {
        description:
          "Light snackbar with check icon — message, undo action, slides up on dismiss. For save confirmations and quick feedback.",
        usage:
          '<ToastNotificationBanner message="Changes saved" actionLabel="Undo" />',
      },
    ),
    c(
      "email-notification",
      <EmailNotificationBanner />,
      "components/notifications/email-notification-banner.tsx",
      "EmailNotificationBanner",
      {
        description:
          "Mail alert on the iOS grid — sender avatar, app name header, natural from: subject — preview body line.",
        usage:
          '<EmailNotificationBanner appName="Mail" from="Alex" subject="Re: roadmap" preview="Two notes on the timeline..." />',
      },
    ),
  ],
  [
    c(
      "system-alert",
      <SystemAlertBanner />,
      "components/notifications/system-alert-banner.tsx",
      "SystemAlertBanner",
      {
        description:
          "Settings-style iOS alert — amber app tile, title: description in one natural line. For storage, limits, and warnings.",
        usage:
          '<SystemAlertBanner appName="Settings" title="Storage" description="Your device is almost full." />',
      },
    ),
    c(
      "chat-bubble-notification",
      <ChatBubbleNotificationBanner />,
      "components/notifications/chat-bubble-notification-banner.tsx",
      "ChatBubbleNotificationBanner",
      {
        description:
          "Messenger-style bubble — small avatar, sender name, rounded message bubble with a flat tail corner.",
        usage:
          '<ChatBubbleNotificationBanner sender="Maya" message="Running 5 min late" />',
      },
    ),
    c(
      "deploy-notification",
      <DeployNotificationBanner />,
      "components/notifications/deploy-notification-banner.tsx",
      "DeployNotificationBanner",
      {
        description:
          "Deploy alert on the iOS grid — Vercel triangle tile, short status line with project, branch, and duration.",
        usage:
          '<DeployNotificationBanner appName="Vercel" project="app-ui" branch="main" duration="42s" />',
      },
    ),
  ],
  [
    c(
      "calendar-reminder-notification",
      <CalendarReminderNotificationBanner />,
      "components/notifications/calendar-reminder-notification-banner.tsx",
      "CalendarReminderNotificationBanner",
      {
        description:
          "Calendar reminder on the iOS grid — red app tile, event name, and time until it starts.",
        usage:
          '<CalendarReminderNotificationBanner event="Design review" when="in 15 minutes" />',
      },
    ),
    c(
      "payment-notification",
      <PaymentNotificationBanner />,
      "components/notifications/payment-notification-banner.tsx",
      "PaymentNotificationBanner",
      {
        description:
          "Payment received on the iOS grid — emerald tile, amount, and sender name.",
        usage:
          '<PaymentNotificationBanner amount="$128.00" from="Acme Corp" />',
      },
    ),
    c(
      "incoming-call-notification",
      <IncomingCallNotificationBanner />,
      "components/notifications/incoming-call-notification-banner.tsx",
      "IncomingCallNotificationBanner",
      {
        description:
          "Incoming call card — large avatar, caller name, FaceTime label, Accept and Decline buttons.",
        usage:
          '<IncomingCallNotificationBanner caller="Sarah Chen" callType="FaceTime Audio" />',
      },
    ),
  ],
  [
    c(
      "delivery-notification",
      <DeliveryNotificationBanner />,
      "components/notifications/delivery-notification-banner.tsx",
      "DeliveryNotificationBanner",
      {
        description:
          "Shipping update — package icon, delivery status, ETA, and order number in a compact row.",
        usage:
          '<DeliveryNotificationBanner status="Out for delivery" eta="Arriving today by 6:15 PM" orderId="#4821" />',
      },
    ),
    c(
      "file-menu",
      <FileMenuDropdown />,
      "components/dropdowns/file-menu-dropdown.tsx",
      "FileMenuDropdown",
      {
        description:
          "Folder icon you can right-click or tap to open a centered action menu — edit, duplicate, pin, move, delete. Keyboard-friendly item hints included.",
        usage:
          '<FileMenuDropdown cardTitle="My file" onItemClick={(item) => console.log(item.id)} />',
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
    c(
      "kebab-actions",
      <KebabActionsDropdown />,
      "components/dropdowns/kebab-actions-dropdown.tsx",
      "KebabActionsDropdown",
      {
        description:
          "List row that expands inline — actions open inside the same card so widths always align.",
        usage:
          '<KebabActionsDropdown onItemClick={(item) => console.log(item.id)} />',
      },
    ),
  ],
  [
    c(
      "share-menu",
      <ShareMenuDropdown />,
      "components/dropdowns/share-menu-dropdown.tsx",
      "ShareMenuDropdown",
      {
        description:
          "Square icon trigger opens a horizontal brand rail — four social tiles in a row plus a full-width copy button.",
        usage:
          '<ShareMenuDropdown copied={false} onItemClick={(item) => console.log(item.id)} />',
      },
    ),
    c(
      "notification",
      <NotificationDropdown />,
      "components/dropdowns/notification-dropdown.tsx",
      "NotificationDropdown",
      {
        description:
          "Square bell trigger with a gray inset tray — each notification is a small bordered card inside the panel.",
        usage:
          '<NotificationDropdown onNotificationClick={(n) => console.log(n.id)} />',
      },
    ),
    c(
      "filter-sort",
      <FilterSortDropdown />,
      "components/dropdowns/filter-sort-dropdown.tsx",
      "FilterSortDropdown",
      {
        description:
          "Native select-style box — dropdown is flush below the trigger with matching width and a left-border active state.",
        usage:
          '<FilterSortDropdown value="newest" onValueChange={(o) => console.log(o.id)} />',
      },
    ),
  ],
  [
    c(
      "workspace-switcher",
      <WorkspaceSwitcherDropdown />,
      "components/dropdowns/workspace-switcher-dropdown.tsx",
      "WorkspaceSwitcherDropdown",
      {
        description:
          "Rectangular org bar that expands inline — workspace list opens inside the same bordered box, not a floating panel.",
        usage:
          '<WorkspaceSwitcherDropdown onWorkspaceChange={(w) => console.log(w.id)} />',
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
      "stacked-folder-card",
      <StackedFolderCard
        imageSrc="/wallpaper-3.png"
        backImageSrc="/wallpaper-2.png"
        middleImageSrc="/wallpaper-11.png"
      />,
      "components/files/stacked-folder-card.tsx",
      "StackedFolderCard",
      {
        description:
          "Three stacked folder cards with thick white borders and smooth hover rotation — back and middle peeks bring any card to the front.",
        usage:
          '<StackedFolderCard imageSrc="/wallpaper-3.png" backImageSrc="/wallpaper-2.png" middleImageSrc="/wallpaper-11.png" />',
      },
    ),
    c(
      "opensource-folder-tab-card",
      <OpensourceFolderTabCard />,
      "components/folder/opensource-folder-tab-card.tsx",
      "OpensourceFolderTabCard",
      {
        description:
          "Folder tab card with black frame, top-half image, and dark panel showing library stats. Opensource App branding by default.",
        usage:
          '<OpensourceFolderTabCard title="UI blocks" primaryValue="116" primaryLabel="Components" />',
      },
    ),
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
    c(
      "annotated-text",
      <AnnotatedTextShowcase />,
      "components/underlines/annotated-text.tsx",
      "AnnotatedText",
      {
        description:
          "Hand-drawn text annotations — wavy underlines, highlights, arrows, brackets, and more. Pass variant and optional color to style any inline label or callout.",
        usage: ANNOTATED_TEXT_USAGE,
      },
    ),
  ],
  [
    c(
      "otp-boxed-input",
      <OtpBoxedInput autoFocus={false} destination="s•••@icloud.com" />,
      "components/otp/otp-boxed-input.tsx",
      "OtpBoxedInput",
      {
        description:
          "Full email verification card with icon header, destination text, animated square cells, progress dots, shake-on-error, and resend countdown.",
        usage:
          '<OtpBoxedInput destination="you@email.com" error={invalid} onComplete={verify} onResend={sendAgain} />',
      },
    ),
    c(
      "otp-underline-input",
      <OtpUnderlineInput autoFocus={false} />,
      "components/otp/otp-underline-input.tsx",
      "OtpUnderlineInput",
      {
        description:
          "Editorial underline OTP with serif heading and animated focus rules. Same edge-case handling as boxed — typing, delete, paste, and one-time-code autocomplete.",
        usage:
          '<OtpUnderlineInput length={6} label="Enter code" onComplete={handleVerify} />',
      },
    ),
  ],
  [
    c(
      "text-field-input",
      <TextFieldInput
        label="Full name"
        placeholder="Jane Cooper"
        hint="As shown on your government ID."
      />,
      "components/inputs/text-field-input.tsx",
      "TextFieldInput",
      {
        description:
          "Standard labeled text field with hint and error states. Supports all native input types, required marker, disabled, and full a11y wiring.",
        usage:
          '<TextFieldInput label="Email" type="email" required error={!valid} errorMessage="Invalid email." />',
      },
    ),
    c(
      "search-input",
      <SearchInput defaultValue="" placeholder="Search components…" />,
      "components/inputs/search-input.tsx",
      "SearchInput",
      {
        description:
          "Search field with leading icon and clear button. Controlled or uncontrolled value, hidden native cancel, and keyboard-friendly reset.",
        usage:
          '<SearchInput value={query} onChange={setQuery} onClear={() => setQuery("")} hint="Filter by name or category." />',
      },
    ),
    c(
      "password-field-input",
      <PasswordFieldInput placeholder="Enter password" />,
      "components/inputs/password-field-input.tsx",
      "PasswordFieldInput",
      {
        description:
          "Password input with show/hide toggle, hint text, and error state. Keeps autocomplete defaults and accessible visibility control.",
        usage:
          '<PasswordFieldInput label="Password" required autoComplete="new-password" error={weak} />',
      },
    ),
  ],
  [
    c(
      "textarea-field-input",
      <TextareaFieldInput
        placeholder="Tell us about your project…"
        defaultValue=""
      />,
      "components/inputs/textarea-field-input.tsx",
      "TextareaFieldInput",
      {
        description:
          "Multiline field with live character count, max length guard, resize support, and the same label/hint/error pattern as text fields.",
        usage:
          '<TextareaFieldInput label="Bio" maxLength={280} showCount value={bio} onChange={setBio} />',
      },
    ),
    c(
      "input-group-field",
      <InputGroupField prefix="https://" placeholder="opensourceui.in" />,
      "components/inputs/input-group-field.tsx",
      "InputGroupField",
      {
        description:
          "Grouped input with prefix and suffix slots — URLs, currency, units. Wrapper border highlights on focus; inputs use border-only focus with ring-0.",
        usage:
          '<InputGroupField label="Price" prefix="$" suffix="USD" type="number" min={0} />',
      },
    ),
    c(
      "floating-label-field-input",
      <FloatingLabelFieldInput hint="We never share your email." />,
      "components/inputs/floating-label-field-input.tsx",
      "FloatingLabelFieldInput",
      {
        description:
          "Outlined floating label that rests on the border notch when focused or filled — matches Material-style fields with autofill detection.",
        usage:
          '<FloatingLabelFieldInput label="Work email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />',
      },
    ),
  ],
  [
    c(
      "select-field-input",
      <SelectFieldInput hint="Shipping rates vary by region." />,
      "components/inputs/select-field-input.tsx",
      "SelectFieldInput",
      {
        description:
          "Custom listbox select with styled dropdown, keyboard navigation, click-outside close, and hidden input for native form posts.",
        usage:
          '<SelectFieldInput label="Country" name="country" value={country} onValueChange={setCountry} options={countries} />',
      },
    ),
    c(
      "phone-field-input",
      <PhoneFieldInput />,
      "components/inputs/phone-field-input.tsx",
      "PhoneFieldInput",
      {
        description:
          "Phone field with dial-code prefix and live US-style formatting. Returns raw digits via onChange for validation and API calls.",
        usage:
          '<PhoneFieldInput dialCode="+44" required onChange={(digits) => setPhone(digits)} />',
      },
    ),
    c(
      "checkbox-field-input",
      <CheckboxFieldInput hint="You can unsubscribe at any time." />,
      "components/inputs/checkbox-field-input.tsx",
      "CheckboxFieldInput",
      {
        description:
          "Accessible checkbox with custom mark, inline label, hint, and error. Controlled or uncontrolled checked state.",
        usage:
          '<CheckboxFieldInput required checked={accepted} onCheckedChange={setAccepted} error={!accepted} />',
      },
    ),
  ],
  [
    c(
      "switch-field-input",
      <SwitchFieldInput defaultChecked />,
      "components/inputs/switch-field-input.tsx",
      "SwitchFieldInput",
      {
        description:
          "Toggle switch with role=switch, keyboard support, hidden input for forms, and label/hint/error layout.",
        usage:
          '<SwitchFieldInput label="Dark mode" checked={enabled} onCheckedChange={setEnabled} name="dark-mode" />',
      },
    ),
  ],
  [
    c(
      "combobox-field-input",
      <ComboboxFieldInput hint="Type to filter the list." />,
      "components/inputs/combobox-field-input.tsx",
      "ComboboxFieldInput",
      {
        description:
          "Searchable combobox with filtered listbox, keyboard navigation, click-outside close, and hidden field for form posts.",
        usage:
          '<ComboboxFieldInput label="City" options={cities} value={city} onValueChange={setCity} />',
      },
    ),
    c(
      "radio-group-field-input",
      <RadioGroupFieldInput />,
      "components/inputs/radio-group-field-input.tsx",
      "RadioGroupFieldInput",
      {
        description:
          "Card-style radio group for checkout and settings flows. Vertical or horizontal layout, descriptions, and arrow-key navigation.",
        usage:
          '<RadioGroupFieldInput name="payment" value={method} onValueChange={setMethod} options={methods} />',
      },
    ),
    c(
      "file-upload-field-input",
      <FileUploadFieldInput />,
      "components/inputs/file-upload-field-input.tsx",
      "FileUploadFieldInput",
      {
        description:
          "Card-style file upload with drag-and-drop zone, browse button, format/size hints, typed file rows, and remove actions.",
        usage:
          '<FileUploadFieldInput accept=".pdf,.png" multiple maxFiles={3} onFilesChange={setFiles} />',
      },
    ),
  ],
  [
    c(
      "date-field-input",
      <DateFieldInput hint="Must match your ID document." />,
      "components/inputs/date-field-input.tsx",
      "DateFieldInput",
      {
        description:
          "Custom calendar popover with month navigation, today shortcut, min/max limits, and styled day grid — no native browser picker.",
        usage:
          '<DateFieldInput label="Start date" required min="2026-01-01" value={date} onValueChange={setDate} name="start-date" />',
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

export function isInputShowcaseFile(file: string): boolean {
  return file.startsWith("components/inputs/");
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

export type ShowcaseCategoryGroup = Readonly<{
  category: string;
  items: ShowcaseEntry[];
}>;

export function getShowcaseByCategory(): ShowcaseCategoryGroup[] {
  const groups = new Map<string, ShowcaseEntry[]>();

  for (const slug of getAllShowcaseSlugs()) {
    const entry = catalog[slug];
    const items = groups.get(entry.category) ?? [];
    items.push(entry);
    groups.set(entry.category, items);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => ({
      category,
      items: [...items].sort((a, b) => a.title.localeCompare(b.title)),
    }));
}
