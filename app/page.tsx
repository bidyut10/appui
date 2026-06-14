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
import { GmailInboxWidget } from "@/components/widgets/GmailInboxWidget";
import { OutlookMailboxWidget } from "@/components/widgets/OutlookMailboxWidget";
import { EmailComposeWidget } from "@/components/widgets/EmailComposeWidget";
import { RichTextEditorWidget } from "@/components/widgets/RichTextEditorWidget";
import { MarkdownEditorWidget } from "@/components/widgets/MarkdownEditorWidget";
import { CommentThreadWidget } from "@/components/widgets/CommentThreadWidget";
import { MeetingScheduleWidget } from "@/components/widgets/MeetingScheduleWidget";
import { TeamPresenceWidget } from "@/components/widgets/TeamPresenceWidget";
import { ApprovalQueueWidget } from "@/components/widgets/ApprovalQueueWidget";
import { RecentFilesWidget } from "@/components/widgets/RecentFilesWidget";
import { SlackChannelWidget } from "@/components/widgets/SlackChannelWidget";
import { QuickNotesWidget } from "@/components/widgets/QuickNotesWidget";
import { IntegrationStatusWidget } from "@/components/widgets/IntegrationStatusWidget";
import { SpendingBreakdownWidget } from "@/components/widgets/SpendingBreakdownWidget";
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
import { TikTokPostCard } from "@/components/cards/TikTokPostCard";
import { YouTubeVideoCard } from "@/components/cards/YouTubeVideoCard";
import { PinterestPinCard } from "@/components/cards/PinterestPinCard";
import { RedditPostCard } from "@/components/cards/RedditPostCard";
import { ThreadsPostCard } from "@/components/cards/ThreadsPostCard";
import { JournalWritingCard } from "@/components/cards/JournalWritingCard";
import { AnalogClockWidget } from "@/components/widgets/AnalogClockWidget";
import { DatePickerWidget } from "@/components/widgets/DatePickerWidget";
import { CountdownEventWidget } from "@/components/widgets/CountdownEventWidget";
import { WorldClockWidget } from "@/components/widgets/WorldClockWidget";
import { TypewriterTextWidget } from "@/components/widgets/TypewriterTextWidget";
import { GradientTextWidget } from "@/components/widgets/GradientTextWidget";
import { TextRevealWidget } from "@/components/widgets/TextRevealWidget";
import { GlowButtonBar } from "@/components/widgets/GlowButtonBar";
import { EmailThreadWidget } from "@/components/widgets/EmailThreadWidget";
import { StatTickerWidget } from "@/components/widgets/StatTickerWidget";
import { MarqueeTextWidget } from "@/components/widgets/MarqueeTextWidget";
import { GitHubRepoCard } from "@/components/cards/GitHubRepoCard";
import { GitHubCodeBlockCard } from "@/components/cards/GitHubCodeBlockCard";
import { GitHubPullRequestCard } from "@/components/cards/GitHubPullRequestCard";
import { EmailNewsletterCard } from "@/components/cards/EmailNewsletterCard";
import { DiscordChatCard } from "@/components/cards/DiscordChatCard";
import { WhatsAppChatCard } from "@/components/cards/WhatsAppChatCard";
import { SnapchatStoryCard } from "@/components/cards/SnapchatStoryCard";
import { ImageGridHoverCard } from "@/components/cards/ImageGridHoverCard";
import { ImageQuoteOverlayCard } from "@/components/cards/ImageQuoteOverlayCard";
import { VideoReelCard } from "@/components/cards/VideoReelCard";
import { DribbbleShotCard } from "@/components/cards/DribbbleShotCard";

import { WiFiToggleWidget } from "@/components/widgets/travel/WiFiToggleWidget";
import { FlightArrivalWidget } from "@/components/widgets/travel/FlightArrivalWidget";
import { FitnessActivityWidget } from "@/components/widgets/travel/FitnessActivityWidget";
import { DailyHabitTimerWidget } from "@/components/widgets/travel/DailyHabitTimerWidget";
import { AirportGateWidget } from "@/components/widgets/travel/AirportGateWidget";
import { AudioRecorderWidget } from "@/components/widgets/travel/AudioRecorderWidget";
import { TurnByTurnNavWidget } from "@/components/widgets/travel/TurnByTurnNavWidget";
import { BatteryUsageWidget } from "@/components/widgets/travel/BatteryUsageWidget";
import { CompactMusicPlayerWidget } from "@/components/widgets/travel/CompactMusicPlayerWidget";
import { RomanAnalogClockWidget } from "@/components/widgets/travel/RomanAnalogClockWidget";
import { CameraRecordingWidget } from "@/components/widgets/travel/CameraRecordingWidget";
import { DailyActivityCalendarWidget } from "@/components/widgets/travel/DailyActivityCalendarWidget";
import { WorldClockTimelineWidget } from "@/components/widgets/travel/WorldClockTimelineWidget";
import { RidePickupWidget } from "@/components/widgets/travel/RidePickupWidget";
import { ChargingStatusWidget } from "@/components/widgets/travel/ChargingStatusWidget";
import { ElectricScooterWidget } from "@/components/widgets/travel/ElectricScooterWidget";

