/* eslint-disable react/jsx-key */
import { Box } from "./Box";
import { FacebookPostCard } from "@/components/cards/FacebookPostCard";
import { GithubContributionCard } from "@/components/cards/GithubContributionCard";
import { InstagramPostCard } from "@/components/cards/InstagramPostCard";
import { LinkedInPostCard } from "@/components/cards/LinkedInPostCard";
import { NotepadCard } from "@/components/cards/NotepadCard";
import { TwitterPostCard } from "@/components/cards/TwitterPostCard";
import { BusinessCard } from "@/components/cards/BusinessCard";
import { TwitterProfileCard } from "@/components/cards/TwitterProfileCard";
import { GoogleProfileCard } from "@/components/cards/GoogleProfileCard";
import { GithubProfileCard } from "@/components/cards/GithubProfileCard";
import { FacebookProfileCard } from "@/components/cards/FacebookProfileCard";
import { LinkedInProfileCard } from "@/components/cards/LinkedInProfileCard";
import { MagazineCoverCard } from "@/components/cards/MagazineCoverCard";
import { PolaroidImageCard } from "@/components/cards/PolaroidImageCard";
import { GlassOverlayImageCard } from "@/components/cards/GlassOverlayImageCard";
import { ProductImageCard } from "@/components/cards/ProductImageCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { MetricCard } from "@/components/cards/MetricCard";
import { BlogPostCard } from "@/components/cards/BlogPostCard";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { EventTicketCard } from "@/components/cards/EventTicketCard";
import { CreditCardGlass } from "@/components/cards/CreditCardGlass";
import { PodcastCard } from "@/components/cards/PodcastCard";
import { WeatherWidgetCard } from "@/components/cards/WeatherWidgetCard";
import { WalletPassCard } from "@/components/cards/WalletPassCard";
import { NFTGalleryCard } from "@/components/cards/NFTGalleryCard";
import { FlightBoardingCard } from "@/components/cards/FlightBoardingCard";
import { AppStoreReviewCard } from "@/components/cards/AppStoreReviewCard";
import { StackedCardsEffect } from "@/components/cards/StackedCardsEffect";
import { AuthLoginCard } from "@/components/cards/AuthLoginCard";
import { AuthSplitLoginCard } from "@/components/cards/AuthSplitLoginCard";
import { AuthOTPCard } from "@/components/cards/AuthOTPCard";
import { AuthForgotPasswordCard } from "@/components/cards/AuthForgotPasswordCard";
import { TogglePricingCards } from "@/components/cards/TogglePricingCards";
import { PricingEnterpriseCard } from "@/components/cards/PricingEnterpriseCard";
import { PricingLifetimeCard } from "@/components/cards/PricingLifetimeCard";
import { ActivityFeedCard } from "@/components/cards/ActivityFeedCard";
import { AvatarGroupCard } from "@/components/cards/AvatarGroupCard";
import { ProgressRingCard } from "@/components/cards/ProgressRingCard";
import { PaymentMethodSelector } from "@/components/cards/PaymentMethodSelector";
import { FeatureTabsCard } from "@/components/cards/FeatureTabsCard";
import { GalleryGridCard } from "@/components/cards/GalleryGridCard";
import { BeforeAfterImageCard } from "@/components/cards/BeforeAfterImageCard";
import { PortraitImageCard } from "@/components/cards/PortraitImageCard";
import { TravelPostcardCard } from "@/components/cards/TravelPostcardCard";
import { DuotoneImageCard } from "@/components/cards/DuotoneImageCard";
import { ImageCarouselCard } from "@/components/cards/ImageCarouselCard";
import { AIStreamingCard } from "@/components/cards/AIStreamingCard";
import { MusicPlayerCard } from "@/components/cards/MusicPlayerCard";
import { MusicPlaylistCard } from "@/components/cards/MusicPlaylistCard";
import { VideoThumbnailCard } from "@/components/cards/VideoThumbnailCard";
import { NowPlayingBar } from "@/components/cards/NowPlayingBar";
import { BentoFeatureGrid } from "@/components/sections/BentoFeatureGrid";
import { GradientHero } from "@/components/sections/GradientHero";
import { Timeline } from "@/components/sections/Timeline";
import { EmptyState } from "@/components/sections/EmptyState";
import { MiniFooter } from "@/components/sections/MiniFooter";
import { GlassNavbar } from "@/components/navbars/GlassNavbar";
import { NewsletterSignup } from "@/components/marketing/NewsletterSignup";
import { LogoMarquee } from "@/components/marketing/LogoMarquee";
import { CTAGradientBanner } from "@/components/marketing/CTAGradientBanner";
import { SocialProofBar } from "@/components/marketing/SocialProofBar";
import { FeatureComparison } from "@/components/marketing/FeatureComparison";
import { ChatWidget } from "@/components/interactive/ChatWidget";
import { OnboardingSteps } from "@/components/interactive/OnboardingSteps";
import { FileUploadZone } from "@/components/interactive/FileUploadZone";
import { FileUploadProgress } from "@/components/interactive/FileUploadProgress";
import { FileUploadList } from "@/components/interactive/FileUploadList";
import { ImageUploadPreview } from "@/components/interactive/ImageUploadPreview";
import { CloudUploadCard } from "@/components/interactive/CloudUploadCard";
import { MultiFileDropzone } from "@/components/interactive/MultiFileDropzone";
import { NotificationBell } from "@/components/interactive/NotificationBell";
import { KanbanBoard } from "@/components/interactive/KanbanBoard";
import { CookieBanner } from "@/components/banners/CookieBanner";
import { PhoneMockupCard } from "@/components/mockups/PhoneMockupCard";
import { BrowserMockupCard } from "@/components/mockups/BrowserMockupCard";
import { LaptopMockupCard } from "@/components/mockups/LaptopMockupCard";
import { HomeMenuBar } from "@/components/menubar/HomeMenuBar";
import { BorderedAccordion } from "@/components/accordions/BorderedAccordion";
import { MinimalAccordion } from "@/components/accordions/MinimalAccordion";
import { SearchBar } from "@/components/searchbar/SearchBar";
import { SearchBarWithResults } from "@/components/searchbar/SearchBarWithResults";
import { CommandPaletteSearch } from "@/components/searchbar/CommandPaletteSearch";
import { SpotlightSearchBar } from "@/components/searchbar/SpotlightSearchBar";
import { CategoryFilterSearch } from "@/components/searchbar/CategoryFilterSearch";
import { HomeDropdown } from "@/components/dropdowns/HomeDropdown";
import { UserMenuDropdown } from "@/components/dropdowns/UserMenuDropdown";
import { ShareMenuDropdown } from "@/components/dropdowns/ShareMenuDropdown";
import { QuickActionsDropdown } from "@/components/dropdowns/QuickActionsDropdown";
import { FilterSortDropdown } from "@/components/dropdowns/FilterSortDropdown";
import { WorkspaceSwitcherDropdown } from "@/components/dropdowns/WorkspaceSwitcherDropdown";
import { LanguagePickerDropdown } from "@/components/dropdowns/LanguagePickerDropdown";
import { ThemeColorDropdown } from "@/components/dropdowns/ThemeColorDropdown";
import { DateRangeDropdown } from "@/components/dropdowns/DateRangeDropdown";
import { ContextMenuDropdown } from "@/components/dropdowns/ContextMenuDropdown";
import { NotificationToast } from "@/components/toasts/NotificationToast";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton";
import { ProfileSkeleton } from "@/components/skeletons/ProfileSkeleton";
import { ChatSkeleton } from "@/components/skeletons/ChatSkeleton";
import { DashboardSkeleton } from "@/components/skeletons/DashboardSkeleton";
import { PricingSkeleton } from "@/components/skeletons/PricingSkeleton";
import { ImageGridSkeleton } from "@/components/skeletons/ImageGridSkeleton";
import { TableSkeleton } from "@/components/skeletons/TableSkeleton";
import { RevenueStatCard } from "@/components/dashboard/RevenueStatCard";
import { SalesOverviewCard } from "@/components/dashboard/SalesOverviewCard";
import { UserGrowthCard } from "@/components/dashboard/UserGrowthCard";
import { TopProductsCard } from "@/components/dashboard/TopProductsCard";
import { RecentOrdersCard } from "@/components/dashboard/RecentOrdersCard";
import { TrafficSourcesCard } from "@/components/dashboard/TrafficSourcesCard";
import { ConversionFunnelCard } from "@/components/dashboard/ConversionFunnelCard";
import { StorageUsageCard } from "@/components/dashboard/StorageUsageCard";
import { ServerStatusCard } from "@/components/dashboard/ServerStatusCard";
import { TaskSummaryCard } from "@/components/dashboard/TaskSummaryCard";
import { CalendarWidgetCard } from "@/components/dashboard/CalendarWidgetCard";
import { LeaderboardCard } from "@/components/dashboard/LeaderboardCard";
import { QuickStatsRow } from "@/components/dashboard/QuickStatsRow";
import { DashboardWelcomeHeader } from "@/components/dashboard/DashboardWelcomeHeader";
import { DashboardSidebarMini } from "@/components/dashboard/DashboardSidebarMini";
import { AnalyticsMiniCard } from "@/components/dashboard/AnalyticsMiniCard";
import { BreadcrumbNav } from "@/components/website/BreadcrumbNav";
import { PaginationBar } from "@/components/website/PaginationBar";
import { AlertBanners } from "@/components/website/AlertBanners";
import { ConfirmDialogCard } from "@/components/website/ConfirmDialogCard";
import { SettingsToggleCard } from "@/components/website/SettingsToggleCard";
import { FAQSectionCard } from "@/components/website/FAQSectionCard";
import { ContactInfoCard } from "@/components/website/ContactInfoCard";
import { BillingHistoryCard } from "@/components/website/BillingHistoryCard";
import { InviteTeamCard } from "@/components/website/InviteTeamCard";
import { SecuritySettingsCard } from "@/components/website/SecuritySettingsCard";
import { Error404Card } from "@/components/website/Error404Card";
import { MapLocationCard } from "@/components/website/MapLocationCard";
import { MaintenanceCard } from "@/components/website/MaintenanceCard";
import { AppleGlassCard } from "@/components/apple/AppleGlassCard";
import { AppleSettingsList } from "@/components/apple/AppleSettingsList";
import { AppleNotificationBanner } from "@/components/apple/AppleNotificationBanner";
import { AppleControlCenter } from "@/components/apple/AppleControlCenter";
import { AppleMapsCard } from "@/components/apple/AppleMapsCard";
import { AppleMapsDirections } from "@/components/apple/AppleMapsDirections";
import { AppleMapsExplore } from "@/components/apple/AppleMapsExplore";
import { AppleWeatherPremium } from "@/components/apple/AppleWeatherPremium";
import { ApplePayButton } from "@/components/apple/ApplePayButton";
import { AppleHealthRings } from "@/components/apple/AppleHealthRings";
import { AppleSpotlight } from "@/components/apple/AppleSpotlight";
import { AppleRemindersWidget } from "@/components/apple/AppleRemindersWidget";
import { AppleNotesWidget } from "@/components/apple/AppleNotesWidget";
import { AppleFindMyCard } from "@/components/apple/AppleFindMyCard";
import { AppleWalletStack } from "@/components/apple/AppleWalletStack";
import { AppleWidgetStack } from "@/components/apple/AppleWidgetStack";
import { AppleStoreAppTile } from "@/components/apple/AppleStoreAppTile";
import { AppleFitnessSummary } from "@/components/apple/AppleFitnessSummary";

