import React, { useState, ReactNode } from 'react';
import { useCollapseHeight } from './hooks/useCollapseHeight';
import s from './Collapse.module.scss';

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, contentRef } = useCollapseHeight(isOpen);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={s['collapse-container']}>
      <button className={s['collapse-button']} onClick={toggleCollapse}>
        {title}
      </button>
      <div
        style={{
          height: isOpen ? `${height}px` : '0px',
          overflow: 'hidden',
          transition: 'height 300ms ease',
        }}
      >
        <div ref={contentRef} className={s['collapse-content']}>
          {children}
        </div>
      </div>
    </div>
  );
};
