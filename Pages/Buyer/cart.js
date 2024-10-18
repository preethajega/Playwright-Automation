const { test, expect,page,waitForSelector} = require('@playwright/test');
class Cart {
    constructor(page) {
        this.page = page
        this.viewcart=page.getByRole('link', { name: 'View Cart' })
        this.productlinkfirst=page.locator('(//div[contains(@class,"w-full flex px-2")]//img[@decoding="async"])[1]')
        this.productlinklast=page.locator('(//div[contains(@class,"w-full flex px-2")]//img[@decoding="async"])[last()]')
        this.productvarientnamecartfirst=page.locator('(//p[@class="text-sm mt-1"])[1]')
        this.productvarientnamecartlast=page.locator('(//p[@class="text-sm mt-1"])[last()]')
        this.varientnameaddPDPfirst=page.locator('(//button[@data-testid="option-button"])[1]')
        this.varientnameaddPDPlast=page.locator('(//button[@data-testid="option-button"])[last()]')
        this.producttotpricefirst=page.locator('(//span[@data-testid="product-price"])[1]')
        this.producttotpricelast=page.locator('(//span[@data-testid="product-price"])[last()]')

        this.discount= page.getByTestId('cart-discount')
        this.subtotal=page.locator('//span[@data-testid="cart-subtotal"]')
        this.shipping=page.locator('//span[@data-testid="cart-shipping"]')
        this.tax=page.locator('(//span[@data-testid="cart-taxes"])[1]')
        this.PlatformFee=page.locator('(//span[@data-testid="cart-taxes"])[last()]')
        this.grandtot=page.locator('//span[@data-testid="cart-total"]')

        this.discountorgiftcode=page.getByTestId('add-discount-button')
        this.discountapplybtn=page.getByTestId('discount-apply-button')
        this.discounterrormsg=page.locator('//div[@data-testid="discount-error-message"]//span')
        this.discountinputbox=page.getByTestId('discount-input')
        this.discapplied=page.getByRole('heading', { name: 'Discount applied:' })
        this.discremovebtn=page.getByTestId('remove-discount-button')
        this.disccodeApplied=page.locator('//span[@data-testid="discount-code"]')
        this.disccodeAmount=page.getByTestId('discount-amount')

        this.activecommons=page.locator('(//tbody[@role="rowgroup"])//tr')
        this.stauscommon=page.locator('(//tbody[@role="rowgroup"])//tr//td[5]/div/div/span')


    }

    async productvalidations(productTxtvalidplp,productTxtvalidcart){
        await this.productlinkfirst.click()
        const producttxtplp = await productTxtvalidplp.textContent()
        await this.page.waitForTimeout(3000)
        await this.viewcart.click()
        await this.page.waitForTimeout(5000)
        const producttxtcart = await productTxtvalidcart.textContent()
        console.log("productnamesplpppppp",producttxtplp)
        console.log("productnamescartttttttt",producttxtcart)
        await expect(producttxtplp.trim()).toBe(producttxtcart.trim());
    }
    
    async cartvalidation(productTxtvalidcart,productTxtvalidcart1){
        // await this.viewcart.click()
        await this.page.waitForTimeout(5000)
        const producttxtcart = await productTxtvalidcart.textContent()
        const producttxtcart1 = await productTxtvalidcart1.textContent()
        console.log("productnamescarttttttttt",producttxtcart)
        console.log("productnamescartttttttt111111",producttxtcart1)
        await expect(producttxtcart.trim()).toBe(producttxtcart1.trim());
    }
    async cartvalidationcalulation1(productTxtvalidcart,productTxtvalidcart1,productval){
        await this.page.waitForTimeout(5000)
        const producttxtcart = (await productTxtvalidcart.textContent()).charAt(0)
        const producttxtcart1 = (await productTxtvalidcart1.textContent()).slice(1).trim()
        console.log("productnamescarttttttttt",producttxtcart)
        console.log("productnamescartttttttt111111",producttxtcart1)
        await this.page.waitForTimeout(2000)
        const multiplevalue=producttxtcart*producttxtcart1
        console.log("multiplevaluessssssssssssssssss",multiplevalue)
        await this.page.waitForTimeout(2000)
        const productvalue = (await productval.textContent()).slice(1).trim()
        console.log("productvaluessssssssssssssssss",productvalue)
        const finalval = productvalue.split('.')[0]
        console.log("finalvaluessssssssssssssssss",finalval)
        const finalvaltrim = parseInt(finalval, 10)
        console.log("finalvaluessssssssssssssssssfinalvaltrim",finalvaltrim)
        await expect(multiplevalue).toBe(finalvaltrim);
        
    }

    async cartvalidationcalulation(productTxtvalidcart,productTxtvalidcart1,productval){
        await this.page.waitForTimeout(5000)
        const producttxtcart = (await productTxtvalidcart.textContent()).charAt(0)
        const producttxtcart1 = parseFloat ((await productTxtvalidcart1.textContent()).slice(1).trim(),10)
        console.log("productnamescarttttttttt",producttxtcart)
        console.log("productnamescartttttttt111111",producttxtcart1)
        await this.page.waitForTimeout(2000)
        const multiplevalue=producttxtcart*producttxtcart1
        console.log("multiplevaluessssssssssssssssss",multiplevalue)
        await this.page.waitForTimeout(2000)
        const finalvaltrim = parseFloat((await productval.textContent()).slice(1).trim(), 10);
        await expect(multiplevalue).toBe(finalvaltrim);
        
    }

