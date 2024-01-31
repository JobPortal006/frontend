const { test, expect } = require("@playwright/test");

test("Login Page", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  // Waiting for the email and password fields to appear
  await page.waitForSelector("#email");
  await page.waitForSelector("#password");
  await page.waitForSelector("button[type='submit']");
  await page.waitForSelector('input[type="checkbox"]')

  // Locating the Field using ClassName
  const emailField = page.locator("#email");
  const passwordField = page.locator("#password");
  const rememberMeCheckBox = page.locator('input[type="checkbox"]');
  const submitButton = page.locator("button[type='submit']");


  // Fill the form with some data
  await emailField.fill("jeevaelango886@gmail.com");
  await passwordField.fill("vimal");
  await rememberMeCheckBox.click();

  // Submit the form by clicking a button
  await submitButton.click();

  await page.waitForNavigation();
  const homePage = "http://localhost:3000/home";
  expect(page.url()).toBe(homePage);
  
  await page.waitForSelector('#Nav_btn')
  await page.locator('#Nav_btn').click()
//   expect("http://localhost:3000/login").toBe(page.url())

    


  await page.waitForSelector('#signup_btn');
  await page.locator('#signup_btn').click();
//   expect("http://localhost:3000/signup").toBe(page.url())

  await page.waitForSelector(':text("Sign In")');
    await page.locator(':text("Sign In")').click();
    // expect("http://localhost:3000/login").toBe(page.url());


await page.waitForSelector(':text("Continue with Google")');
await page.locator(':text("Continue with Google")').click();
 await  page.waitForResponse("");
await page.url("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=745831201499-qus2fqp1019dc4h58e37m2nq29eropfq.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fotp-otp-4a574.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDnFC0_32u41LvdR2HaeqPlqcb99Kh5PiHCB_y11c0H2guiC_ouo9XM8IX1p_f1yshTqN4bVThq-FoXqGNFHLo1UHhNcvzJYUPQiTMLyVGHQQqkdDUXZdGDaY8CCuuW7ZgdWA1lI3XGC81BwlUt9NcqJIE7F-PsgX73KzO9yoidn-9q-H3qjG2gyw1i35GlMYZ3h3-b4RDxtw0o7R0iDviBG5XQB6XwL9Q-1DneNxyLYAxQgS691I5PgY14XBKigq7LC6L-L1LA-9dFVH2ryaDn_GGcuhWM4GxPYllZ9AJ49E2tywAJ-ayKNvRUv6ui_KMUQpNc&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=http%3A%2F%2Flocalhost%3A3000&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow");

// expect(googleLoginPage).toBe(page.url());







});