type Row = (React.ReactNode | null)[];

const rows: Row[] = [
  // Social & Profile Cards
  [<InstagramPostCard />, <FacebookPostCard />, <LinkedInPostCard />],
  [<TwitterPostCard />, <BusinessCard />, <GithubContributionCard />],
  [<NotepadCard />, <FacebookProfileCard />, <GoogleProfileCard />],
  [<TwitterProfileCard />, <LinkedInProfileCard />, <GithubProfileCard />],

  // Image Cards
  [<MagazineCoverCard />, <PolaroidImageCard />, <GlassOverlayImageCard />],
  [<GalleryGridCard />, <BeforeAfterImageCard />, <PortraitImageCard />],
  [<TravelPostcardCard />, <DuotoneImageCard />, <ImageCarouselCard />],
  [<ProductImageCard />, <NFTGalleryCard />, <StackedCardsEffect />],

  // Specialty Cards
  [<EventTicketCard />, <CreditCardGlass />, <WalletPassCard />],
  [<PodcastCard />, <WeatherWidgetCard />, <FlightBoardingCard />],

  // AI Chat Cards
  [null, <AIStreamingCard />, null],
  [null, <ChatWidget />, <ChatSkeleton />],

  // Auth Cards
  [<AuthLoginCard />, <AuthSplitLoginCard />, <AuthOTPCard />],
  [<AuthForgotPasswordCard />, <PaymentMethodSelector />, <OnboardingSteps />],

  // Pricing Cards
  [<PricingCard />, <TogglePricingCards />, <PricingEnterpriseCard />],
  [<PricingLifetimeCard />, <FeatureComparison />, <PricingSkeleton />],

  // Music & Video
  [<MusicPlayerCard />, <MusicPlaylistCard />, <VideoThumbnailCard />],
  [<NowPlayingBar />, <PodcastCard />, <AppStoreReviewCard />],

  // File Upload
  [<FileUploadZone />, <FileUploadProgress />, <FileUploadList />],
  [<ImageUploadPreview />, <CloudUploadCard />, <MultiFileDropzone />],

  // Business & SaaS
  [<TestimonialCard />, <MetricCard />, <ProgressRingCard />],
  [<AvatarGroupCard />, <BlogPostCard />, <TeamMemberCard />],
  [<ActivityFeedCard />, <FeatureTabsCard />, <SocialProofBar />],

  // Dashboard — Layout
  [<DashboardWelcomeHeader />, <DashboardSidebarMini />, <QuickStatsRow />],

  // Dashboard — Analytics & Revenue
  [<RevenueStatCard />, <SalesOverviewCard />, <AnalyticsMiniCard />],
  [<UserGrowthCard />, <TrafficSourcesCard />, <ConversionFunnelCard />],

  // Dashboard — Data & Operations
  [<TopProductsCard />, <RecentOrdersCard />, <LeaderboardCard />],
  [<TaskSummaryCard />, <CalendarWidgetCard />, <StorageUsageCard />],
  [<ServerStatusCard />, <MetricCard />, <ProgressRingCard />],

  // Website Essentials — Navigation & UI
  [<BreadcrumbNav />, <PaginationBar />, <AlertBanners />],
  [<ConfirmDialogCard />, <SettingsToggleCard />, <FAQSectionCard />],

  // Website Essentials — Account & Support
  [<ContactInfoCard />, <MapLocationCard />, <BillingHistoryCard />],
  [<InviteTeamCard />, <SecuritySettingsCard />, <Error404Card />],
  [<MaintenanceCard />, <EmptyState />, <CookieBanner />],

  // Apple Design — Premium & Glass
  [
    <AppleGlassCard />,
    null, // <AppleProductHero />
    null, // <AppleLockScreen />
  ],

  // Apple Design — Maps
  [<AppleMapsCard />, <AppleMapsDirections />, <AppleMapsExplore />],

  // Apple Design — Apps & Widgets
  [
    null, // <AppleMusicWidget />
    <AppleWeatherPremium />,
    <AppleHealthRings />,
  ],
  [<AppleRemindersWidget />, <AppleNotesWidget />, <AppleFitnessSummary />],
  [<AppleWidgetStack />, <AppleWalletStack />, <AppleFindMyCard />],

  // Apple Design — System UI
  [<AppleSettingsList />, <AppleControlCenter />, <AppleNotificationBanner />],
  [<AppleSpotlight />, <ApplePayButton />, <AppleStoreAppTile />],

  // Mockups
  [<PhoneMockupCard />, <BrowserMockupCard />, <LaptopMockupCard />],

  // Skeletons
  [<CardSkeleton />, <ProfileSkeleton />, <DashboardSkeleton />],
  [<ImageGridSkeleton />, <TableSkeleton />, <DashboardSkeleton />],

  // Website Sections
  [<BentoFeatureGrid />, <GradientHero />, <GlassNavbar />],
  [<NewsletterSignup />, <LogoMarquee />, <CTAGradientBanner />],
  [<Timeline />, <MiniFooter />, <NotificationToast />],

  // Interactive
  [<NotificationBell />, <KanbanBoard />, <CookieBanner />],

  // Navigation & Accordions
  [<HomeMenuBar />, <BorderedAccordion />, <MinimalAccordion />],

  // Search Bars
  [<SearchBar />, <SearchBarWithResults />, <CommandPaletteSearch />],
  [
    <SpotlightSearchBar />,
    <CategoryFilterSearch />,
    null, // <MegaMenuDropdown />
  ],

  // Dropdowns
  [<HomeDropdown />, <UserMenuDropdown />, <ShareMenuDropdown />],
  [
    <QuickActionsDropdown />,
    <FilterSortDropdown />,
    <WorkspaceSwitcherDropdown />,
  ],
  [<LanguagePickerDropdown />, <ThemeColorDropdown />, <DateRangeDropdown />],
  [<ContextMenuDropdown />, null, null],
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center pb-10">
      <div className="mb-10 flex max-w-xl flex-col items-center text-center">
        <h1 className="mb-2">Introduction</h1>
        <p className="max-w-lg text-sm leading-relaxed text-neutral-500">
          A handcrafted collection of copy-paste components for production apps.
          Every component is live-previewed, open source, and yours to use.
        </p>
      </div>

      <div className="w-full space-y-2 px-2">
        {rows.map((row, i) => (
          <div key={i} className="flex w-full gap-2">
            {row.map((node, j) => (
              <Box key={j}>{node}</Box>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
