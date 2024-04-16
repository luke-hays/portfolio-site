import { test, expect } from '@playwright/test';

test('Home Page displays Name, Navbar, Footer, 6 Top Projects, and 5 Latest Posts', async ({ page }) => {
  await page.goto('/');

  // Expect a site navigation bar with elements
  await expect(page.getByRole('link', {name: "Home"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Resume"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Blog"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Portfolio"})).toBeVisible();

  // Expect a footer with social media sites
  await expect(page.getByRole('link', {name: "LinkedIn"})).toBeVisible();

  // Github at top should be removed on small screens
  await expect(page.getByRole('link', {name: "Github"})).toHaveCount(2);

  await expect(page.getByRole('heading', {name: "Luke Hays"})).toBeVisible();
  await expect(page.getByRole('heading', {name: "Projects"})).toBeVisible();
  await expect(page.getByRole('heading', {name: "Latest Posts"})).toBeVisible();

  // Expect projects to be on the front page
  await expect(page.getByRole('link', {name: "lukehays.com"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Astro"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Nano Stores"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Tailwind CSS"})).toBeVisible();

  // Expect latest posts to be on the front page. There should be at least one
  for (const link of await page.getByRole('link', {name: /Test Post/}).all()) {
    await expect(link.first()).toBeVisible();
  }
});
