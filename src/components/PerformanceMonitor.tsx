'use client';

import { useEffect } from 'react';

// Define the LayoutShift interface since it's not available in all TypeScript environments
interface LayoutShift extends PerformanceEntry {
  value?: number;
  sources?: Array<any>;
  hadRecentInput: boolean;
}

// Define the Navigation Timing interface
interface NavigationTiming extends PerformanceEntry {
  domContentLoadedEventEnd?: number;
  fetchStart?: number;
}

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
            // Type guard to safely access LayoutShift properties
            if ('value' in entry && typeof (entry as any).value === 'number') {
              const layoutShiftEntry = entry as LayoutShift;
              console.log('CLS:', layoutShiftEntry.value);
            }
          } else if (entry.entryType === 'navigation') {
            // Type guard to safely access Navigation Timing properties
            const navEntry = entry as NavigationTiming;
            if (navEntry.domContentLoadedEventEnd !== undefined && navEntry.fetchStart !== undefined) {
              console.log('FCP:', navEntry.domContentLoadedEventEnd - navEntry.fetchStart);
            }
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