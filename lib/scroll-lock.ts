type CompensatedElement = Readonly<{
  el: HTMLElement;
  marginRight: string;
}>;

type StyleSnapshot = Readonly<{
  scrollY: number;
  body: {
    position: string;
    top: string;
    left: string;
    right: string;
    width: string;
    paddingRight: string;
    overflow: string;
  };
  html: {
    overflow: string;
    scrollbarGutter: string;
  };
  compensated: ReadonlyArray<CompensatedElement>;
}>;

let lockCount = 0;
let snapshot: StyleSnapshot | null = null;

function measureScrollbarWidth() {
  const measured = window.innerWidth - document.documentElement.clientWidth;
  if (measured > 0) return measured;

  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  const width = outer.offsetWidth - inner.offsetWidth;
  outer.remove();
  return width;
}

/** Lock page scroll without shifting centered layout or fixed controls. */
export function lockPageScroll(): () => void {
  lockCount += 1;

  if (lockCount > 1) {
    return () => {
      lockCount = Math.max(0, lockCount - 1);
    };
  }

  const scrollY = window.scrollY;
  const scrollbarWidth = measureScrollbarWidth();
  const body = document.body;
  const html = document.documentElement;

  snapshot = {
    scrollY,
    body: {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
      overflow: body.style.overflow,
    },
    html: {
      overflow: html.style.overflow,
      scrollbarGutter: html.style.scrollbarGutter,
    },
    compensated: [],
  };

  html.style.overflow = "hidden";
  html.style.scrollbarGutter = "auto";
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";

  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${scrollbarWidth}px`;
    html.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);

    const compensated: CompensatedElement[] = [];
    document
      .querySelectorAll<HTMLElement>("[data-scroll-lock-compensate]")
      .forEach((el) => {
        compensated.push({
          el,
          marginRight: el.style.marginRight,
        });
        el.style.marginRight = `${scrollbarWidth}px`;
      });
    snapshot = { ...snapshot, compensated };
  }

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount > 0 || !snapshot) return;

    const state = snapshot;
    snapshot = null;

    body.style.position = state.body.position;
    body.style.top = state.body.top;
    body.style.left = state.body.left;
    body.style.right = state.body.right;
    body.style.width = state.body.width;
    body.style.paddingRight = state.body.paddingRight;
    body.style.overflow = state.body.overflow;

    html.style.overflow = state.html.overflow;
    html.style.scrollbarGutter = state.html.scrollbarGutter;
    html.style.removeProperty("--scrollbar-width");

    state.compensated.forEach(({ el, marginRight }) => {
      el.style.marginRight = marginRight;
    });

    window.scrollTo(0, state.scrollY);
  };
}
