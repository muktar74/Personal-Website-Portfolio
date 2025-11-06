import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit
): string => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Re-initialize observer when sectionIds change
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      // Find the entry that is intersecting the most
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);

      if (intersectingEntry) {
         setActiveSection(intersectingEntry.target.id);
      }
    }, {
      rootMargin: '-30% 0px -70% 0px', // Trigger when section is in the middle 40% of the viewport
      threshold: 0,
      ...options,
    });

    const { current: currentObserver } = observer;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => currentObserver.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};
