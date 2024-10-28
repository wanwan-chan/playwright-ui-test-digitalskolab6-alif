const { test } = require("./base/base-test");
const { CartPage } = require('./page-object/cart');

test('TC-3 Successful login using page object', { tag: ['@page-object', '@smoke']}, async ({ login, dashboardPage }) => {
    await login.login(process.env.STANDARD_USER, process.env.PASSWORD);
    await dashboardPage.validateOnPage();
});

test('TC-4 Successful login using page object - visual user', { tag: ['@mobile']}, async ({ login, dashboardPage }) => {
    await login.login(process.env.VISUAL_USER, process.env.PASSWORD); 
    await dashboardPage.validateOnPage();
});

// test('TC-5 Add item to cart and verify in cart page', async ({ login, dashboardPage, page }) => {
//     const cartPage = new CartPage(page);
    
//     await login.login(process.env.STANDARD_USER, process.env.PASSWORD);
//     await dashboardPage.validateOnPage();
    
//     await dashboardPage.addItemToCart();
    
//     await dashboardPage.goToCart();
//     await cartPage.validateItemInCart("Sauce Labs Backpack");
// });

test.afterEach(async ({ page }, testInfo) => {
    // console.log(testInfo.status);
    // console.log(testInfo.expectedStatus);
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log("Test failed, perform screenshot");
        const image = await page.screenshot({fullPage: true})
        testInfo.attach('failed test', {
            body: image,
            contentType: 'image/png', 
        });
    }
})