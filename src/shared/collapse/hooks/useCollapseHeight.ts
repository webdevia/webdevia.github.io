import React, { useEffect, useRef, useState } from 'react';

export const useCollapseHeight = () => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => setHeight(entry.borderBoxSize[0].blockSize));
    });

    const currentContentRef = contentRef.current;

    if (currentContentRef) {
      resizeObserver.observe(currentContentRef);
    }

    return () => {
      if (currentContentRef) {
        resizeObserver.unobserve(currentContentRef);
      }
    };
  }, []);

  return { height, contentRef };
};
