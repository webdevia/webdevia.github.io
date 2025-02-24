type Coords = {
  top: number;
  left: number;
};

type CoordProps = {
  targetRect: DOMRect;
  tooltipRect: DOMRect;
  offset: number;
};

export type Position = 'top' | 'bottom' | 'left' | 'right';

const getCenterCoord = (primary: number, secondary: number) => (primary - secondary) / 2;

const YLeft = (primary: DOMRect, secondary: DOMRect) =>
  primary.left + window.scrollX + getCenterCoord(primary.width, secondary.width);

const XTop = (primary: DOMRect, secondary: DOMRect) =>
  primary.top + window.scrollY + getCenterCoord(primary.height, secondary.height);

export const positionMap: Record<Position, (props: CoordProps) => Coords> = {
  top: ({ targetRect, tooltipRect, offset }) => ({
    top: targetRect.top + window.scrollY - tooltipRect.height - offset,
    left: targetRect.left + window.scrollX + getCenterCoord(targetRect.width, tooltipRect.width),
  }),

  bottom: ({ targetRect, tooltipRect, offset }) => ({
    top: targetRect.bottom + window.scrollY + offset,
    left: YLeft(targetRect, tooltipRect),
  }),

  left: ({ targetRect, tooltipRect, offset }) => ({
    top: XTop(targetRect, tooltipRect),
    left: targetRect.left + window.scrollX - tooltipRect.width - offset,
  }),

  right: ({ targetRect, tooltipRect, offset }) => ({
    top: XTop(targetRect, tooltipRect),
    left: targetRect.left + window.scrollX + targetRect.width + offset,
  }),
};
