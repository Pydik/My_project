class DocsPage{

    get editButton() {
        return $('[class="theme-edit-this-page"]')
    }

    clickeditButton () {
        this.editButton.click();
    }    

}

module.exports = new DocsPage()