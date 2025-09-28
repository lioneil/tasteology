/**
 * Performance Monitoring & Feature Detection
 */

/* eslint-env browser */
/* global CSS, PerformanceObserver, IntersectionObserver, Image, setTimeout */

// Feature detection for enhanced functionality
class FeatureDetection {
  static hasIntersectionObserver() {
    return 'IntersectionObserver' in window;
  }

  static hasResizeObserver() {
    return 'ResizeObserver' in window;
  }

  static hasWebP() {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  static supportsCSSGrid() {
    return CSS.supports('display', 'grid');
  }

  static supportsCustomProperties() {
    return CSS.supports('color', 'var(--test)');
  }

  static supportsObjectFit() {
    return CSS.supports('object-fit', 'cover');
  }
}

// Performance monitoring for Core Web Vitals
class PerformanceMonitor {
  static measureCLS() {
    return new Promise((resolve) => {
      let clsValue = 0;
      const clsEntries = [];

      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            clsEntries.push(entry);
          }
        }
      });

      observer.observe({ type: 'layout-shift', buffered: true });

      setTimeout(() => {
        observer.disconnect();
        resolve({ value: clsValue, entries: clsEntries });
      }, 5000);
    });
  }

  static measureLCP() {
    return new Promise((resolve) => {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    });
  }

  static measureFID() {
    return new Promise((resolve) => {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          resolve(entry.processingStart - entry.startTime);
        }
      });

      observer.observe({ type: 'first-input', buffered: true });
    });
  }
}

// Enhanced lazy loading with Intersection Observer
class LazyImageLoader {
  constructor() {
    this.imageObserver = null;
    this.images = document.querySelectorAll('img[loading="lazy"]');
    this.init();
  }

  init() {
    if (FeatureDetection.hasIntersectionObserver()) {
      this.createObserver();
      this.observeImages();
    } else {
      // Fallback: load all images immediately
      this.loadAllImages();
    }
  }

  createObserver() {
    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.imageObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px 0px'
    });
  }

  observeImages() {
    this.images.forEach(img => {
      this.imageObserver.observe(img);
    });
  }

  loadImage(img) {
    // Only add loading class if image hasn't loaded yet
    if (!img.complete) {
      img.classList.add('loading');
    }

    img.addEventListener('load', () => {
      img.classList.remove('loading');
      img.classList.add('loaded');
    });

    img.addEventListener('error', () => {
      img.classList.remove('loading');
      img.classList.add('error');
    });

    // If image is already loaded, mark it as loaded
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
    }
  }

  loadAllImages() {
    this.images.forEach(img => this.loadImage(img));
  }
}

// Browser compatibility testing
class BrowserTester {
  static runCompatibilityTests() {
    const tests = {
      cssGrid: CSS.supports('display', 'grid'),
      flexbox: CSS.supports('display', 'flex'),
      webp: false, // Will be tested asynchronously
      intersectionObserver: 'IntersectionObserver' in window,
      customProperties: CSS.supports('color', 'var(--test)'),
      objectFit: CSS.supports('object-fit', 'cover')
    };

    console.log('Browser Compatibility:', tests);
    return tests;
  }

  static testResponsiveBreakpoints() {
    const breakpoints = [320, 480, 768, 1024, 1200];
    const currentWidth = window.innerWidth;

    breakpoints.forEach(bp => {
      if (currentWidth >= bp) {
        console.log(`✓ Breakpoint ${bp}px active`);
      }
    });
  }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', async () => {
  // Feature detection and class application
  const supportsWebP = await FeatureDetection.hasWebP();
  if (supportsWebP) {
    document.documentElement.classList.add('webp');
  } else {
    document.documentElement.classList.add('no-webp');
  }

  // CSS Grid support
  if (FeatureDetection.supportsCSSGrid()) {
    document.documentElement.classList.add('css-grid');
  } else {
    document.documentElement.classList.add('no-css-grid');
  }

  // Initialize lazy loading
  new LazyImageLoader();

  // Run browser compatibility tests in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    BrowserTester.runCompatibilityTests();
    BrowserTester.testResponsiveBreakpoints();
  }
});

// Run performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.addEventListener('load', async () => {
    try {
      const cls = await PerformanceMonitor.measureCLS();
      const lcp = await PerformanceMonitor.measureLCP();

      console.log('Core Web Vitals:', {
        CLS: cls.value,
        LCP: lcp,
        timestamp: new Date().toISOString()
      });

      // Performance budget warnings
      if (lcp > 2500) {
        console.warn('⚠️ LCP exceeds 2.5s target:', lcp);
      }
      if (cls.value > 0.1) {
        console.warn('⚠️ CLS exceeds 0.1 target:', cls.value);
      }
    } catch (err) {
      console.log('Performance monitoring not available in this browser:', err.message);
    }
  });
}

export { FeatureDetection, PerformanceMonitor, LazyImageLoader, BrowserTester };
