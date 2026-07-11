export type InquiryType = "work" | "sponsor";

export type InquirySubmitPayload = Readonly<{
  type: InquiryType;
  name: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
  company?: string;
}>;

export type InquiryRecord = Readonly<{
  id: string;
  type: InquiryType;
  name: string;
  email: string;
  subject: string;
  message: string;
  source: string;
  createdAt: string;
}>;
