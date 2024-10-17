const { test, expect,page,waitForSelector} = require('@playwright/test');
class Discount {
    constructor(page) {
        this.page = page
        this.discountmenu=page.getByRole('link', { name: 'Discounts' })
        this.adddiscount=page.getByRole('button', { name: 'Add Discount' })
        this.discfirstrow=page.locator('(//tbody[@role="rowgroup"])//tr[1]')
        this.disclasttrow=page.locator('(//tbody[@role="rowgroup"])//tr[last()]')
        this.activefirstrow=page.locator('(//tbody[@role="rowgroup"])//tr[1]//td[5]/div/div/span')
        this.activelastrow=page.locator('(//tbody[@role="rowgroup"])//tr[last()]//td[5]/div/div/span')
        this.couponcodefirst=page.locator('(//tbody[@role="rowgroup"])//tr[last()]//td[1]/div/div/span')
        this.couponcodelast=page.locator('(//tbody[@role="rowgroup"])//tr[last()]//td[1]/div/div/span')
        this.stauscommon=page.locator('(//tbody[@role="rowgroup"])//tr//td[5]/div/div/span')
        this.couponcommon=page.locator('(//tbody[@role="rowgroup"])//tr//td[1]/div/div/span')
        this.activecommons=page.locator('(//tbody[@role="rowgroup"])//tr')
        this.activecommonss= page.locator('div').filter({ hasText: /^Active$/ })
    }
    
    async getdiscCode(){

        const tempactive= await this.stauscommon.textContent()
        if (tempactive="Active") {
            
        }



        const active= await this.stauscommon.textContent()
        await page.waitForFunction((selector) => {
            const element = document.querySelector(selector);
            return element && element.textContent.includes('Active');
        }, active);
        
        const couponCode = await page.locator(active).textContent();

        console.log('Coupon Code:', couponCode.trim());

    }
  
    async discss(){
        let couponCodes = [];

        const activeRows = await this.activecommons;
        const rowCount = await activeRows.count();
            
        console.log("activeRowscountss", rowCount);
            
        if (rowCount === 0) {
                console.log('No rows with "Active" status found.');
                return;
        }
        for (let j = 0; j < rowCount; j++) {
            const active = await this.stauscommon.nth(j).textContent();
                
            if (active.includes('Active')) {
                console.log('Active status found:', active);
        
                const elementID = j; 
                console.log('Active element ID (row number):', elementID);
    
                const codeElement = await activeRows.locator('xpath=(//tbody[@role="rowgroup"])//tr//td[1]/div/div/span').nth(j);
                const code = (await codeElement.textContent()).trim();

                console.log('Active Coupon Code:', code);
                couponCodes.push(code);
            }
        }
        function printStoredCodes() {
            console.log('Stored coupon codes:', couponCodes);
        }
        return printStoredCodes;
    }
        
   
    async clickdisc(){
        await this.discountmenu.click();
        await this.page.waitForLoadState("networkidle")
    }
}
module.exports=Discount;