import { DotMatrixStepWidget } from "@/components/widgets/minimal/DotMatrixStepWidget";
import { MinimalWeatherWidget } from "@/components/widgets/minimal/MinimalWeatherWidget";
import { MinimalFlightWidget } from "@/components/widgets/minimal/MinimalFlightWidget";
import { MinimalTimezoneWidget } from "@/components/widgets/minimal/MinimalTimezoneWidget";
import { MinimalCalendarDayWidget } from "@/components/widgets/minimal/MinimalCalendarDayWidget";
import { MinimalAnalogClockWidget } from "@/components/widgets/minimal/MinimalAnalogClockWidget";
import {
  MinimalRecordButton,
  MinimalMicButton,
  MinimalLocationButton,
  MinimalAirplaneButton,
  MinimalAutoRotateButton,
  MinimalScreenRecordButton,
} from "@/components/widgets/minimal/MinimalCircularToggles";
import {
  MinimalTorchToggle,
  MinimalExtraDimToggle,
  MinimalNearbyShareToggle,
  MinimalHotspotToggle,
  MinimalBluetoothToggle,
  MinimalMobileDataToggle,
  MinimalDarkModeToggle,
  MinimalCalculatorToggle,
  MinimalBatterySaverToggle,
} from "@/components/widgets/minimal/MinimalPillToggles";
import { MinimalMusicPlayerWidget } from "@/components/widgets/minimal/MinimalMusicPlayerWidget";
import { MinimalEarbudsWidget } from "@/components/widgets/minimal/MinimalEarbudsWidget";
import { MinimalStopwatchWidget } from "@/components/widgets/minimal/MinimalStopwatchWidget";
import { MinimalCompassWidget } from "@/components/widgets/minimal/MinimalCompassWidget";
import {
  MinimalDotPatternCard,
  MinimalPhotoCard,
  MinimalStatusDockWidget,
} from "@/components/widgets/minimal/MinimalDecorCards";

import { PeriodTrackerWidget } from "@/components/widgets/wellness/PeriodTrackerWidget";
import { CircularScheduleDialWidget } from "@/components/widgets/wellness/CircularScheduleDialWidget";
import { MentalHealthPollWidget } from "@/components/widgets/wellness/MentalHealthPollWidget";
import { WellnessPlaylistWidget } from "@/components/widgets/wellness/WellnessPlaylistWidget";
import { BlobProfileCard } from "@/components/widgets/wellness/BlobProfileCard";
import { WeeklyActivityChartWidget } from "@/components/widgets/wellness/WeeklyActivityChartWidget";
import { OrganicBlobImageCard } from "@/components/widgets/wellness/OrganicBlobImageCard";
import { WellnessChatAudioWidget } from "@/components/widgets/wellness/WellnessChatAudioWidget";
import { WellnessRatingWidget } from "@/components/widgets/wellness/WellnessRatingWidget";
import { CircularStatsWidget } from "@/components/widgets/wellness/CircularStatsWidget";
import { WorkoutDashboardWidget } from "@/components/widgets/wellness/WorkoutDashboardWidget";
import { GpsTrackingMapWidget } from "@/components/widgets/wellness/GpsTrackingMapWidget";
import { FocusBreathWidget } from "@/components/widgets/wellness/FocusBreathWidget";
import { InsightPulseWidget } from "@/components/widgets/wellness/InsightPulseWidget";
import { MinimalAgendaWidget } from "@/components/widgets/travel/MinimalAgendaWidget";
import { GlassStatWidget } from "@/components/widgets/travel/GlassStatWidget";

