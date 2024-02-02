const {test, expect} = require("@playwright/test");

test("Login to ForgetPassword", async ({page})=>{

    await page.goto("http://localhost:3000/");

    await page.waitForSelector("#Nav_log_btn");
    await page.locator("#Nav_log_btn").click();
    expect(page.url()).toBe("http://localhost:3000/login");

    await page.waitForSelector(':text("Forget password?")');
    await page.locator(':text("Forget password?")').click();
    expect(page.url()).toBe("http://localhost:3000/ForgetPassword");

    await page.waitForSelector("#email");
    await page.waitForSelector(':text("Submit")');

    await page.locator("#email").fill("jeevaelango2020@gmail.com");
    await page.locator(':text("Submit")').click();
    await page.waitForTimeout(5000);

    await page.waitForSelector("#toast_signUp")
    await page.locator("#toast_signUp").click();
    expect(page.url()).toBe("http://localhost:3000/SignUp");

    await page.waitForSelector("#Nav_log_btn");
    await page.locator("#Nav_log_btn").click();
    expect(page.url()).toBe("http://localhost:3000/login");


    await page.waitForSelector(':text("Forget password?")');
    await page.locator(':text("Forget password?")').click();
    expect(page.url()).toBe("http://localhost:3000/ForgetPassword");

    await page.waitForSelector("#email");
    await page.waitForSelector(':text("Submit")');

    await page.locator("#email").fill("jeevaelango94@gmail.com");
    await page.locator(':text("Submit")').click();
    await page.waitForTimeout(10000);

})