//For lesson 20
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Test suit', () => {
    it('Button Facebook', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const Facebook = await $('[src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"]');
        await Facebook.scrollIntoView();
        await browser.pause(2000);
        //step 3 Go to page is auto
        //step 5
        await Facebook.click();
        await browser.pause(2000);
    });

    it('Button LinkedIn', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const LinkedIn = await $('[src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"]');
        await LinkedIn.scrollIntoView();
        await browser.pause(2000);
        //step 3 Go to page is auto
        //step 4
        await LinkedIn.click();
        await browser.pause(4000);
    });

    it('Button You Tube', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const YouTube = await $('[src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"]');
        await YouTube.scrollIntoView();
        await browser.pause(2000);
        //step 3 Go to page is auto
        //step 4
        await YouTube.click();
        await browser.pause(2000);
    });

    it('Button Twitter', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const Twitter = await $('[src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"]');
        await Twitter.scrollIntoView();
        await browser.pause(2000);
        //step 3 Go to page is auto
        //step 4
        await Twitter.click();
        await browser.pause(4000);
    });

    it('Button GitHub', async () => {
        //step 1
        await browser.url('https://github.com/');
        await browser.pause(2000);   
        //step 2
        const GitHub = await $('[src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"]');
        await GitHub.scrollIntoView();
        await browser.pause(2000);
        //step 3 Go to page is auto
        //step 4
        await GitHub.click();
        await browser.pause(4000);
    });


});