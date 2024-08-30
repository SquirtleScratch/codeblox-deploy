/**
 * path:  __tests__/playwright/simple.spec.ts
 */

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Navigate to the webpage
  await page.goto('https://example.com');

  // Check the title of the page
  await expect(page).toHaveTitle(/Example Domain/);

  // Check that the page contains the text "More information..."
  const moreInfo = page.locator('text=More information...');
  await expect(moreInfo).toBeVisible();
});