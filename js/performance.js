class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    this.measureCoreWebVitals();
    this.setupPerformanceObserver();
    this.monitorResourceLoading();
  }

  measureCoreWebVitals() {
    // LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('LCP:', entry.startTime);
        this.reportMetric('LCP', entry.startTime);
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // FID (First Input Delay)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const fid = entry.processingStart - entry.startTime;
        console.log('FID:', fid);
        this.reportMetric('FID', fid);
      }
    }).observe({ type: 'first-input', buffered: true });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
      this.reportMetric('CLS', clsValue);
    }).observe({ type: 'layout-shift', buffered: true });
  }

  setupPerformanceObserver() {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', {
            dns: entry.domainLookupEnd - entry.domainLookupStart,
            tcp: entry.connectEnd - entry.connectStart,
            request: entry.responseStart - entry.requestStart,
            response: entry.responseEnd - entry.responseStart,
            dom: entry.domContentLoadedEventEnd - entry.responseEnd,
            load: entry.loadEventEnd - entry.loadEventStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });
  }

  monitorResourceLoading() {
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);

      if (slowResources.length > 0) {
        console.warn('Slow loading resources:', slowResources);
      }
    });
  }

  reportMetric(name, value) {
    // Send to analytics service
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value)
      });
    }

    // Send to custom analytics
    if (window.analytics) {
      window.analytics.track('Web Vitals', {
        metric: name,
        value: value,
        url: window.location.pathname
      });
    }
  }
}

// Initialize performance monitoring
if ('performance' in window) {
  new PerformanceMonitor();
}