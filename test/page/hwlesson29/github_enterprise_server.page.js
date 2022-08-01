class github_enterprise_serverPage{
    //https://enterprise.github.com/trial?ref_cta=Start%2520a%2520free%2520trial&ref_loc=billboard&ref_page=%2F&source=pricing-card-enterprise

    get name_field(){return $('[id="contact_request_name"]')}
    Name_addValue(value){this.name_field.addValue(value)}

    get company_field(){return $('[id="contact_request_organization_name"]')}
    company_addValue(value){this.company_field.addValue(value)}
    
    get work_email_field(){return $('[id="contact_request_email"]')}
    work_email_addValue(value){this.work_email_field.addValue(value)}

    get phone_number(){return $('[id="contact_request_phone"]')}
    phone_number_addValue(value){this.phone_number.addValue(value)}

    get not_yet_sure(){return $('[id="contact_request_instance_type_not_sure"]')}
    not_yet_sure_click(){this.not_yet_sure.click()}

    get yes(){return $('[class="form-checkbox-details-trigger"]')}
    yes_click(){this.yes.click()}

    get please_list_your_questions (){return $('[id="questions-list"]')}
    question_list_click(){this.please_list_your_questions.click()}
    Please_list_your_questions_addValue(value){this.please_list_your_questions.addValue(value)}

    get Accept_terms_of_use(){return $('[id="contact_request_agreed_to_terms"]')}
    Accept_terms_of_use_click(){this.Accept_terms_of_use.click()}

}

module.exports = new github_enterprise_serverPage()