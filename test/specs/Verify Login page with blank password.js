const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Test suit', () => {
    it('test case 3', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const Explore = await $('[href="/login"]');
        await Explore.click();
        await browser.pause(2000);
        //step 3 Go to page is auto
        //step 5
        const Signin = await $('[name="commit"]')
        await Signin.click();
        await browser.pause(2000);
    });

});
