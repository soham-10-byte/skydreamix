import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement, b = document.body;
      const st = 'scrollTop', sh = 'scrollHeight';
      const pct = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  return progress;
};

export const useCursorEffect = () => {
  // Logic for cursor effect can be moved here if needed
};
