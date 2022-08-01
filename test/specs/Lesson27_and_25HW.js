
const assert = require('assert')
const mainpage = require('../page/old_version/main.page.js');
const docsPage = require('../page/old_version/docs.page.js');
const apiPage = require('../page/old_version/api.page.js');
const helppage = require('../page/old_version/help.page.js');


describe('Page_object_old_version_lesson27', () => {
    xit('should demostrate addValue command', async () => {
        await browser.url('https://v5.webdriver.io/');
        mainpage.searchInput.addValue('test');
        await browser.pause(2000);
        mainpage.setUserName(" type with method");
        await browser.pause(2000);
    })

    xit('should_click_on_Guide_buuton_HW_lesson_27', async () => {
        await browser.url('https://v5.webdriver.io/');
        await browser.pause(2000);
        mainpage.ButtonGiude();
        await browser.pause(2000);
    })
    
    xit('should_click_on_Edit_buuton_lesson_25', async () => {
        await browser.url('https://webdriver.io/docs/gettingstarted#initiate-a-webdriverio-setup');
        await browser.pause(2000);
        docsPage.clickeditButton();
        await browser.pause(2000);
    })

    it('HWL_lesson_27', async () => {
        await browser.url('https://v5.webdriver.io/');
        await browser.pause(2000);
        mainpage.clickButtonAPI();
        await browser.pause(2000);
        apiPage.clickacontributetButton();
        await browser.pause(2000);
        apiPage.clickhelpButton();
        await browser.pause();
        helppage.isdisplaysacontributetButton();
        await browser.pause(4000);
        //At this point we will stop since this is an old version of the site
    })
});