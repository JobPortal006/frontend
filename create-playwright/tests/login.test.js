const { test, expect } = require('@playwright/test');

test('Login', async ({page})=>{
    await page.goto('http://localhost:3000/login');

    const  emailField = page.locator('#email');
    const passwordField = page.locator('#password');
    const submitButton = page.locator("button[type='submit']");
    
    // Fill the form with some data
    await emailField.fill('jeeva2002@gmail.com');
    await passwordField.fill('Jeeva@123');

    // Submit the form by clicking a button
    await submitButton.click();
});


