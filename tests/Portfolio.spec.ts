import { test, expect } from '@playwright/test';

test('Home Page displays In Progress status', async ({ page }) => {
  await page.goto('/portfolio/');

  // Expect a site navigation presence
  // expect footer
  // expect header
  // expect repo link
  // expect description
  // expect year
  // expect tags with links
});
