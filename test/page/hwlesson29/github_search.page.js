class github_search{
    //https://github.com/search?q=webdriver

    get typeScript(){return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')}
    click_typescript(){this.typeScript.click();}

    get search_result_typescript(){return $('[data-hydro-click-hmac="c33f97fd5cf55f06204986960661c0a197a891fe5cdb4b0facbc8c83113fcb48"]')}
    click_result_typescript(){this.search_result_typescript.click();}

}

module.exports = new github_search()