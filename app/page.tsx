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
import { MrrBreakdownCard } from "@/components/dashboard/MrrBreakdownCard";
import { SessionHeatmapCard } from "@/components/dashboard/SessionHeatmapCard";
import { ApiLatencyCard } from "@/components/dashboard/ApiLatencyCard";
import { TeamCapacityCard } from "@/components/dashboard/TeamCapacityCard";
import { GoalProgressCard } from "@/components/dashboard/GoalProgressCard";
import { SupportQueueCard } from "@/components/dashboard/SupportQueueCard";
import { GeoVisitorsCard } from "@/components/dashboard/GeoVisitorsCard";
import { BurnRunwayCard } from "@/components/dashboard/BurnRunwayCard";
import { KpiSparklineGrid } from "@/components/dashboard/KpiSparklineGrid";
import { ActivityTimelineWidget } from "@/components/dashboard/ActivityTimelineWidget";
import { ChurnRiskCard } from "@/components/dashboard/ChurnRiskCard";
import { InvoicePipelineCard } from "@/components/dashboard/InvoicePipelineCard";
import { UptimeMonitorCard } from "@/components/dashboard/UptimeMonitorCard";
import { NotificationDigestCard } from "@/components/dashboard/NotificationDigestCard";
import { RetentionCohortCard } from "@/components/dashboard/RetentionCohortCard";
import { LivePulseMetricCard } from "@/components/dashboard/LivePulseMetricCard";
import { ExperimentAbCard } from "@/components/dashboard/ExperimentAbCard";
import { RevenueBridgeCard } from "@/components/dashboard/RevenueBridgeCard";
import { NpsSpectrumCard } from "@/components/dashboard/NpsSpectrumCard";
import { DailyBriefingCard } from "@/components/dashboard/DailyBriefingCard";
import { RadialMultiGaugeCard } from "@/components/dashboard/RadialMultiGaugeCard";
import { DealPipelineCard } from "@/components/dashboard/DealPipelineCard";
import { TrendMilestoneCard } from "@/components/dashboard/TrendMilestoneCard";
import { BudgetDialCard } from "@/components/dashboard/BudgetDialCard";
import { ChannelLollipopCard } from "@/components/dashboard/ChannelLollipopCard";
import { SlaCountdownCard } from "@/components/dashboard/SlaCountdownCard";
import { SplitCompareCard } from "@/components/dashboard/SplitCompareCard";
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
import { TerminalLogCard } from "@/components/cards/TerminalLogCard";
import { ThermalReceiptCard } from "@/components/cards/ThermalReceiptCard";
import { VoiceWaveCard } from "@/components/cards/VoiceWaveCard";
import { HabitStreakCard } from "@/components/cards/HabitStreakCard";
import { CinemaTicketCard } from "@/components/cards/CinemaTicketCard";
import { EditorialQuoteCard } from "@/components/cards/EditorialQuoteCard";
import { CourierTrackingCard } from "@/components/cards/CourierTrackingCard";
import { CryptoTickerCard } from "@/components/cards/CryptoTickerCard";
import { NeumorphicSettingsCard } from "@/components/cards/NeumorphicSettingsCard";
import { RecipeIngredientCard } from "@/components/cards/RecipeIngredientCard";
import { KeyboardShortcutsCard } from "@/components/cards/KeyboardShortcutsCard";
import { AuroraProfileCard } from "@/components/cards/AuroraProfileCard";
import { FocusTimerCard } from "@/components/interactive/FocusTimerCard";
import { CommandDockBar } from "@/components/sections/CommandDockBar";
import { TypographicPosterCard } from "@/components/text/TypographicPosterCard";
import { PullQuoteCard } from "@/components/text/PullQuoteCard";
import { TabloidHeadlineCard } from "@/components/text/TabloidHeadlineCard";
import { ReadingProgressCard } from "@/components/text/ReadingProgressCard";
import { LinedJournalCard } from "@/components/text/LinedJournalCard";
import { TypeSpecimenCard } from "@/components/text/TypeSpecimenCard";
import { ProfileMenuPreviewCard } from "@/components/dropdowns/ProfileMenuPreviewCard";
import { SortMenuPreviewCard } from "@/components/dropdowns/SortMenuPreviewCard";
import { NotificationPanelPreviewCard } from "@/components/dropdowns/NotificationPanelPreviewCard";
import { WorkspaceSwitcherPreviewCard } from "@/components/dropdowns/WorkspaceSwitcherPreviewCard";
import { ActionMenuPreviewCard } from "@/components/dropdowns/ActionMenuPreviewCard";
import { FilterPillsWidget } from "@/components/widgets/FilterPillsWidget";
import { LiveActivityPillCard } from "@/components/widgets/LiveActivityPillCard";
import { AppointmentPickerCard } from "@/components/widgets/AppointmentPickerCard";
import { InboxSummaryCard } from "@/components/widgets/InboxSummaryCard";
import { CheckoutStepperCard } from "@/components/widgets/CheckoutStepperCard";
import { DateRangePillsWidget } from "@/components/widgets/DateRangePillsWidget";
import { MetricBentoWidget } from "@/components/widgets/MetricBentoWidget";
import { StatsRibbonWidget } from "@/components/widgets/StatsRibbonWidget";
import { ComparePeriodWidget } from "@/components/widgets/ComparePeriodWidget";
import { ScoreRingWidget } from "@/components/widgets/ScoreRingWidget";
import { FilmStripCard } from "@/components/cards/FilmStripCard";
import { EditorialSpreadCard } from "@/components/cards/EditorialSpreadCard";
import { PhotoContactSheetCard } from "@/components/cards/PhotoContactSheetCard";
import { ProductCatalogCard } from "@/components/cards/ProductCatalogCard";
import { StampPostcardCard } from "@/components/cards/StampPostcardCard";
import { RetailPriceTagCard } from "@/components/cards/RetailPriceTagCard";
import { SplitFeatureCard } from "@/components/cards/SplitFeatureCard";
import { ChapterOpenerCard } from "@/components/text/ChapterOpenerCard";
import { StatEditorialCard } from "@/components/text/StatEditorialCard";

