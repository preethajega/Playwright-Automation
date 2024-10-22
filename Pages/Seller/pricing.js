const { test, expect,page,waitForSelector} = require('@playwright/test');
class pricing {
    constructor(page) {
        this.page = page

        this.pricingmenu=page.getByRole('link', { name: 'Pricing', exact: true })
        this.pricingcommons=page.locator('(//tbody[@class="border-ui-border-base border-b-0"])//tr')
        this.stauscommon=page.locator('(//tbody[@class="border-ui-border-base border-b-0"])//tr//td[3]//span[@class="capitalize"]')

        this.pricingproductrow=page.locator('//tbody[@class="border-ui-border-base border-b-0"]//tr')
        this.pricingproductall=page.locator('//tbody[@class="border-ui-border-base border-b-0"]//tr//td[2]//div//p')
    }

    async clickpricing(){
        await this.pricingmenu.click();
        await this.page.waitForLoadState("networkidle")
    }



    // async function price(){
    //     let couponCodes = [];
    //     const activeRows = await cart.pricingcommons;
    //     const rowCount = await activeRows.count();
                
    //     console.log("activeRowscountss", rowCount);
                
    //     if (rowCount === 0) {
    //         console.log('No rows with "Active" status found.');
    //         return;
    //     }
    //     for (let j = 0; j < rowCount; j++) {
    //         const active = await cart.stauscommon.nth(j).textContent();
                    
    //         if (active.includes('Active')) {
    //             console.log('Active status found:', active);
    //             const elementID = j; 
    //             console.log('Active element ID (row number):', elementID);
    //             const codeElement = await activeRows.locator('xpath=(//tbody[@class="border-ui-border-base border-b-0"]//tr//td[1])').nth(j);
    //             const code = (await codeElement.textContent()).trim();
    //             console.log('Active Coupon Code:', code);
    //             couponCodes.push(code);
    //         }
    //     }
    //     console.log("Coupon codes collected:", couponCodes);
    //     return couponCodes;
    // }
    // async function applyFirstDiscount() {
    //     const couponCodes = await discss();
    //     if (couponCodes.length === 0) {
    //         console.log('No active coupon codes to apply.');
    //         return;
    //     }
    //     const firstCode = couponCodes[1];
    //     console.log(`Applying the first active coupon code: ${firstCode}`);
    // }
}

module.exports=pricing;