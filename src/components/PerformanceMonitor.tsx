'use client';

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            // In a real app, you would send this to your analytics service
          } else if (entry.entryType === 'first-input') {
            // Type guard to safely access PerformanceEventTiming properties
            if ('processingStart' in entry) {
              const eventEntry = entry as PerformanceEventTiming;
              console.log('FID:', eventEntry.processingStart - eventEntry.startTime);
            }
          } else if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          } else if (entry.entryType === 'navigation') {
            console.log('FCP:', entry.domContentLoadedEventEnd - entry.fetchStart);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    }

    // Resource loading monitoring
    const handleResourceLoad = (event: Event) => {
      const target = event.target as HTMLImageElement | HTMLScriptElement;
      const loadTime = performance.now() - (performance.timeOrigin + (target as any).startTime);
      console.log(`${target.tagName} loaded in ${Math.round(loadTime)}ms`);
    };

    // Add listeners for important resources
    const images = document.querySelectorAll('img');
    images.forEach(img => img.addEventListener('load', handleResourceLoad));

    return () => {
      // Cleanup event listeners
      images.forEach(img => img.removeEventListener('load', handleResourceLoad));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;