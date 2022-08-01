class github_free_form{
//цей класс створений для сторінки https://github.com/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=cards&ref_page=%2Fpricing&source=pricing-card-free
    get username_field(){return $('[id="user_login"]')}
    input_value_in_username(value){this.username_field.addValue(value)}

    get email_field(){return $('[id="user_email"]')}
    input_value_in_email(value){this.email_field.addValue(value)}

    get password_field(){return $('[id="user_password"]')}
    input_value_in_password(value){this.password_field.addValue(value)}
}

module.exports = new github_free_form()