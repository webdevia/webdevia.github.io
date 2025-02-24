import { useState, useRef, useLayoutEffect } from 'react';
import { positionMap, Position } from '../utils/tooltipPosition';

export const useTooltip = (position: Position = 'bottom', duration: number = 1000) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const mountTimerRef = useRef<number | null>(null);

  const mountTimer = 50;

  const clearTimeouts = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (mountTimerRef.current) clearTimeout(mountTimerRef.current);
  };

  const handleMouseEnter = () => {
    clearTimeouts();
    setMounted(true);
    mountTimerRef.current = window.setTimeout(() => setVisible(true), mountTimer);
  };

  const handleMouseLeave = () => {
    setVisible(false);
    timerRef.current = window.setTimeout(() => setMounted(false), duration + mountTimer);
  };

  useLayoutEffect(() => {
    const target = targetRef.current;
    const tooltip = tooltipRef.current;

    if (!target || !tooltip) return;

    if (mounted) {
      tooltipRef.current?.style.setProperty('--tooltip-animation-ms', `${duration + mountTimer}ms`);
      const targetRect = target.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const calcPosition = positionMap[position] ?? positionMap['bottom'];
      setCoords(calcPosition({ targetRect, tooltipRect, offset: 5 }));
    }

    return () => {
      clearTimeouts();
    };
  }, [mounted, position]);

  return {
    visible,
    mounted,
    coords,
    tooltipRef,
    targetRef,
    handleMouseEnter,
    handleMouseLeave,
  };
};