import { FolderGridCard } from "@/components/cards/FolderGridCard";
import { FilePreviewCard } from "@/components/cards/FilePreviewCard";
import { AIChatCard } from "@/components/cards/AIChatCard";
import { AIPromptSuggestionsCard } from "@/components/cards/AIPromptSuggestionsCard";
import { AIAgentStatusCard } from "@/components/cards/AIAgentStatusCard";
import { VoiceTranscriptCard } from "@/components/cards/VoiceTranscriptCard";
import { PhotoAlbumCard } from "@/components/cards/PhotoAlbumCard";
import { ImageExifCard } from "@/components/cards/ImageExifCard";
import { DropCapEditorialCard } from "@/components/cards/DropCapEditorialCard";
import { FileUploadQueueCard } from "@/components/cards/FileUploadQueueCard";
import { FileTreeWidget } from "@/components/widgets/FileTreeWidget";
import { VoiceAssistantWidget } from "@/components/widgets/VoiceAssistantWidget";
import { TypographyShowcaseWidget } from "@/components/widgets/TypographyShowcaseWidget";
import { StorageVaultWidget } from "@/components/widgets/StorageVaultWidget";

type Row = [React.ReactNode, React.ReactNode, React.ReactNode];

const rows: Row[] = [  [< RomanAnalogClockWidget/>, <VoiceAssistantWidget />, <WiFiToggleWidget />],
[<FocusBreathWidget />,<WorldClockTimelineWidget />,<MinimalAirplaneButton />],
  [
    <ThreadsPostCard />,
    <InstagramPostCard imagePriority />,
    <StackedCardsEffect />,
  ],
  [<FacebookPostCard />, <PolaroidImageCard />, <TikTokPostCard />],
  [<TwitterPostCard />, <PinterestPinCard />, <LinkedInPostCard />],

  [
    <TypewriterTextWidget />,
    <StatTickerWidget />,
    <TypographyShowcaseWidget />,
  ],
  [<GitHubRepoCard />, <AIChatCard />, <GitHubPullRequestCard />],

  [<GmailInboxWidget />, < DiscordChatCard/>, <AuroraProfileCard />],
  [<OutlookMailboxWidget />, <PeriodTrackerWidget />, <VoiceWaveCard />],
  [null, <CountdownEventWidget />, <BlobProfileCard />],

  [<JournalWritingCard />, <DropCapEditorialCard />, <MarkdownEditorWidget />],
  [<CommentThreadWidget />, <LinedJournalCard />, <QuickNotesWidget />],
  [<ReadingProgressCard />, <ChapterOpenerCard />, <TypographicPosterCard />],

  [<WalletPassCard />, <CreditCardGlass />, <PaymentMethodSelector />],
  [<PricingCard />, <TogglePricingCards />, <CheckoutStepperCard />],
  [<AuthLoginCard />, <AuthOTPCard />, <NeumorphicSettingsCard />],

  [<BeforeAfterImageCard />, <PhotoAlbumCard />, <RedditPostCard />],
  [<ImageExifCard />, <MinimalPhotoCard />, <VideoReelCard />],
  [<MagazineCoverCard />, <GlassOverlayImageCard />, <PortraitImageCard />],
  [<ImageCarouselCard />, <YouTubeVideoCard />, <DuotoneImageCard />],

  [<CompactMusicPlayerWidget />, <NowPlayingBar />, <WellnessPlaylistWidget />],
  [<MinimalWeatherWidget />, <WeatherWidgetCard />, null],
  [<HabitStreakCard />, <CircularStatsWidget />, <ProgressRingCard />],

  [<RevenueStatCard />, <AudioRecorderWidget />, <MetricCard />],
  [<DailyBriefingCard />, <KpiSparklineGrid />, <SalesOverviewCard />],
  [<BurnRunwayCard />, <SpendingBreakdownWidget />, <BudgetDialCard />],

  [null, <TaskSummaryCard />, <ApprovalQueueWidget />],
  [<TeamPresenceWidget />, <SlackChannelWidget />, <ChatWidget />],
  [<NotificationBell />, <NotificationToast />, <ActivityFeedCard />],

  [<SearchBar />, <CommandPaletteSearch />, <AppleSpotlight />],
  [<SpotlightSearchBar />, <CategoryFilterSearch />, <SearchBarWithResults />],
  [<HomeDropdown />, <UserMenuDropdown />, <ContextMenuDropdown />],

  [<FlightArrivalWidget />, <MapLocationCard />, <GpsTrackingMapWidget />],
  [
    <AirportGateWidget />,
    <CalendarWidgetCard />,
    <DailyActivityCalendarWidget />,
  ],
  [<AppleNotesWidget />, <NotepadCard />, <AppleWidgetStack />],

  [<GithubProfileCard />, <GithubContributionCard />, <TerminalLogCard />],
  [<GoogleProfileCard />, <TwitterProfileCard />, <LinkedInProfileCard />],
  [<FacebookProfileCard />, <TeamMemberCard />, <BusinessCard />],

  [<TestimonialCard />, <AppStoreReviewCard />, <BlogPostCard />],
  [<EventTicketCard />, <CinemaTicketCard />, <CourierTrackingCard />],
  [<TravelPostcardCard />, <StampPostcardCard />, <ThermalReceiptCard />],

  [<AIStreamingCard />, <AIPromptSuggestionsCard />, <AIAgentStatusCard />],
  [<VoiceTranscriptCard />, <LivePulseMetricCard />, <SplitFeatureCard />],
  [<CryptoTickerCard />, <LiveActivityPillCard />, <ExperimentAbCard />],
  [<ConversionFunnelCard />, <RetentionCohortCard />, <ChurnRiskCard />],

  [<FolderGridCard />, <FileTreeWidget />, <RecentFilesWidget />],
  [<FilePreviewCard />, <FileUploadQueueCard />, <StorageVaultWidget />],
  [<EmailComposeWidget />, <FileUploadZone />, <CloudUploadCard />],
  [<MultiFileDropzone />, <ImageUploadPreview />, <FileUploadProgress />],

  [<PhoneMockupCard />, <BrowserMockupCard />, <LaptopMockupCard />],
  [<AppleControlCenter />, <AppleGlassCard />, <ApplePayButton />],
  [<AppleWalletStack />, <AppleFindMyCard />, <AppleStoreAppTile />],

  [<GradientHero />, <GlassNavbar />, <BentoFeatureGrid />],
  [<NewsletterSignup />, <CTAGradientBanner />, <SocialProofBar />],
  [<Timeline />, <MinimalAgendaWidget />, <GlassStatWidget />],

  [<DashboardWelcomeHeader />, <QuickStatsRow />, <StatsRibbonWidget />],
  [<TrendMilestoneCard />, <NpsSpectrumCard />, <ScoreRingWidget />],
  [<GeoVisitorsCard />, <SessionHeatmapCard />, <ApiLatencyCard />],

  [<DealPipelineCard />, <InvoicePipelineCard />, <RecentOrdersCard />],
  [<TopProductsCard />, <LeaderboardCard />, <SupportQueueCard />],
  [<ServerStatusCard />, <UptimeMonitorCard />, <StorageUsageCard />],

  [<ConfirmDialogCard />, <Error404Card />, <MaintenanceCard />],
  [<FAQSectionCard />, <InviteTeamCard />, <BillingHistoryCard />],
  [<BreadcrumbNav />, <PaginationBar />, <AlertBanners />],

  [<FilmStripCard />, <ImageGridHoverCard />, <PhotoContactSheetCard />],
  [<ProductImageCard />, <ProductCatalogCard />, <RetailPriceTagCard />],
  [<EditorialQuoteCard />, <PullQuoteCard />, <EditorialSpreadCard />],

  [<CardSkeleton />, <ProfileSkeleton />, <ChatSkeleton />],
  [<PricingSkeleton />, <ImageGridSkeleton />, <DashboardSkeleton />],
  [<EmptyState />, <InsightPulseWidget />, <CookieBanner />],

  [<CommandDockBar />, <BorderedAccordion />, <HomeMenuBar />],
  [<MinimalAccordion />, <FilterPillsWidget />, <DateRangePillsWidget />],
  [<ComparePeriodWidget />, <MetricBentoWidget />, <SplitCompareCard />],

  [<KeyboardShortcutsCard />, <RecipeIngredientCard />, <StatEditorialCard />],
  [<TabloidHeadlineCard />, <TypeSpecimenCard />, <VideoThumbnailCard />],
  [<MusicPlaylistCard />, <AvatarGroupCard />, <AuthSplitLoginCard />],

  [
    <ProfileMenuPreviewCard />,
    <SortMenuPreviewCard />,
    <ActionMenuPreviewCard />,
  ],
  [
    <NotificationPanelPreviewCard />,
    <WorkspaceSwitcherPreviewCard />,
    <ShareMenuDropdown />,
  ],
  [
    <QuickActionsDropdown />,
    <FilterSortDropdown />,
    <WorkspaceSwitcherDropdown />,
  ],

  [<LanguagePickerDropdown />, <ThemeColorDropdown />, <DateRangeDropdown />],
  [<OnboardingSteps />, <PricingEnterpriseCard />, <PricingLifetimeCard />],
  [<FeatureComparison />, <LogoMarquee />, <DotMatrixStepWidget />],

  [<AppleSettingsList />, <AppleNotificationBanner />, <AppleFitnessSummary />],
  [<AppleMapsDirections />, <AppleMapsExplore />, <ContactInfoCard />],
  [<SecuritySettingsCard />, <SettingsToggleCard />, <DashboardSidebarMini />],

  [<ActivityTimelineWidget />, <GoalProgressCard />, <TeamCapacityCard />],
  [<TrafficSourcesCard />, <ChannelLollipopCard />, <UserGrowthCard />],
  [<MrrBreakdownCard />, <RevenueBridgeCard />, <RadialMultiGaugeCard />],

  [<AnalyticsMiniCard />, <NotificationDigestCard />, <SlaCountdownCard />],
  [<FileUploadList />, <AuthForgotPasswordCard />, <TableSkeleton />],

  [<EmailThreadWidget />, <WellnessChatAudioWidget />, <DribbbleShotCard />],
  [<GlowButtonBar />, <MinimalMusicPlayerWidget />, <MarqueeTextWidget />],

  [
    <FitnessActivityWidget />,
    <MentalHealthPollWidget />,
    <MinimalFlightWidget />,
  ],
  [
    <DailyHabitTimerWidget />,
    <TurnByTurnNavWidget />,
    <WeeklyActivityChartWidget />,
  ],
  [<BatteryUsageWidget />, <CameraRecordingWidget />, <RidePickupWidget />],
  [
    <ChargingStatusWidget />,
    <ElectricScooterWidget />,
    <WorkoutDashboardWidget />,
  ],

  [
    <MinimalTimezoneWidget />,
    <MinimalCalendarDayWidget />,
    <MinimalAnalogClockWidget />,
  ],
  [
    <MinimalRecordButton />,
    <MinimalAirplaneButton />,
    <MinimalEarbudsWidget />,
  ],
  [
    <MinimalTorchToggle />,
    <MinimalBluetoothToggle />,
    <MinimalStatusDockWidget />,
  ],
  [
    <MinimalDotPatternCard />,
    <MinimalCompassWidget />,
    <MinimalStopwatchWidget />,
  ],

  [
    <CircularScheduleDialWidget />,
    <WellnessRatingWidget />,
    <AnalogClockWidget />,
  ],
  [<SnapchatStoryCard />, <WorldClockWidget />, <ImageQuoteOverlayCard />],

  [<GitHubCodeBlockCard />, <GradientTextWidget />, <TextRevealWidget />],
  [<WhatsAppChatCard />, <EmailNewsletterCard />, <InboxSummaryCard />],
  [
    <RichTextEditorWidget />,
    <MeetingScheduleWidget />,
    <IntegrationStatusWidget />,
  ],
  [<DatePickerWidget />, <AppointmentPickerCard />, <FocusTimerCard />],
  [<MusicPlayerCard />, <PodcastCard />, <NFTGalleryCard />],
  [<GalleryGridCard />, <OrganicBlobImageCard />, <FeatureTabsCard />],
  [<FlightBoardingCard />, <AppleMapsCard />, <AppleWeatherPremium />],
  [<AppleHealthRings />, <AppleRemindersWidget />, <MiniFooter />],
  [
    <MinimalMicButton />,
    <MinimalLocationButton />,
    <MinimalAutoRotateButton />,
  ],
  [
    <MinimalScreenRecordButton />,
    <MinimalExtraDimToggle />,
    <MinimalNearbyShareToggle />,
  ],
  [
    <MinimalHotspotToggle />,
    <MinimalMobileDataToggle />,
    <MinimalDarkModeToggle />,
  ],
  [
    <MinimalCalculatorToggle />,
    <MinimalBatterySaverToggle />,
    <MaintenanceCard />,
  ],
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col items-center overflow-x-hidden px-3 pb-10 sm:px-4">
      <div className="mb-8 flex max-w-xl flex-col items-center px-2 text-center sm:mb-10">
        <h1 className="mt-20 mb-2 text-xl sm:text-2xl">Introduction</h1>
        <p className="max-w-xl text-sm leading-relaxed text-neutral-500">
          I built these 338 production-ready Next.js components for my own
          projects. Everything is cleanly styled with Tailwind v4 and paired
          with SVGs from nexticons.in. You can explore all the live designs
          right now—the copy-and-paste code feature is shipping soon.
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

      <div className="w-full min-w-0 max-w-400 space-y-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex w-full min-w-0 flex-col gap-3 min-[1194px]:flex-row min-[1194px]:gap-4"
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
