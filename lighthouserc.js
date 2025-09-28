module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: ['http://localhost:4173'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
        preset: 'perf',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      }
    },
    assert: {
      // Target 100% scores
      assertions: {
        'categories:performance': ['error', { minScore: 1.0 }],
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['error', { minScore: 1.0 }],
        'categories:seo': ['error', { minScore: 1.0 }],

        // Core Web Vitals thresholds for 100% performance
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'speed-index': ['error', { maxNumericValue: 3400 }],

        // Additional performance metrics
        'interactive': ['error', { maxNumericValue: 3800 }],
        'max-potential-fid': ['error', { maxNumericValue: 130 }],

        // Accessibility requirements
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',

        // SEO requirements
        'document-title': 'error',
        'meta-description': 'error',
        'viewport': 'error',

        // Best practices
        'is-on-https': 'off', // Skip for local development
        'uses-text-compression': 'error',
        'uses-responsive-images': 'error'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};