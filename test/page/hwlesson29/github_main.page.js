class githubmainmenu{
    //цей класс створений для сторінки https://github.com/

    get Market() {
        return $('[data-octo-click="marketplace_click"]')
    }

    Marketplase (){
        this.Market.isDisplayed();
    }

    get Pulltopbutton(){
        return $('[data-ga-click="Header, click, Nav menu - item:pulls context:user"]');
    }
    Pulltopbutt0n(){
        this.Pulltopbutton.isDisplayed();
    }    

    get issues(){
        return $('[data-ga-click="Header, click, Nav menu - item:issues context:user"]');
    }

    issuesisDisplayed(){
        this.issues.isDisplayed();
    }   

}

module.exports = new githubmainmenu()    