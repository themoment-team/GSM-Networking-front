import { useEffect } from 'react';

interface IntersectionObserverProps {
  root: Element | null;
  rootMargin: string;
  threshold: number;
}

export const useIntersectionObserver = (
  targetRef: React.MutableRefObject<Element | null>,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverProps
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const target = targetRef.current;
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [callback, options, targetRef]);
};
