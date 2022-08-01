
//My_test_task_1_lesson7_Actual_version
describe('My_test_task_1_lesson7_Actual_version', () => {
    it('open browser', async () => {
        //Завдання 1
        await browser.setWindowSize(1920, 1080)
        await browser.url('https://webdriver.io/');
        await browser.pause(2000);
    })
    it('click on API Buttom', async () => {
        //Завдання 2
        const APIButtom = await $('[href="/docs/api"]')
        await APIButtom.click()
        await browser.pause(2000);
    })

    it('We get url', async () => {
        //Завдання 3
        console.log(await browser.getUrl());
        await browser.pause(2000);
    })
    
    it('We get Title(h1)', async () => {
        //Завдання 4
        const APITitle = await $('[class="theme-doc-markdown markdown"] h1')
        console.log("Text for element: " + await APITitle.getText())
    })

    it('We get attribute JSOWire (href)', async () => {
        //Завдання 5
        const JSONWire = await $('//*[text()="JSONWire protocol"]');
        let attr = await JSONWire.getAttribute('href')
        console.log("href attribute is: " + attr)
        await browser.pause(4000);
    })

    it('Clicl on Search and write test is', async () => {
        //Завдання 6
        const SearchButtom = await $('//span[contains(text(),"Search")]')
        await SearchButtom.click()
        await browser.pause(4000);
        let input = $('[class="DocSearch-Input"]')
        input.addValue('test is')

    })

    it('Write DONE', async () => {
        //Завдання 7
        let input = $('[class="DocSearch-Input"]')
        input.addValue(' DONE!')
        await browser.pause(4000);        
    });


    //My_test_task_1_lesson7_old_version_of_the_site
    

    xit('Open browser', async () => {
        //Завдання 1
        await browser.url('https://v5.webdriver.io/');
        await browser.pause(4000);
    })    

    xit('click on API buttom', async () => {    
        //Завдання 2
        const APIButtom = await $('li a[href="/docs/api.html"]')
        await APIButtom.click()
        await browser.pause(000);
    })    

    xit('Get URL', async () => {
        //Завдання 3
        console.log(await browser.getUrl());
        await browser.pause(000);
    })    

    xit('Get Title', async () => {    
        //Завдання 4
        const APITitle = await $('.postHeaderTitle')
        console.log("Text for element: " + await APITitle.getText())
    })    

    xit('Get Attribute JSOWire (href)', async () => {
        //Завдання 5
        const JSONWire = await $('//*[text()="JSONWire protocol"]');
        let attr = await JSONWire.getAttribute('href')
        console.log("href attribute is: " + attr)
        await browser.pause(000);
    })    

    xit('write on search (test is)', async () => {
        //Завдання 6
        let input = $('#search_input_react')
        input.addValue('test is')
    })    

    xit('write on search (test is + DONE', async () => {    
        //Завдання 7
        let input = $('#search_input_react')
        input.addValue(' DONE!')
        await browser.pause(000);        
    });
});