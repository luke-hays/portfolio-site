import { test, expect } from '@playwright/test';

test('Home Page displays Name, Navbar, Footer, 6 Top Projects, and 5 Latest Posts', async ({ page }) => {
  await page.goto('/');

  // Expect a site navigation bar with elements
  await expect(page.getByRole('link', {name: "Home"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Home"})).toHaveAttribute('href', '/');

  await expect(page.getByRole('link', {name: "Resume"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Resume"})).toHaveAttribute('href', '/resume/');

  await expect(page.getByRole('link', {name: "Blog"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Blog"})).toHaveAttribute('href', '/blog/');

  await expect(page.getByRole('link', {name: "Portfolio"})).toBeVisible();
  await expect(page.getByRole('link', {name: "Portfolio"})).toHaveAttribute('href', '/portfolio/');

  // Expect a footer with social media sites
  await expect(page.getByRole('link', {name: "LinkedIn"})).toBeVisible();
  await expect(page.getByRole('link', {name: "LinkedIn"})).toHaveAttribute('href', 'https://www.linkedin.com/in/luke-hays64/');

  // Github at top should be removed on small screens
  await expect(page.getByRole('link', {name: "Github"})).toHaveCount(2);
  for (const link of await page.getByRole('link', {name: "Github"}).all()) {
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', 'https://github.com/luke-hays');
  }

  await expect(page.getByRole('heading', {name: "Luke Hays"})).toBeVisible();
  await expect(page.getByRole('heading', {name: "Projects"})).toBeVisible();
  await expect(page.getByRole('heading', {name: "Latest Posts"})).toBeVisible();

  if (process.env.CI) {
    // Expect projects to be on the front page
    await expect(page.getByRole('link', {name: "lukehays.com"})).toBeVisible();
    await expect(page.getByRole('link', {name: "lukehays.com"})).toHaveAttribute('href', 'https://github.com/luke-hays/portfolio-site');

    await expect(page.getByRole('link', {name: "Astro", exact: true})).toBeVisible();
    await expect(page.getByRole('link', {name: "Astro"})).toHaveAttribute('href', 'https://astro.build/');

    // Expect latest posts to be on the front page. There should be at least one
    for (const link of await page.getByRole('link', {name: /Test Post/}).all()) {
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', /\/posts\/*\//);
    }
  }
});
