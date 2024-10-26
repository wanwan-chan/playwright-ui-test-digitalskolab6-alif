const { expect } = require("@playwright/test");

export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = page.getByText('Swag Labs');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    }

    async validateOnPage() {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.menuButton).toBeVisible();
    }

    async addItemToCart() {
        const itemButton = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'); // Ganti sesuai kebutuhan
        await expect(itemButton).toBeVisible(); 
        await itemButton.click(); 
    }

    async goToCart() {
        await this.page.waitForTimeout(1000);
        const cartButton = this.page.getByRole('link', { name: 'Cart' });
        await expect(cartButton).toBeVisible(); 
        await cartButton.click();
    }
}
