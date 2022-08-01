class signinforGitHub{
    //цей класс створений для сторінки https://github.com/login
    
    get emaildield() {
        return $('[id="login_field"]')
    }
    setemail(value){
        this.emaildield.addValue(value);
    }

    get passwordfield(){
        return $('[type="password"]')
    }
    setpassword(value){
        this.passwordfield.addValue(value);
    }

    get signbutton(){
        return $('[name="commit"]')
    }
    signinbutt0n(){
        this.signbutton.click();
    }
    
    get forgot_password_button(){
        return $('[class="label-link position-absolute top-0 right-0"]')
    }
    forgot_click(){
        this.forgot_password_button.click();
    }
}

module.exports = new signinforGitHub()    