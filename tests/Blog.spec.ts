import { test, expect } from '@playwright/test';

test('Home Page displays In Progress status', async ({ page }) => {
  await page.goto('/blog/');

  // Expect a site navigation presence
  // expect footer
  // expect header
  // Expect sections sorted by year and posts
  // links should nvigate to post
});
