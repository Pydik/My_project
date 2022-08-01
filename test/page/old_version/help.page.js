class Helppage{

    get browseDocs() {
        return $('//p[contains(text(),"Browse Docs")]')
    }

    isdisplaysacontributetButton () {
        this.browseDocs.isDisplayed();
    }
    
}

module.exports = new Helppage()