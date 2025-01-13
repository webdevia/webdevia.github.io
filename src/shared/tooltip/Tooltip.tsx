import React, { useState, useRef, useLayoutEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cn from 'clsx';
import s from './Tooltip.module.scss';

type Coords = {
  top: number;
  left: number;
};

type CoordProps = {
  targetRect: DOMRect;
  tooltipRect: DOMRect;
  offset: number;
};

type Position = 'top' | 'bottom' | 'left' | 'right';

type PositionMap = Record<Position, (props: CoordProps) => Coords>;

const getCenterCoord = (primary: number, secondary: number) => (primary - secondary) / 2;

const YLeft = (primary: DOMRect, secondary: DOMRect) => primary.left + getCenterCoord(primary.width, secondary.width);
const XTop = (primary: DOMRect, secondary: DOMRect) => primary.top + getCenterCoord(primary.height, secondary.height);

const positionMap: PositionMap = {
  top: ({ targetRect, tooltipRect, offset }) => ({
    top: targetRect.top - tooltipRect.height - offset,
    left: YLeft(targetRect, tooltipRect),
  }),
  bottom: ({ targetRect, tooltipRect, offset }) => ({
    top: targetRect.bottom + offset,
    left: YLeft(targetRect, tooltipRect),
  }),
  left: ({ targetRect, tooltipRect, offset }) => ({
    top: XTop(targetRect, tooltipRect),
    left: targetRect.left - (tooltipRect.width + offset),
  }),

  right: ({ targetRect, tooltipRect, offset }) => ({
    top: XTop(targetRect, tooltipRect),
    left: targetRect.left + (targetRect.width + offset),
  }),
};

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  duration?: number;
  position?: Position;
};

export const Tooltip = ({ children, content, duration = 1000, position = 'bottom' }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef(null);
  const mountTimerRef = useRef(null);

  const mountTimer = 10;

  const clearTimeouts = () => {
    timerRef.current && clearTimeout(timerRef.current);
    mountTimerRef.current && clearTimeout(mountTimerRef.current);
  };

  const handleMouseEnter = () => {
    clearTimeouts();
    setMounted(true);
    mountTimerRef.current = setTimeout(() => setVisible(true), mountTimer);
  };

  const handleMouseLeave = () => {
    setVisible(false);
    timerRef.current = setTimeout(() => setMounted(false), duration + mountTimer);
  };

  useLayoutEffect(() => {
    const target = targetRef.current;
    const tooltip = tooltipRef.current;

    if (!target || !tooltip) return;

    tooltip.style.setProperty('--tooltip-animation-ms', `${duration + mountTimer}ms`);

    if (mounted) {
      const targetRect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      console.log(targetRect);
      const calcPosition = positionMap[position];
      setCoords(calcPosition({ targetRect, tooltipRect, offset: 5 }));
    }

    return () => {
      clearTimeouts();
    };
  }, [mounted]);

  return (
    <>
      <span
        className={s['tooltip-target']}
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {mounted &&
        createPortal(
          <div ref={tooltipRef} className={cn(s['tooltip-content'], { [s['fade-out']]: !visible })} style={coords}>
            {content}
          </div>,
          document.body
        )}
    </>
  );
};