    async cartvalidcalutaxinclusive(productTxtvalidcart,productTxtvalidcart1){
        await this.page.waitForTimeout(5000)
        const producttxtcart = (await productTxtvalidcart.textContent()).charAt(0)
        const producttxtcart1 = parseFloat ((await productTxtvalidcart1.textContent()).slice(1).trim(),10)
        await this.page.waitForTimeout(2000)
        const multiplevalue=producttxtcart*producttxtcart1
        const subtot = parseFloat((await this.subtotal.textContent()).slice(1).trim(), 10);
        const taxtot = parseFloat((await this.tax.textContent()).slice(1).trim(), 10);
        const subtotandtax =  subtot+taxtot
        await this.page.waitForTimeout(2000)

        await expect(multiplevalue).toBe(subtotandtax);
        
    }
    
    async increaseAndDescrese(increasebtnfirst,qtyTxtcart,qtyTxtcart1){
        const increasedecreasebeforetxt = await qtyTxtcart.textContent()
        await increasebtnfirst.click()
        const increasedecreasebeforetxt1 = await qtyTxtcart.textContent()
        await this.page.waitForTimeout(2000)
        await expect(increasedecreasebeforetxt.trim()).not.toBe(increasedecreasebeforetxt1.trim());
        await this.reload()
        await this.page.waitForTimeout(5000)
        const increasedecreasebeforetxt2 = await qtyTxtcart.textContent()
        console.log("increasedecreaseaftertxtttttttttttttttt11111-->",increasedecreasebeforetxt2)
        const increasedecreaseaftertxt = (await qtyTxtcart1.textContent()).charAt(0)
        console.log("increasedecreaseaftertxtttttttttttttttt",increasedecreaseaftertxt)
        await this.page.waitForTimeout(2000)
        await expect(increasedecreasebeforetxt2.trim()).toBe(increasedecreaseaftertxt.trim());
    }
    async increaseAndDescresevalid(qtyTxtcart,qtyTxtcart1){
        const increasedecreasebeforetxt = await qtyTxtcart.textContent()
        const increasedecreaseaftertxt = await qtyTxtcart1.textContent()
        console.log("increasedecreaseaftertxtttttttttttttttt",increasedecreaseaftertxt)
        await expect(increasedecreasebeforetxt.trim()).toBe(increasedecreaseaftertxt.trim().charAt(0));
    }
    async reload(){
        await this.page.reload({timeout: 100000, waitUntil: 'load'});
    }

    async discvalid(){
        const isdisapplied =await this.discount.isVisible()
        if (isdisapplied) {
            console.log('Discount Applied...');
        } else {
            console.log('Discount is not Applied...');
        }
    }
    async removedisc(){
        const isdiscremovebtn=await this.discremovebtn.isVisible()
        if (isdiscremovebtn) {
            await this.discremovebtn.click()
            console.log('Discount removed...');
        } else {
            console.log('Discount is not removed...');
        }
        const isdiscremoved= await this.discountapplybtn.isVisible()
        if (isdiscremoved) {
            console.log('Discount removed...');
        } else {
            console.log('Discount is not removed...');
        }
    }
    async totalcalultion(){
        const subtotal = parseFloat((await this.subtotal.textContent()).slice(1).trim(), 10);
        await this.page.waitForTimeout(1000)
        const discount = parseFloat((await this.discount.textContent()).replace(/[^\d.]/g, ''), 10);
        await this.page.waitForTimeout(1000)
        const shipping = parseFloat((await this.subtotal.textContent()).slice(1).trim(), 10);
        await this.page.waitForTimeout(1000)
        const tax = parseFloat((await this.subtotal.textContent()).slice(1).trim(), 10);
        await this.page.waitForTimeout(2000)
        const TotalAdd= (subtotal+shipping+tax)-discount
        await this.page.waitForTimeout(1000)
        const finaltotal = parseFloat((await this.grandtot.textContent()).slice(1).trim(), 10);
        await this.page.waitForTimeout(1000)
        await expect(TotalAdd).toBe(finaltotal);
    }

    async invaliddiscvalidtion(errormsg,errorip){
        const Errorelem = (await errormsg.textContent()).trim()
        await this.page.waitForTimeout(1000)
        console.log("Errorelemtexttttttttt",Errorelem)
        expect(Errorelem).toEqual(expect.stringContaining(errorip));
        await this.discount.isHidden()
    }
    async applydiscout(disccode){
        await this.discountorgiftcode.click()
        await this.discountinputbox.click()
        await this.discountinputbox.fill(disccode)
        await this.discountapplybtn.click()
        await this.page.waitForTimeout(2000)
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
        printStoredCodes()
        console.log("Coupon codes collected:", couponCodes);
        return couponCodes;
    }
    async  applyFirstDiscount() {
        const couponCodes = await this.discss();
    
        if (couponCodes.length === 0) {
            console.log('No active coupon codes to apply.');
            return;
        }
        const firstCode = couponCodes[0];
        console.log(`Applying the first active coupon code: ${firstCode}`);


        await this.applydiscout(firstCode);
    }

    async taxinclusivesinglecaluvalid(){
        const producttot = parseFloat((await this.producttotpricefirst.textContent()).slice(1).trim(), 10);
        const finaltotal = parseFloat((await this.grandtot.textContent()).slice(1).trim(), 10);
        console.log("product price",producttot,finaltotal)
        await expect(producttot).toBe(finaltotal);


    }

    async taxinclusivecalulation(){
        const producttot = parseFloat((await this.producttotpricefirst.textContent()).slice(1).trim(), 10);
        const subtot = parseFloat((await this.subtotal.textContent()).slice(1).trim(), 10);
        const taxtot = parseFloat((await this.tax.textContent()).slice(1).trim(), 10);

        const subtotandtax =  subtot+taxtot

        await expect(producttot).toBe(subtotandtax);
    }

    

}

module.exports=Cart;