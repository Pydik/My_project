class github_pricing{
//цей класс створений для сторінки https://github.com/pricing

    get joinforfree(){return $('[class="btn-mktg d-block btn-muted-mktg"]')}
    click_joinforfree(){this.joinforfree.click();}

}


module.exports = new github_pricing()