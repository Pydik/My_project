class github_carrerspage{

        get open_positions(){return $('[href="#positions"]')}
        open_positions_click(){this.open_positions.click()}

        get business_systems(){return $('//span[contains(text(),"Business Systems")]')}
        business_systems_getText(){this.business_systems.getText()}

        get Design(){return $('#design span')}
        Design_getText(){this.Design.getText()}

        get Finance(){return $('//span[contains(text(),"Finance")]')}
        Finance_getText(){this.Finance.getText()}

        get Human_Resourses(){return $('//span[contains(text(),"Human")]')}
        Human_resourses_getText(){this.Human_Resourses.getText()}

        get Legal(){return $('#legal span')}
        Legal_getText(){this.Legal.getText()}

        get Operations(){return $('//span[contains(text(),"Operations")]')}
        operations_getText(){this.Operations.getText()}

        get Sales(){return $('//span[contains(text(),"Sales")]')}
        sales_getText(){this.Sales.getText()}

        get Engineerring(){return $('#engineering span')}
        Engineerring_getText(){this.Engineerring.getText()}

        get Product(){return $('#product span')}
        Product_getText(){this.Product.getText()}

        get Security(){return $('#security span')}
        Security_getText(){this.Security.getText()}

        get Support(){return $('#support span')}
        support_getText(){this.Support.getText()}


    }
    
    module.exports = new github_carrerspage()