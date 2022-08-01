class Api{

    get contributeButton() {
        return $('[class="onPageNav"] [href="#contribute"]')
    }

    clickacontributetButton () {
        this.contributeButton.click();
    }    

    get helpButton() {
        return $('[href="/help.html"][target="_self"]')
    }

    clickhelpButton () {
        this.helpButton.click();
    }    
}

module.exports = new Api()