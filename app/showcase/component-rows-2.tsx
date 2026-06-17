import type { Row } from "@/types/types";

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

export const showcaseRows02Social: Row[] = [
  [
    <LaptopMockupCard key="laptop-mockup" />,
    <PhoneMockupCard key="phone-mockup" />,
  ],
  [<BrowserMockupCard key="browser-mockup" />],
  [
    <PolaroidImageCard key="polaroid-image" />,
    <NotepadCard key="notepad" />,
    <ThermalReceiptCard key="thermal-receipt" />,
  ],
  [
    <InstagramPostCard key="instagram-post" />,
    <ThreadsPostCard key="threads-post" />,
  ],
  [<GithubContributionCard key="github-contribution" />],
  [
    <AppleNotificationBanner key="apple-notification" />,
    <ContextMenuDropdown key="context-menu" />,
    <UserMenuDropdown key="user-menu" />,
  ],
];
