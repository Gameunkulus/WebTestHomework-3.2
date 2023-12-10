const { test, expect } = require('@playwright/test');

const user = require("../user/user");
const email = user.email;
const password = user.password;

test("test", async ({ page }) => {
    // Go to https://netology.ru/free/management#/
    await page.goto("https://netology.ru/free/management#/");
  
    // Click a
    await page.click("a");
    await expect(page).toHaveURL("https://netology.ru/");
  
    // Click text=Учиться бесплатно
    await page.click("text=Войти");
    await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  
    await page.click(".styles_socialButton__KUXVC.styles_university2035__eZ_jv");

    await expect(page).toHaveURL("https://netology.ru/profile?provider=university2035");

    // Click text=Как перенести своё дело в онлайн
  });