import type { InquiryType } from "@/lib/inquiries/types";

export type InquiryTemplate = Readonly<{
  title: string;
  subtitle: string;
  subject: string;
  message: string;
  submitLabel: string;
}>;

export const inquiryTemplates: Record<InquiryType, InquiryTemplate> = {
  work: {
    title: "Work with me",
    subtitle:
      "Share your project idea — I'll read every message and reply by email.",
    subject: "Let's work together",
    message:
      "Hi Bidyut,\n\nI came across Opensource UI and I'd love to work with you on a project.\n\nHere's what I have in mind:\n\n",
    submitLabel: "Send message",
  },
  sponsor: {
    title: "Become a sponsor",
    subtitle:
      "Reach developers browsing components every day. Tell me about your brand.",
    subject: "I'd like to sponsor Opensource UI",
    message:
      "Hi Bidyut,\n\nI'd like to sponsor Opensource UI. Please share the details on how to get started.\n\nBrand / Company:\nWebsite:\n\n",
    submitLabel: "Send inquiry",
  },
};
