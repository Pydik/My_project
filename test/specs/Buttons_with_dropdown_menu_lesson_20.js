const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Test_case', () => {
    it('Button_Explore', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const Explore = await $('//summary[contains(text(),"Explore")]');
        await Explore.click();
        await browser.pause(2000);
    });

    it('Button_Pricing', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const Explore = await $('//summary[contains(text(),"Pricing")]');
        await Explore.click();
        await browser.pause(2000);
    });

    it('Button_Product', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const Explore = await $('//summary[contains(text(),"Product")]');
        await Explore.click();
        await browser.pause(2000);
    });

});