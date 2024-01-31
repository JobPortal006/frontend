const { test, expect } = require('@playwright/test');

test('Login', async ({page})=>{
    await page.goto('http://localhost:3000/login');
})