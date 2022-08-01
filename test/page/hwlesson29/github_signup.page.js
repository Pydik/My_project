class signupforGitHub{
    //цей класс створений для сторінки https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home

    get emaildield() {
        return $('[id="email"]')
    }

    emaildieId () {
        this.emaildield.addValue();
    }

    get continuebutton() {
        return $('[data-optimizely-event="click.signup_continue.email"]')
    }

    continue (){
        this.continuebutton.click();
    }

    get passwordfield() {
        return $('[id="password"]')
    }

    password (value){
        this.passwordfield.addValue(value);
    }

    get continuebutton2() {
        return $('[data-optimizely-event="click.signup_continue.password"]')       
    }

    continue2 (){
        this.continuebutton2.click();
    }

    get loginfield() {
        return $('[id="login"]')
    }

    login (value){
        this.loginfield.addValue(value)
        
    }

    get continuebutton3() {
        return $('[data-continue-to="opt-in-container"]')
    }
    continue3 (){
        this.continuebutton3.click();
    }

    get continuebutton4() {
        return $('[data-continue-to="captcha-and-submit-container"]')
    }
    continue4 (){
        this.continuebutton4.click();
    }

    get Verifyyouraccounttext(){
        return $('[class="text-mono text-bold signup-text-prompt mt-4"]')
    }
    Verifyyacctext (){
        this.Verifyyouraccounttext.isDisplayed();
    }
    
 

}

module.exports = new signupforGitHub()