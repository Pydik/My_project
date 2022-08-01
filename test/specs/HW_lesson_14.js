const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My test task', () => {
    it('Home_work_lesson_14_actual_version', async () => {
        //Завдання 1
        await browser.url('https://webdriver.io/docs/api.html');
        await browser.pause(2000);   
        //Завжання 2
        const newWind = await $('//*[text()="JSONWire protocol"]');
        const newWin = await newWind.getAttribute('href')
        //Завдання 3
         await browser.newWindow(newWin)
         await browser.pause(2000);
        //Завдання 4
        //element "strong a[href="/SeleniumHQ/selenium/wiki"]" was not found because we are using a new version of the site
        //Завдання 5
        await browser.switchWindow("https://webdriver.io/docs/api/")
        await browser.pause (2000);
        //Завдання 6
        await browser.waitUntil(() => {
            return $('[class="theme-doc-markdown markdown"] h1').getText();
            }, 5000 , 'im not detected');
        //Завдання 7
        const h1 = await $('[class="theme-doc-markdown markdown"] h1');
        h1.saveScreenshot('h1screenshot.png')
        await browser.pause(2000);
        //Завдання 8
        const Twiter = await $('[href="https://twitter.com/webdriverio"]')
        isDisplayed = await Twiter.isDisplayed();
        console.log("Visible button?: " + isDisplayed);
        //Завдання 9
        isDisplayedInViewport = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("Visible button?:" + isDisplayedInViewport);
        //Завдання 10
        const scrolltoTwiter = await $('[href="https://twitter.com/webdriverio"]')
        scrolltoTwiter.scrollIntoView();
        await browser.pause(2000);
        //Завдання 11
        const Twiterrr = await $('[href="https://twitter.com/webdriverio"]')
        isDisplayed = await Twiterrr.isDisplayed();
        console.log("Visible button now?: " + isDisplayed);
        //Завдання 12
        isDisplayedInViewport = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("Visible button now?:" + isDisplayedInViewport);
        //Завдання 13
        const Focus = await $('[href="/blog"]')
        isFocused = await Focus.isFocused();
        console.log("Focused? " + isFocused);
        //Завдання 14
        const blogButtom = await $('[href="/blog"]')
        await blogButtom.click()
        await browser.pause(2000);
        //Завдання 15
        const Focu = await $('[href="/blog"]')
        isFocused = await Focu.isFocused();
        console.log("Focused? " + isFocused);
        //Не розумію чому тут результат False
    });

    xit('Home_work_lesson_14_old_version', async () => {
        //Завдання 1
        await browser.url('https://v5.webdriver.io/docs/api.html');
        await browser.pause(2000);   
        //Завжання 2
        const newWind = await $('//*[text()="JSONWire protocol"]');
        const newWin = await newWind.getAttribute('href')
        //Завдання 3
         await browser.newWindow(newWin)
         await browser.pause(2000);
        //Завдання 4
        //element "strong a[href="/SeleniumHQ/selenium/wiki"]" was not found because we are using a new version of the site
        //Завдання 5
        await browser.switchWindow("https://v5.webdriver.io/docs/api.html")
        await browser.pause (2000);
        //Завдання 6
        //await browser.waitUntil(() => {
            //return $('.postHeaderTitle').getText();
            //}, 5000 , 'im not detected');
        //Завдання 7
        const h1 = await $('.postHeaderTitle');
        h1.saveScreenshot('.postHeader.png')
        await browser.pause(2000);
        //Завдання 8
        const Twiter = await $('[href="https://twitter.com/webdriverio"]')
        isDisplayed = await Twiter.isDisplayed();
        console.log("Visible button?: " + isDisplayed);
        //Завдання 9
        isDisplayedInViewport = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("Visible button?: " + isDisplayedInViewport);
        //Завдання 10
        const scrolltoTwiter = await $('[href="https://twitter.com/webdriverio"]')
        scrolltoTwiter.scrollIntoView();
        await browser.pause(2000);
        //Завдання 11
        const Twiterrr = await $('[href="https://twitter.com/webdriverio"]')
        isDisplayed = await Twiterrr.isDisplayed();
        console.log("Visible button now?: " + isDisplayed);
        //Завдання 12
        isDisplayedInViewport = await $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
        console.log("Visible button now?:" + isDisplayedInViewport);
        //Завдання 13
        const Focus = await $('[href="/blog"]')
        isFocused = await Focus.isFocused();
        console.log("Focused? " + isFocused);
        //Завдання 14
        const blogButtom = await $('[href="/blog"]')
        await blogButtom.click()
        await browser.pause(2000);
        //Так як після відкритя зайту кнопка БЛОГ ндоступна я закоментував завдання 15
        //Завдання 15
        //const Focu = await $('[href="/blog"]')
        //isFocused = await Focu.isFocused();
        //console.log("Focused? " + isFocused);
        //Не розумію чому тут результат False
        

    });

});
