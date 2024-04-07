import { test, expect } from '@playwright/test';

test('Home Page displays In Progress status', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('main')).toHaveText(/in progress/i)
});
