/**
 * Parses optional ?from=YYYY-MM-DD&to=YYYY-MM-DD query params for the dashboard.
 *
 * When both are omitted, callers treat the range as "all time".
 */

export type DateRange = {
  from: Date;
  to: Date;
};

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function parseDay(value: string, endOfDay = false): Date | null {
  if (!DATE_RE.test(value)) return null;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  if (endOfDay) {
    date.setHours(23, 59, 59, 999);
  } else {
    date.setHours(0, 0, 0, 0);
  }

  return date;
}

export function parseDateRange(searchParams: URLSearchParams): DateRange | null {
  const fromRaw = searchParams.get("from")?.trim();
  const toRaw = searchParams.get("to")?.trim();

  if (!fromRaw && !toRaw) return null;

  const from = fromRaw ? parseDay(fromRaw) : null;
  const to = toRaw ? parseDay(toRaw, true) : null;

  if ((fromRaw && !from) || (toRaw && !to)) return null;

  const rangeFrom = from ?? new Date(0);
  const rangeTo = to ?? new Date();

  if (rangeFrom > rangeTo) return null;

  return { from: rangeFrom, to: rangeTo };
}

// Shown at the top of the dashboard when a date filter is active. 
export function formatPeriodLabel(range: DateRange | null): string {
  if (!range) return "All time";

  const sameDay =
    range.from.toDateString() ===
    new Date(range.to.getFullYear(), range.to.getMonth(), range.to.getDate()).toDateString();

  const formatter = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (sameDay) return formatter.format(range.from);

  return `${formatter.format(range.from)} – ${formatter.format(range.to)}`;
}

// MongoDB $match fragment for a Date field within the selected range.
export function timestampMatch(
  field: string,
  range: DateRange | null,
): Record<string, unknown> {
  if (!range) return {};

  return {
    [field]: {
      $gte: range.from,
      $lte: range.to,
    },
  };
}
