import React, { useEffect, useRef, useState } from "react";

export interface DropdownItem {
  label?: string;
  icon?: React.ReactElement;
  kbd?: string;
  danger?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex justify-center"
      >
        {trigger}
      </div>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100]
          left-1/2 -translate-x-1/2 
          min-w-[200px] w-max max-w-[300px]
          bg-white border border-neutral-200/80 rounded-2xl p-1.5 
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] 
          backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${
            open
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 -translate-y-2 invisible"
          }
        `}
        style={{ transformOrigin: "top" }}
      >
        {items?.map((item, i) =>
          item.separator ? (
            <div key={i} className="h-px bg-neutral-100 my-1.5 mx-1" />
          ) : (
            <button
              key={item.label || i}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className={`
                w-full group flex items-center justify-between gap-10 px-3 py-2.5 rounded-xl text-[13px] font-medium cursor-pointer 
                transition-all duration-200 text-left whitespace-nowrap
                ${
                  item.danger
                    ? "text-red-500 hover:bg-red-50/50"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }
              `}
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <div
                    className={`transition-transform duration-300 group-hover:scale-110 ${item.danger ? "text-red-400" : "text-neutral-400 group-hover:text-neutral-900"}`}
                  >
                    {React.cloneElement(item.icon as React.ReactElement<any>, {
                      size: 16,
                      strokeWidth: 2,
                    })}
                  </div>
                )}
                <span>{item.label}</span>
              </div>

              {item.kbd && (
                <div className="flex items-center opacity-30 group-hover:opacity-100 transition-opacity ml-auto">
                  <kbd className="min-w-6 h-5 flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-1.5 font-mono text-[10px] text-neutral-500 shadow-sm">
                    {item.kbd}
                  </kbd>
                </div>
              )}
            </button>
          ),
        )}
      </div>
    </div>
  );
};
