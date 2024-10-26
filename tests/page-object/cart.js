const { expect } = require("@playwright/test");

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItem = page.locator('.inventory_item_name'); // Lokator untuk nama item di keranjang
    }

    // Metode untuk memverifikasi item di dalam keranjang
    async validateItemInCart(itemName) {
        await expect(this.cartItem).toHaveText(itemName); // Memverifikasi nama item sesuai
    }
}
