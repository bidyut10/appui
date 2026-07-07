import type { ReactNode } from "react";

const LEFT_W = "7.5rem";
const CONNECTOR_W = "2.75rem";
const CARD_INNER = "15rem";
const PAD_X = "1.25rem";
const RIGHT_W = "5rem";

const CARD_TOTAL = `calc(${CARD_INNER} + 2 * ${PAD_X})`;
const LINE_W = `calc(${CONNECTOR_W} + ${PAD_X})`;

function LeftLine() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 z-30 h-px -translate-y-1/2 bg-rose-500"
      style={{ left: `calc(-1 * ${CONNECTOR_W})`, width: LINE_W }}
    />
  );
}

function RightLine() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 z-30 h-px -translate-y-1/2 bg-rose-500"
      style={{ left: `calc(100% - ${PAD_X})`, width: LINE_W }}
    />
  );
}

function LeftCallout({ index, label }: { index: number; label: string }) {
  return (
    <div className="flex w-full items-center justify-end">
      <span className="whitespace-nowrap text-[11px] text-neutral-800">
        {label}
      </span>
      <span className="mx-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[9px] font-medium leading-none text-white">
        {index}
      </span>
    </div>
  );
}

function RightCallout({ index, label }: { index: number; label: string }) {
  return (
    <div className="flex items-center">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[9px] font-medium leading-none text-white">
        {index}
      </span>
      <span className="ml-1 whitespace-nowrap text-[11px] text-neutral-800">
        {label}
      </span>
    </div>
  );
}

function Highlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 w-full border border-dashed border-rose-200 bg-white ${className}`}
    >
      {children}
    </div>
  );
}

function CardBody({
  children,
  showLeftLine = true,
  showRightLine = false,
}: {
  children: ReactNode;
  showLeftLine?: boolean;
  showRightLine?: boolean;
}) {
  return (
    <div className="relative shrink-0" style={{ width: CARD_TOTAL }}>
      {showLeftLine && <LeftLine />}
      {showRightLine && <RightLine />}
      <div style={{ paddingLeft: PAD_X, paddingRight: PAD_X }}>{children}</div>
    </div>
  );
}

function DesignCard() {
  const whiteLeft = `calc(${LEFT_W} + ${CONNECTOR_W})`;

  return (
    <div className="relative mx-auto w-fit max-w-full py-1">
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-0 rounded-2xl bg-white shadow-[0_6px_24px_rgba(0,0,0,0.05)]"
        style={{ left: whiteLeft, width: CARD_TOTAL }}
      />

      <div className="relative z-10 flex flex-col gap-2.5 py-4">
        <div className="flex items-center">
          <div className="shrink-0" style={{ width: LEFT_W }}>
            <LeftCallout index={1} label="Card Image" />
          </div>
          <div className="shrink-0" style={{ width: CONNECTOR_W }} />
          <CardBody>
            <Highlight className="p-2">
              <div className="h-32 rounded-md bg-[#e5e7eb]" />
            </Highlight>
          </CardBody>
          <div className="shrink-0" style={{ width: RIGHT_W }} />
        </div>

        <div className="flex items-center">
          <div className="shrink-0" style={{ width: LEFT_W }}>
            <LeftCallout index={2} label="Card Headline" />
          </div>
          <div className="shrink-0" style={{ width: CONNECTOR_W }} />
          <CardBody>
            <Highlight className="px-3 py-2.5">
              <p className="font-serif text-sm text-neutral-400">
                Component Name
              </p>
            </Highlight>
          </CardBody>
          <div className="shrink-0" style={{ width: RIGHT_W }} />
        </div>

        <div className="flex items-center">
          <div className="shrink-0" style={{ width: LEFT_W }}>
            <LeftCallout index={3} label="Card Description" />
          </div>
          <div className="shrink-0" style={{ width: CONNECTOR_W }} />
          <CardBody>
            <Highlight className="px-3 py-2.5">
              <p className="font-sans text-xs text-neutral-500"> Component Preview Code</p>
            </Highlight>
          </CardBody>
          <div className="shrink-0" style={{ width: RIGHT_W }} />
        </div>

        <div className="flex items-center">
          <div className="shrink-0" style={{ width: LEFT_W }} />
          <div className="shrink-0" style={{ width: CONNECTOR_W }} />
          <CardBody showLeftLine={false} showRightLine>
            <div className="flex justify-end">
              <Highlight className="px-3.5 py-2">
                <div
                  className="cursor-disabled pointer-events-none rose-500 text-xs rounded bg-neutral-800 px-5 py-1.5 font-sans text-white text-center"
                >
                  Copy Code
                </div>
              </Highlight>
            </div>
          </CardBody>
          <div className="shrink-0" style={{ width: CONNECTOR_W }} />
          <div className="flex shrink-0 items-center" style={{ width: RIGHT_W }}>
            <RightCallout index={4} label="Button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallOptions() {
  return (
    <div className="mt-16 flex w-full justify-center">
      <DesignCard />
    </div>
  );
}
