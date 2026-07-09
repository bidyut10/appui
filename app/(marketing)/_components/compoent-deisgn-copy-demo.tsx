import type { CSSProperties, ReactNode } from "react";
import { BOX_PATTERN } from "@/lib/shared";

const cardVars =
  "[--left-w:7.5rem] [--connector-w:2.75rem] [--card-inner:15rem] [--pad-x:1.25rem] [--right-w:5rem] max-[549px]:[--left-w:5.75rem] max-[549px]:[--connector-w:1.75rem] max-[549px]:[--card-inner:10rem] max-[549px]:[--pad-x:0.75rem] max-[549px]:[--right-w:3.75rem]";

const cardTotal = "calc(var(--card-inner) + 2 * var(--pad-x))";
const lineWidth = "calc(var(--connector-w) + var(--pad-x))";
const whiteLeft = "calc(var(--left-w) + var(--connector-w))";

function colWidth(value: string): CSSProperties {
  return { width: value };
}

function LeftLine() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 z-30 h-px -translate-y-1/2 bg-rose-500"
      style={{ left: "calc(-1 * var(--connector-w))", width: lineWidth }}
    />
  );
}

function RightLine() {
  return (
    <div
      className="pointer-events-none absolute top-1/2 z-30 h-px -translate-y-1/2 bg-rose-500"
      style={{ left: "calc(100% - var(--pad-x))", width: lineWidth }}
    />
  );
}

function LeftCallout({ index, label }: { index: number; label: string }) {
  return (
    <div className="flex w-full items-center justify-end">
      <span className="text-[11px] whitespace-nowrap text-neutral-800 max-[549px]:text-[9px]">
        {label}
      </span>
      <span className="mx-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[9px] leading-none font-medium text-white max-[549px]:h-3.5 max-[549px]:w-3.5 max-[549px]:text-[8px]">
        {index}
      </span>
    </div>
  );
}

function RightCallout({ index, label }: { index: number; label: string }) {
  return (
    <div className="flex items-center">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[9px] leading-none font-medium text-white max-[549px]:h-3.5 max-[549px]:w-3.5 max-[549px]:text-[8px]">
        {index}
      </span>
      <span className="ml-1 text-[11px] whitespace-nowrap text-neutral-800 max-[549px]:text-[9px]">
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
    <div className="relative shrink-0" style={colWidth(cardTotal)}>
      {showLeftLine && <LeftLine />}
      {showRightLine && <RightLine />}
      <div
        style={{
          paddingLeft: "var(--pad-x)",
          paddingRight: "var(--pad-x)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function DesignCard() {
  return (
    <div className={`relative mx-auto w-fit max-w-full py-1 ${cardVars}`}>
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-0 rounded-2xl bg-white shadow-[0_6px_24px_rgba(0,0,0,0.05)] max-[549px]:rounded-xl max-[549px]:shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
        style={{ left: whiteLeft, width: cardTotal }}
      />

      <div className="relative z-10 flex flex-col gap-2.5 py-4 max-[549px]:gap-2 max-[549px]:py-3">
        <div className="flex items-center">
          <div className="shrink-0" style={colWidth("var(--left-w)")}>
            <LeftCallout index={1} label="Preview" />
          </div>
          <div className="shrink-0" style={colWidth("var(--connector-w)")} />
          <CardBody>
            <Highlight className="p-2 max-[549px]:p-1.5">
              <div
                className="h-32 rounded-md border border-neutral-100 max-[549px]:h-24"
                style={BOX_PATTERN}
              />
            </Highlight>
          </CardBody>
          <div className="shrink-0" style={colWidth("var(--right-w)")} />
        </div>

        <div className="flex items-center">
          <div className="shrink-0" style={colWidth("var(--left-w)")}>
            <LeftCallout index={2} label="Component Name" />
          </div>
          <div className="shrink-0" style={colWidth("var(--connector-w)")} />
          <CardBody>
            <Highlight className="px-3 py-2.5 max-[549px]:px-2 max-[549px]:py-1.5">
              <p className="font-serif text-sm text-neutral-300 max-[549px]:text-[11px]">
                Annotation Text
              </p>
            </Highlight>
          </CardBody>
          <div className="shrink-0" style={colWidth("var(--right-w)")} />
        </div>

        <div className="flex items-center">
          <div className="shrink-0" style={colWidth("var(--left-w)")}>
            <LeftCallout index={3} label="Code" />
          </div>
          <div className="shrink-0" style={colWidth("var(--connector-w)")} />
          <CardBody>
            <Highlight className="px-3 py-2.5 max-[549px]:px-2 max-[549px]:py-1.5">
              <pre className="max-h-10 overflow-hidden font-mono text-[9px] leading-[1.35] text-neutral-200 max-[549px]:max-h-8 max-[549px]:text-[8px]">
                <code>{`export function Card() {
  return <div />;`}</code>
              </pre>
            </Highlight>
          </CardBody>
          <div className="shrink-0" style={colWidth("var(--right-w)")} />
        </div>

        <div className="flex items-center">
          <div className="shrink-0" style={colWidth("var(--left-w)")} />
          <div className="shrink-0" style={colWidth("var(--connector-w)")} />
          <CardBody showLeftLine={false} showRightLine>
            <div className="flex justify-end">
              <Highlight className="px-3.5 py-2 max-[549px]:px-2.5 max-[549px]:py-1.5">
                <div className="cursor-disabled pointer-events-none rounded bg-neutral-100 px-5 py-1.5 text-center font-sans text-xs text-neutral-200 max-[549px]:px-4 max-[549px]:py-1.5 max-[549px]:text-[10px]">
                  Copy Code
                </div>
              </Highlight>
            </div>
          </CardBody>
          <div className="shrink-0" style={colWidth("var(--connector-w)")} />
          <div
            className="flex shrink-0 items-center"
            style={colWidth("var(--right-w)")}
          >
            <RightCallout index={4} label="Button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstallOptions() {
  return (
    <div className="mt-16 flex w-full justify-center max-[549px]:mt-10">
      <DesignCard />
    </div>
  );
}
