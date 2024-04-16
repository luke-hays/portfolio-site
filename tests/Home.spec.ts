import { test, expect } from '@playwright/test';

test('Home Page displays In Progress status', async ({ page }) => {
  await page.goto('/');

  // Expect a site navigation bar with elements
  // Github at top should be removed on small screens

  // Expect the name to be on the front page.
  await expect(page.locator('main')).toHaveText(/luke hays/i)

  // Expect projects to be on the front page
  // There should be at least one card with tags

  // Expect latest posts to be on the front page. There should be at least one

  // Expect a footer with social media sites
});
