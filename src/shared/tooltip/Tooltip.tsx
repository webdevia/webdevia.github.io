import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useTooltip } from './hooks/useTooltip';
import { Position } from './utils/tooltipPosition';
import cn from 'clsx';
import s from './Tooltip.module.scss';

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  duration?: number;
  position?: Position;
};

export const Tooltip = ({ children, content, duration = 1000, position = 'bottom' }: TooltipProps) => {
  const { visible, mounted, coords, tooltipRef, targetRef, handleMouseEnter, handleMouseLeave } = useTooltip(
    position,
    duration
  );

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
