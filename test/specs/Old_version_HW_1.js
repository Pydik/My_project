const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My test task 1', () => {
    it('Open browser', async () => {
        //Завдання 1
        await browser.url('https://v5.webdriver.io/');
        await browser.pause(4000);
    })    

    it('click on API buttom', async () => {    
        //Завдання 2
        const APIButtom = await $('li a[href="/docs/api.html"]')
        await APIButtom.click()
        await browser.pause(000);
    })    

    it('Get URL', async () => {
        //Завдання 3
        console.log(await browser.getUrl());
        await browser.pause(000);
    })    

    it('Get Title', async () => {    
        //Завдання 4
        const APITitle = await $('.postHeaderTitle')
        console.log("Text for element: " + await APITitle.getText())
    })    

    it('Get Attribute JSOWire (href)', async () => {
        //Завдання 5
        const JSONWire = await $('//*[text()="JSONWire protocol"]');
        let attr = await JSONWire.getAttribute('href')
        console.log("href attribute is: " + attr)
        await browser.pause(000);
    })    

    it('write on search (test is)', async () => {
        //Завдання 6
        let input = $('#search_input_react')
        input.addValue('test is')
    })    

    it('write on search (test is + DONE', async () => {    
        //Завдання 7
        let input = $('#search_input_react')
        input.addValue(' DONE!')
        await browser.pause(000);        
    });
});