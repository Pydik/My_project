const github = require('../page/hwlesson29/github.page.js');
const signupforGitHub = require('../page/hwlesson29/github_signup.page.js');
const signinforGitHub = require('../page/hwlesson29/github_signin.page.js');
const githubmainmenu = require('../page/hwlesson29/github_main.page.js');
const github_pricing = require('../page/hwlesson29/github_pricing.page.js');
const github_free_form = require('../page/hwlesson29/github_free_form.page.js');
const github_explore = require('../page/hwlesson29/github_explore.page.js');
const github_topics = require('../page/hwlesson29/github_topics.page.js');
const github_search = require('../page/hwlesson29/github_search.page.js');
const pick_your_trial_plan = require('../page/hwlesson29/pick_your_plan_trial.page.js');
const github_enterprise_serverPage = require('../page/hwlesson29/github_enterprise_server.page.js');
const github_carrerspagePage = require('../page/hwlesson29/github_carrerspage.page.js');



function random_input(){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
    return text + '@gmail.com';
    }
//ця функція генерує рандомний стрінг з gmail.com

function random_inputе(){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
    return text;
    }
////ця функція генерує рандомний стрінг без gmail.com


    
describe('HW_lesson29', () => {
    xit('test_case1', async () => {
        await browser.url('https://github.com/');
        github.Emailinput();
        github.addValuea(random_input()); 
        github.ClicksignupforGitHubButton();
        await browser.pause(8000);
        signupforGitHub.emaildieId(random_input());
        await browser.pause(3000);
        signupforGitHub.continue();
        await browser.pause(3000);
        signupforGitHub.password(random_inputе());
        await browser.pause(2000);
        signupforGitHub.continue2();
        signupforGitHub.login(random_inputе())
        await browser.pause(2000);
        signupforGitHub.continue3();
        signupforGitHub.continue4();
        await browser.pause(4000);
        //const url = await browser.getUrl();
        //isDisplayed = await url.isDisplayed();
        //console.log(isDisplayed);
        //Тут я е зміг перевірити силку , можливо ви мені підкажите як це зробити?
        signupforGitHub.Verifyyacctext();
        await browser.pause(4000);
        //Я знаю що основна задача автотестів це ускорити процесс тестування , але я ставив паузи де це необхідни і щоб ви встигди подивить все
    });

    xit('test_case2', async () => {
        await browser.url('https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home');
        await browser.pause(2000);
        signinforGitHub.setemail("Pydik")
        signinforGitHub.setpassword("Rfz9s2vrfz9s2v")
        await browser.pause(1000);
        signinforGitHub.signinbutt0n();
        await browser.pause(3000);
        githubmainmenu.Marketplase();
        await browser.pause(1000);
        githubmainmenu.Pulltopbutt0n();
        await browser.pause(2000);
        githubmainmenu.issuesisDisplayed();
        await browser.pause(4000);
    });

    xit('test_case3', async () => {
        await browser.url('https://github.com/login')
        signinforGitHub.forgot_click();
        await browser.pause(2000);
        //На даному етапі цей тест кейс закінчується так як далі потрібно пройти капчу , але я зробив тест-кейси подібні і вони з позyачкою lesson20
    });

    xit('test_case3', async () => {
        await browser.setWindowSize(1920, 1080)
        await browser.url('https://github.com')
        await browser.pause(2000);
        github.Move_to_product();
        github.Move_to_Explore();
        github.Move_to_Pricing();
        await browser.pause(2000);
        github.isDisplayed_product();
        github.isDisplayed_explore();
        github.isDisplayed_pricing();
        await browser.pause(2000);
    });

    xit('test_case4', async () => {
        await browser.setWindowSize(1920, 1080)
        await browser.url('https://github.com')
        github.click_Pricing();
        github.plans_click_in_pricing_menu();
        github_pricing.click_joinforfree();
        github_free_form.input_value_in_username(random_inputе());
        github_free_form.input_value_in_email(random_input());
        github_free_form.input_value_in_password(random_inputе());
        await browser.pause(6000);
    });

    xit('test_case5', async () => {  
    await browser.setWindowSize(1920, 1080)
    await browser.url('https://github.com')
    github.click_Explore();
    github.explore_GitHub_click_in_explore_menu();
    await browser.pause(4000);
    github_explore.click_topics();
    await browser.pause(2000);
    github_topics.isDispaleyed_topics();
    await browser.pause(2000);
    });

    xit('test_case5', async () => {  
    await browser.setWindowSize(1920, 1080)
    await browser.url('https://github.com')
    await browser.pause(2000);
    github.search_click();
    github.search_addValue('webdriverio');
    github.search_enter_click();
    await browser.pause(2000);
    github_search.click_typescript();
    await browser.pause(2000);
    github_search.click_result_typescript();
    //const url = await browser.getUrl();
    //isDisplayed = await url.isDisplayed();
    //console.log(isDisplayed);
    await browser.pause(2000);
    });

    xit('test_case6', async () => {  
    await browser.setWindowSize(1920, 1080)
    await browser.url('https://github.com')
    github.start_a_free_trial_scrollIntoView();
    github.start_a_free_trial_click();
    pick_your_trial_plan.Enterprise_cloud_click();
    await browser.pause(2000);
    github_free_form.input_value_in_username(random_inputе());
    github_free_form.input_value_in_email(random_input());
    github_free_form.input_value_in_password(random_inputе());
    await browser.pause(3000);
    browser.back();
    await browser.pause(2000);
    pick_your_trial_plan.Enterprise_server_click();
    github_enterprise_serverPage.Name_addValue(random_inputе());
    github_enterprise_serverPage.company_addValue(random_inputе());
    github_enterprise_serverPage.work_email_addValue(random_input());
    github_enterprise_serverPage.phone_number_addValue("+12312413135");
    github_enterprise_serverPage.not_yet_sure_click();
    github_enterprise_serverPage.yes_click();
    github_enterprise_serverPage.question_list_click();
    github_enterprise_serverPage.Please_list_your_questions_addValue(random_inputе());
    github_enterprise_serverPage.Accept_terms_of_use_click();
    await browser.pause(6000);
});
    
    it('test_case7', async () => {  
    await browser.setWindowSize(1920, 1080)
    await browser.url('https://github.com')
    github.carrers_scrollIntoView();
    github.carrers_click();
    github_carrerspagePage.open_positions_click();
    await browser.pause(4000);
    github_carrerspagePage.business_systems_getText();
    github_carrerspagePage.Design_getText();
    github_carrerspagePage.Finance_getText();
    github_carrerspagePage.Human_resourses_getText();
    github_carrerspagePage.operations_getText();
    github_carrerspagePage.sales_getText();
    github_carrerspagePage.Engineerring_getText();
    github_carrerspagePage.Product_getText();
    github_carrerspagePage.Security_getText();
    github_carrerspagePage.support_getText();
    await browser.pause(2000);

    });
})