type Row = (React.ReactNode | null)[];

const rows: Row[] = [
  // Social & Profile Cards
  [<InstagramPostCard imagePriority />, <FacebookPostCard />, <LinkedInPostCard />],
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
  [<NowPlayingBar />, <AppStoreReviewCard />, <VoiceWaveCard />],

  // File Upload
  [<FileUploadZone />, <FileUploadProgress />, <FileUploadList />],
  [<ImageUploadPreview />, <CloudUploadCard />, <MultiFileDropzone />],

  // Business & SaaS
  [<TestimonialCard />, <MetricCard />, <AuroraProfileCard />],
  [<AvatarGroupCard />, <BlogPostCard />, <TeamMemberCard />],
  [<ActivityFeedCard />, <FeatureTabsCard />, <ProgressRingCard />],

  // Dashboard — Layout & Controls
  [<DashboardWelcomeHeader />, <StatsRibbonWidget />, <DateRangePillsWidget />],

  // Dashboard — Live & Hero Metrics
  [<LivePulseMetricCard />, <SplitCompareCard />, <ScoreRingWidget />],
  [<DailyBriefingCard />, <ComparePeriodWidget />, <MetricBentoWidget />],

  // Dashboard — Core KPIs
  [<QuickStatsRow />, <KpiSparklineGrid />, <MrrBreakdownCard />],
  [<TrendMilestoneCard />, <RevenueBridgeCard />, <NpsSpectrumCard />],

  // Dashboard — Analytics & Charts
  [<RevenueStatCard />, <SalesOverviewCard />, <AnalyticsMiniCard />],
  [<UserGrowthCard />, <ChannelLollipopCard />, <RetentionCohortCard />],
  [<ApiLatencyCard />, <SessionHeatmapCard />, <GeoVisitorsCard />],
  [<RadialMultiGaugeCard />, <BudgetDialCard />, <ExperimentAbCard />],

  // Dashboard — Finance & Goals
  [<BurnRunwayCard />, <GoalProgressCard />, <InvoicePipelineCard />],
  [<SupportQueueCard />, <ChurnRiskCard />, <TeamCapacityCard />],
  [<DealPipelineCard />, <SlaCountdownCard />, <TrafficSourcesCard />],

  // Dashboard — Data & Operations
  [<TopProductsCard />, <RecentOrdersCard />, <LeaderboardCard />],
  [<TaskSummaryCard />, <CalendarWidgetCard />, <StorageUsageCard />],
  [<ServerStatusCard />, <UptimeMonitorCard />, <NotificationDigestCard />],

  // Dashboard — Activity & Funnels
  [<ActivityTimelineWidget />, <ConversionFunnelCard />, <FocusTimerCard />],
  [<LiveActivityPillCard />, <CryptoTickerCard />, <InboxSummaryCard />],

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
  [<AppleSpotlight />, <ApplePayButton />, <CommandDockBar />],

  // Mockups
  [<PhoneMockupCard />, <BrowserMockupCard />, <LaptopMockupCard />],

  // Skeletons
  [<CardSkeleton />, <ProfileSkeleton />, <DashboardSkeleton />],
  [<ImageGridSkeleton />, <TableSkeleton />, <ChatSkeleton />],

  // Website Sections
  [<BentoFeatureGrid />, <GradientHero />, <GlassNavbar />],
  [<NewsletterSignup />, <LogoMarquee />, <SocialProofBar />],
  [<Timeline />, <MiniFooter />, <CTAGradientBanner />],

  // Interactive
  [<NotificationBell />, <KanbanBoard />, <NeumorphicSettingsCard />],

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

  // New — Developer & Terminal
  [<TerminalLogCard />, <KeyboardShortcutsCard />, <ThermalReceiptCard />],

  // New — Editorial & Cinema
  [<EditorialQuoteCard />, <CinemaTicketCard />, <AppleStoreAppTile />],

  // New — Lifestyle & Tracking
  [<RecipeIngredientCard />, <CourierTrackingCard />, <HabitStreakCard />],

  // Typography & Editorial
  [<TypographicPosterCard />, <PullQuoteCard />, <TabloidHeadlineCard />],
  [<ReadingProgressCard />, <LinedJournalCard />, <TypeSpecimenCard />],
  [<ChapterOpenerCard />, <StatEditorialCard />, <SplitFeatureCard />],

  // Dropdown & Menu Previews
  [<ProfileMenuPreviewCard />, <SortMenuPreviewCard />, <ActionMenuPreviewCard />],
  [
    <NotificationPanelPreviewCard />,
    <WorkspaceSwitcherPreviewCard />,
    <FilterPillsWidget />,
  ],

  // Image & Print Media
  [<FilmStripCard />, <EditorialSpreadCard />, <PhotoContactSheetCard />],
  [<ProductCatalogCard />, <StampPostcardCard />, <RetailPriceTagCard />],

  // Light Widgets & Pickers
  [<AppointmentPickerCard />, <FilterPillsWidget />, <CheckoutStepperCard />],
  [<DashboardSidebarMini />, null, <NotificationToast />],
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-3 pb-10 sm:px-4">
      <div className="mb-8 flex max-w-xl flex-col items-center px-2 text-center sm:mb-10">
        <h1 className="mt-20 mb-2 text-xl sm:text-2xl">Introduction</h1>
        <p className="max-w-lg text-sm leading-relaxed text-neutral-500">
          A handcrafted collection of copy-paste components for production apps.
          Every component is live-previewed, open source, and yours to use.
          <span className="mt-2 block">
            Made by{" "}
            <a
              href="https://x.com/BidyutKundu12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 hover:text-neutral-900 hover:decoration-neutral-900"
            >
              Bidyut Kundu
            </a>
          </span>
        </p>
      </div>

      <div className="w-full max-w-[1600px] space-y-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex w-full flex-col gap-2 sm:flex-row sm:gap-2"
          >
            {row.map((node, j) => (
              <Box key={j}>{node}</Box>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
