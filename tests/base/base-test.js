const { test:base } = require("@playwright/test")
const { LoginPage } = require("../page-object/login-page")
const { DashboardPage } = require("../page-object/dashboard")

export const test = base.extend({
  login: async ({ page }, use) => {
    const login = new LoginPage(page)
    await login.navigate()
    await use(login);
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});
