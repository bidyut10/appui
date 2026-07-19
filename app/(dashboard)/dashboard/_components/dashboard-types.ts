export type DashboardSection =
  | "overview"
  | "traffic"
  | "components"
  | "geography"
  | "emails";

export const SECTION_META: Record<
  DashboardSection,
  { title: string; description: string }
> = {
  overview: {
    title: "Overview",
    description: "Live pulse and the numbers that matter right now.",
  },
  traffic: {
    title: "Traffic",
    description: "Page views, visitors, sessions, and top paths.",
  },
  components: {
    title: "Components",
    description: "Which showcase pieces people open and click.",
  },
  geography: {
    title: "Geography",
    description: "Where visitors are coming from.",
  },
  emails: {
    title: "Emails",
    description: "Work and sponsor inquiries from the site.",
  },
};
