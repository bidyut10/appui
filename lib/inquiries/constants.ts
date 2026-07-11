export const INQUIRIES = "inquiries";

export const INQUIRY_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  subjectMin: 3,
  subjectMax: 120,
  messageMin: 10,
  messageMax: 5000,
  rateLimitMs: 60_000,
  listLimit: 100,
} as const;
