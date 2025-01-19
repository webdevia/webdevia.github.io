import React, { useState, useRef, useEffect, ReactNode } from 'react';
import s from './Collapse.module.scss';

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export const Collapse = ({ title, children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) => setHeight(entry.borderBoxSize[0].blockSize))
    );

    const currentContentRef = contentRef.current;

    currentContentRef && resizeObserver.observe(currentContentRef);

    return () => {
      currentContentRef && resizeObserver.unobserve(currentContentRef);
    };
  }, []);

  return (
    <div className={s['collapse-container']}>
      <button className={s['collapse-button']} onClick={toggleCollapse}>
        {title}
      </button>
      <div
        style={{
          height: `${isOpen ? height : 0}px`,
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
