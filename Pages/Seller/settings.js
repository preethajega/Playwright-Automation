const { test, expect,page,waitForSelector} = require('@playwright/test');
class settings {
    constructor(page) {
        this.page = page

        this.settingsmenu=page.getByRole('link', { name: 'Settings' })
        this.currencypage=page.getByRole('button', { name: 'Currencies Manage the' })
        this.backtosettings=page.getByRole('button', { name: 'Back to Settings' })
        //regions elements
        this.regionpage=page.getByRole('button', { name: 'Regions Manage shipping,' })
        this.moreregionbtn=page.locator('//div[@class="flex items-center gap-x-2"]//div//button[@aria-haspopup="menu"]')
        this.EditRegionDetails= page.getByRole('button', { name: 'Edit Region Details' })
        this.taxinclusivepriceegion=page.getByRole('switch')
        this.saveandclosebtnvisable=page.locator('//button[@type="submit"]')
        this.saveandclosebtn=page.getByRole('button', { name: 'Save and close' })
        this.cancelbtn= page.getByRole('button', { name: 'Cancel' })
        this.regionsucessmsg=page.locator('//div[contains(@class,"2xsmall flex flex-grow flex-col text-white")]//span[2]')
        this.regioncardclose=page.getByRole('button').first()

        //currency elemnets
        this.taxinclusivepricecurrency1=page.locator('form').filter({ hasText: 'INRIndian RupeeDefault' })
        this.taxinclusivepricecurrency=page.locator('(//button[@role="switch"])[1]')
        this.currencysucessmsg=page.locator('//div[contains(@class,"2xsmall flex flex-grow flex-col text-white")]//span[2]')

        //tax elements
        this.taxpage= page.getByRole('button', { name: 'Taxes Manage taxes across' })
        this.taxrowcommon=page.locator('(//tbody[@role="rowgroup"]//tr)')
        this.taxratecommon=page.locator('(//tbody[@role="rowgroup"]//tr//td[3])')
        this.defaulttaxname=page.locator('//tbody[@role="rowgroup"]//tr[1]//td//div//div[contains(@class,"gap-x-xsmall text-grey")]')
        this.defalttaxpercent=page.locator('(//tbody[@role="rowgroup"]//tr//td[3])[1]')




    }
    async gotosettings(){
        await this.settingsmenu.click()
        await this.page.waitForLoadState("networkidle")
    }
    async backtosetting(){
        await this.backtosettings.click()
        await this.page.waitForLoadState("networkidle")

    }

    async currency(){
        await this.currencypage.click()
        await this.page.waitForLoadState("networkidle")
    }

    async region(){
        await this.regionpage.click()
        await this.page.waitForLoadState("networkidle")
    }

    async tax(){
        await this.taxpage.click()
        await this.page.waitForLoadState("networkidle")
    }

    async regiontaxchnagetrue(cancel,save){
        await this.moreregionbtn.click()
        await this.EditRegionDetails.click()
        await this.taxinclusivecheckedtrue()
        const isDisabled  =await this.saveandclosebtnvisable.isDisabled()
        if (isDisabled) {
            console.log("The 'Save and close' button is disabled.");
            await cancel.click()
        } else {
            console.log("The 'Save and close' button is enabled.");
            await save.click()
        }
       
    }
    async regiontaxchnagefalse(cancel,save){
        await this.moreregionbtn.click()
        await this.EditRegionDetails.click()
        await this.taxinclusivecheckedfalse()
        const isDisabled  =await this.saveandclosebtnvisable.isDisabled()
        if (isDisabled) {
            console.log("The 'Save and close' button is disabled.");
            await cancel.click()
        } else {
            console.log("The 'Save and close' button is enabled.");
            await save.click()
        }

    }

    async taxinclusivecheckedtrue(){
        const isChecked = await this.taxinclusivepricecurrency.getAttribute('aria-checked');
        if (isChecked === 'true') {
            console.log("Element is checked");
           
        } else {
            console.log("Element is chnaged into true");
            await this.taxinclusivepricecurrency.click()
        
        }
        
    }
    async taxinclusivecheckedfalse(){
        const isunChecked = await this.taxinclusivepricecurrency.getAttribute('aria-checked');
        if (isunChecked === 'false') {
            console.log("Element is unchecked");
        } else {
            console.log("Element is chnaged into false");
            await this.taxinclusivepricecurrency.click()
        
        }
        
    }
    async sucessmsgvalid(sucessmsgele,sucessmsgtxt){
        const sucessmag  =await sucessmsgele.isVisible()
        if (sucessmag) {
            const  sucessmag1= await sucessmsgele.textContent()
            await expect(sucessmsgtxt).toBe(sucessmag1.trim());
        }
    }

    async getdefaulttax(){
        let taxpercentage=[];
        const taxname= await this.defaulttaxname.textContent()
        const taxpercent= await this.defalttaxpercent.textContent()

        console.log('taxname,taxpercent--->',taxname,taxpercent)

        return taxpercent;
    }

    async taxclulationsingle(){
        const taxpercents = await this.getdefaulttax();
        const productprice = await this.producttotpricefirst.textContent()
        const taxs =await this.tax.textContent()
  
        const calulatedtax= productprice*taxpercents
        
        await expect(calulatedtax).toBe(taxs);
    }

    


}
module.exports=settings;