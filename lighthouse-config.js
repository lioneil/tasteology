// Lighthouse configuration for mobile and desktop testing
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runLighthouse(url, options, config) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
  });

  options.port = chrome.port;
  const runnerResult = await lighthouse(url, options, config);

  await chrome.kill();
  return runnerResult;
}

async function runTests() {
  const url = 'http://localhost:4173';

  console.log('🚀 Running Lighthouse tests for 100% scores...\n');

  // Mobile configuration
  const mobileConfig = {
    extends: 'lighthouse:default',
    settings: {
      formFactor: 'mobile',
      throttling: {
        rttMs: 150,
        throughputKbps: 1.6 * 1024,
        cpuSlowdownMultiplier: 4
      },
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 667,
        deviceScaleFactor: 2
      }
    }
  };

  // Desktop configuration
  const desktopConfig = {
    extends: 'lighthouse:default',
    settings: {
      formFactor: 'desktop',
      throttling: {
        rttMs: 40,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1
      }
    }
  };

  try {
    // Run mobile test
    console.log('📱 Running mobile audit...');
    const mobileResult = await runLighthouse(url, {}, mobileConfig);
    const mobileReport = mobileResult.report;
    fs.writeFileSync('lighthouse-mobile.html', mobileReport);

    // Run desktop test
    console.log('🖥️  Running desktop audit...');
    const desktopResult = await runLighthouse(url, {}, desktopConfig);
    const desktopReport = desktopResult.report;
    fs.writeFileSync('lighthouse-desktop.html', desktopReport);

    // Display results
    const mobileScores = mobileResult.lhr.categories;
    const desktopScores = desktopResult.lhr.categories;

    console.log('\n📊 MOBILE SCORES:');
    console.log(`Performance: ${Math.round(mobileScores.performance.score * 100)}/100`);
    console.log(`Accessibility: ${Math.round(mobileScores.accessibility.score * 100)}/100`);
    console.log(`Best Practices: ${Math.round(mobileScores['best-practices'].score * 100)}/100`);
    console.log(`SEO: ${Math.round(mobileScores.seo.score * 100)}/100`);

    console.log('\n📊 DESKTOP SCORES:');
    console.log(`Performance: ${Math.round(desktopScores.performance.score * 100)}/100`);
    console.log(`Accessibility: ${Math.round(desktopScores.accessibility.score * 100)}/100`);
    console.log(`Best Practices: ${Math.round(desktopScores['best-practices'].score * 100)}/100`);
    console.log(`SEO: ${Math.round(desktopScores.seo.score * 100)}/100`);

    // Check for 100% scores
    const allMobile100 = Object.values(mobileScores).every(category => category.score === 1);
    const allDesktop100 = Object.values(desktopScores).every(category => category.score === 1);

    console.log(`\n🎯 Target Achievement:`);
    console.log(`Mobile 100%: ${allMobile100 ? '✅ ACHIEVED' : '❌ NOT YET'}`);
    console.log(`Desktop 100%: ${allDesktop100 ? '✅ ACHIEVED' : '❌ NOT YET'}`);

    console.log('\n📄 Reports saved:');
    console.log('- lighthouse-mobile.html');
    console.log('- lighthouse-desktop.html');

  } catch (error) {
    console.error('Error running Lighthouse:', error);
    process.exit(1);
  }
}

module.exports = { runTests };