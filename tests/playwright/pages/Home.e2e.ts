import { test, expect } from "@playwright/test";

test("should have specific app title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.locator("main > h1"),
  ).toContainText("Welcome to Next.js!");
});

test("should have only one h1 heading", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h1")).toBeVisible();
});
