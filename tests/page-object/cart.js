const { expect } = require("@playwright/test");

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItem = page.locator('.inventory_item_name');
    }

    async validateItemInCart(itemName) {
        await expect(this.cartItem).toHaveText(itemName); 
    }
}
