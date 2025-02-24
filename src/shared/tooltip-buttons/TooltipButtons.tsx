import React, { ReactNode } from 'react';
import { Position } from '../tooltip/utils/tooltipPosition';
import {Tooltip} from "../tooltip/Tooltip";
import { Button } from '../button/Button';
import s from './TooltipButtons.module.scss';

type PredefinedTooltipProps = {
  children: ReactNode;
  position: Position;
};

const PredefinedTooltip = ({ children, position }: PredefinedTooltipProps) => (
  <Tooltip content="Всплывающая подсказка" position={position}>
    {children}
  </Tooltip>
);

export const TooltipButtons = () => (
  <div className={s['tooltip-buttons']}>
    <PredefinedTooltip position={'left'}>
      <Button>{'Слева'}</Button>
    </PredefinedTooltip>
    <PredefinedTooltip position={'right'}>
      <Button>{'Справа'}</Button>
    </PredefinedTooltip>
    <PredefinedTooltip position={'top'}>
      <Button>{'Сверху'}</Button>
    </PredefinedTooltip>
    <PredefinedTooltip position={'bottom'}>
      <Button>{'Снизу'}</Button>
    </PredefinedTooltip>
  </div>
);
