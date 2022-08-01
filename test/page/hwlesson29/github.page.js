class github{
//цей класс створений для сторінки https://github.com
    get emailinput() {
        return $('[class="form-control border-0 f4-mktg py-3 px-4 width-full"]')
    }

    Emailinput (){
        this.emailinput.click();
    }

    addValuea (value) {
        this.emailinput.addValue(value);
    }  

    get signupforGitHub() {
        return $('[class="btn-mktg width-full width-sm-auto btn-signup-mktg"]')
    }

    ClicksignupforGitHubButton (){
        this.signupforGitHub.click();
    }

    get product_dropdown(){return $('//summary[contains(text(),"Product")]')}
    Move_to_product (){this.product_dropdown.moveTo()}
    isDisplayed_product (){this.product_dropdown.isDisplayed()}

    get explore_dropdown(){return $('//summary[contains(text(),"Explore")]')}
    Move_to_Explore (){this.explore_dropdown.moveTo()}
    isDisplayed_explore (){this.explore_dropdown.isDisplayed()}
    click_Explore (){this.explore_dropdown.doubleClick()}

    get pricing_dropdown(){return $('//summary[contains(text(),"Pricing")]')}
    click_Pricing (){this.pricing_dropdown.doubleClick()}
    isDisplayed_pricing (){this.pricing_dropdown.isDisplayed()}

    get plans(){return $('[href="/pricing"][class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"]')}
    plans_click_in_pricing_menu (){this.plans.click();}

    get explore_GitHub(){return $('[class="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"][href="/explore"]')}
    explore_GitHub_click_in_explore_menu (){this.explore_GitHub.click();}

    get search(){return $('[name="q"]')}
    search_click (){this.search.click();}
    search_addValue (value){this.search.addValue(value);}

    get search_enter(){return $('[class="js-jump-to-badge-search-text-global"]')}
    search_enter_click (){this.search_enter.click();}

    get start_a_free_trial(){return $('[class="btn-mktg mb-3 mb-sm-0 mr-sm-2 btn-muted-mktg"]')}
    start_a_free_trial_click (){this.start_a_free_trial.click();}
    start_a_free_trial_scrollIntoView (){this.start_a_free_trial.scrollIntoView();}
    

    get carrers(){return $('[href="/about/careers"]')}
    carrers_scrollIntoView (){this.carrers.scrollIntoView()}
    carrers_click (){this.carrers.click();}

}

module.exports = new github()
