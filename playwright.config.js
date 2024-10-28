// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'tests/snapshot/{arg}{ext}',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html']
  ],
  
  projects: [
    {
        name: 'desktop-smoke-test',
        use: {
            ...devices['Desktop Chrome'],
            userAgent: 'staging-automation-test'
        },
        grep: /^(?!.*@api).*@smoke.*/
    },
    {
        name: 'mobile-device',
        use: { ...devices['Pixel 7'] },
        grep: /@mobile/,
        ignoreSnapshots: true
    },
    {
        name: 'edge',
        use: { ...devices['Desktop Edge'], channel: 'msedge' }
    }
],
  use: {
    trace: 'on-first-retry',
  },
});

