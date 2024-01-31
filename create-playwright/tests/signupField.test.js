

const { test, expect } = require('@playwright/test');

test('Sign up on the website', async ({ page }) => {
  // Your test actions go here
  await page.goto('http://localhost:3000/signup'); // Replace with your app's URL
  await page.screenshot({ path: 'e1.png' });

  // Select the "Recruiter" option
  await page.check('input[name="signupBy"][value="Recruiter"]');
  

  // Fill in the email field
  await page.fill('input[name="email"]', 'example@email.com');


  // Fill in the mobile number field
  await page.fill('input[name="mobileNumber"]', '1234567890');


  // Fill in the password field
  await page.fill('input[name="password"]', 'yourpassword');
 

  // Fill in the confirm password field
  await page.fill('input[name="confirm_password"]', 'yourpassword');
  

  // Agree to the terms
  await page.check('input[name="agreeTerms"]');


  // Click the submit button
  await page.click('button[type="submit"]');

});


