class mainPage{

    get searchInput() {
        return $('#search_input_react')
    }

    setUserName (value) {
        this.searchInput.addValue(value)
    }    

    get GuideButton(){
        return $('[href="/docs/gettingstarted.html"]')
    }

    ButtonGiude() {
        this.GuideButton.click()
    }

    get apiButton(){
        return $('[href="/docs/api.html"][target="_self"]')
    }

    clickButtonAPI(){
        this.apiButton.click()
    }
  
}

module.exports = new mainPage()