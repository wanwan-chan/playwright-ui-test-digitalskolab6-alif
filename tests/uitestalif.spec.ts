import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // user success login
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="password"]').press("Tab");
  await page.locator('[data-test="login-button"]').click();

  // validate user on dashboard after login
  await expect(page.locator('[data-test="title"]')).toBeVisible();

  // add item to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  //validate succes add item to cart
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});
