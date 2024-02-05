const {test,expect} = require("@playwright/test");

test("Login To OTP", async ({page})=>{

    await page.goto("http://localhost:3000/");

    await page.waitForSelector("#Nav_log_btn");
    await page.locator("#Nav_log_btn").click();
    expect(page.url()).toBe("http://localhost:3000/login");

    await page.waitForSelector("#otp_btn");
    await page.locator("#otp_btn").click();
    expect(page.url()).toBe("http://localhost:3000/OTPlogin");

    await page.waitForSelector("input[placeholder='1 (702) 123-4567']");
    await page.waitForSelector(':text("Send OTP")')

    await page.locator("input[placeholder='1 (702) 123-4567']").fill("6380532243");
    await page.locator(':text("Send OTP")').click();
    await page.waitForTimeout(10000);

    await page.waitForSelector("#recaptcha")
    await page.locator("#recaptcha").click();
    await page.waitForTimeout(10000);



   

})