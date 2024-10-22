const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage = require("../../../Pages/Seller/SellerLoginpage ")
const cartPage = require("../../../Pages/Buyer/cart")
const Buyerloginpage = require("../../../Pages/loginpage")
const cartip=require("../../../input/Buyer/cartip")
const santyip = require('../../../input/santy')
const santylogin=require('../../../Pages/samplesantypage')
const {getNextIncrement} = require("../../../Pages/counter")
const discPage = require("../../../Pages/Seller/discount")
const discIp = require("../../../Pages/Seller/discount")
const settingspage = require("../../../Pages/Seller/settings")
const settingsIp = require("../../../input/Seller/settings")
const pricingpage = require("../../../Pages/Seller/pricing")
const pricingIp = require("../../../input/Seller/pricing")


test.describe('Cart TaxExclusive ' , () =>{

    test.beforeAll('change the site into taxExcusive',async({browser})=>{
        const context = await browser.newContext();
        const page = await context.newPage();
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        let settings = new settingspage(page)
        let disc = new discPage(page)
        let login = new LoginPage(page);
        let buyerlogin = new Buyerloginpage(page);

        await page.goto("https://demo.eazygain.com/app/login")
        await page.waitForTimeout(3000);
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await settings.gotosettings()
        await page.waitForTimeout(1000);
        await settings.currency()
        await settings.taxinclusivecheckedfalse()
        await page.waitForTimeout(1000);
        await settings.sucessmsgvalid(settings.currencysucessmsg,settingsIp.currencysucessmsg)
        
        await settings.backtosetting()
        await page.waitForTimeout(3000);

        await settings.region()
        await page.waitForTimeout(1000);
        await settings.regiontaxchnagefalse(settings.cancelbtn,settings.saveandclosebtn)
        await page.waitForTimeout(1000);
        await settings.sucessmsgvalid(settings.regionsucessmsg,settingsIp.regionsucessmsg)
        await settings.backtosetting()

        await page.waitForTimeout(3000)
        await login.logout()

    });

    test('validate that we can able Navigate to checkout without addding any discount coupon',async({page})=>{

        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        let disc = new discPage(page)
        let login = new LoginPage(page);
        let buyerlogin = new Buyerloginpage(page);
        

        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin( santyip.username2,santyip.password)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname)
        await page.waitForTimeout(3000)
        await cart.applydiscout(cartip.disccodeEmpty)
        await page.waitForTimeout(2000)
        await cart.invaliddiscvalidtion(cart.discounterrormsg,cartip.discerror)
        await page.waitForTimeout(3000)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)

    });


    test('validate that we can able Navigate to checkout with addding any discount coupon ',async({page})=>{

         test.setTimeout(150000);
            let santy = new santylogin(page)
            let cart = new cartPage(page)
            let disc = new discPage(page)
            let login = new LoginPage(page);
            let buyerlogin = new Buyerloginpage(page);
        
        async function applydiscout(disccode){
            await cart.discountorgiftcode.click()
            await cart.discountinputbox.click()
            await cart.discountinputbox.fill(disccode)
            await cart.discountapplybtn.click()
            await page.waitForTimeout(2000)
        }
        
         async function discss(){
            let couponCodes = [];
            const activeRows = await cart.activecommons;
            const rowCount = await activeRows.count();
                    
            console.log("activeRowscountss", rowCount);
                    
            if (rowCount === 0) {
                console.log('No rows with "Active" status found.');
                return;
            }
            for (let j = 0; j < rowCount; j++) {
                const active = await cart.stauscommon.nth(j).textContent();
                        
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
            console.log("Coupon codes collected:", couponCodes);
            return couponCodes;
        }
        async function applyFirstDiscount() {
            const couponCodes = await discss();
            if (couponCodes.length === 0) {
                console.log('No active coupon codes to apply.');
                return;
            }
            const firstCode = couponCodes[1];
            console.log(`Applying the first active coupon code: ${firstCode}`);
            await page.waitForTimeout(3000)
            await login.logout()
            await page.goto("https://mobile.eazygain.com/in/auth")
            await buyerlogin.signin( santyip.username1,santyip.password)
            await santy.reload()
            await page.waitForTimeout(3000)
            await santy.removeProductUntilGone()
            await santy.addtocartwithsearchalone(santyip.productname2)
            await page.waitForTimeout(3000)
        
            await cart.removedisc()
            await applydiscout(firstCode);
            await cart.discvalid()
            await santy.placeorderalone()
            await page.waitForTimeout(5000)
            await santy.placeorderverify(santyip.ordersucesstext)
        }
        
        await page.goto("https://demo.eazygain.com/app/login")
        await page.waitForTimeout(3000);
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await disc.clickdisc()
        await page.waitForTimeout(3000);
        await applyFirstDiscount()

    });


    test('validate that we can able to Navigate to checkout with with the pricing Product',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        let disc = new discPage(page)
        let login = new LoginPage(page);
        let buyerlogin = new Buyerloginpage(page);
        let pricing=new pricingpage(page);

        async function price(){
            let couponCodes = [];
            let pricingproducts=[];
            const activeRows = await pricing.pricingcommons;
            const rowCount = await activeRows.count();
                    
            console.log("activeRowscountss", rowCount);
                    
            if (rowCount === 0) {
                console.log('No rows with "Active" status found.');
                return;
            }
            for (let j = 0; j < rowCount; j++) {
                const active = await pricing.stauscommon.nth(j).textContent();
                        
                if (active.includes('Active')) {
                    console.log('Active status found:', active);
                    const elementID = j; 
                    console.log('Active element ID (row number):', elementID);
                    const codeElement = await activeRows.locator('xpath=(//tbody[@class="border-ui-border-base border-b-0"]//tr//td[1])').nth(j);
                    const code = (await codeElement.textContent()).trim();
                    console.log('Active product names:', code);
                    couponCodes.push(code);
                }
            }
            console.log("Coupon codes collected:", couponCodes);
            return couponCodes;
        }

        async function pricingprod() {
            let pricingproducts=[];
            const activeRows = await pricing.pricingproductrow;
            const rowCount = await activeRows.count();
                    
            console.log("activeRowscountss", rowCount);
                    
            if (rowCount === 0) {
                console.log('No rows with "Active" status found.');
                return;
            }
            for (let j = 0; j < rowCount; j++) {
                const isVisible = await pricing.pricingproductall.nth(j).isVisible();                        
                if (isVisible) {
                    const elementID = j; 
                    console.log('Product element ID (row number):', elementID);
                    const prodElement = await activeRows.locator('xpath=(//tbody[@class="border-ui-border-base border-b-0"]//tr//td[2]//div//p)').nth(j);
                    const productname = (await prodElement.textContent()).trim();
                    console.log('productName:', productname);
                    pricingproducts.push(productname);
                }
            }
            console.log("product Name collected:", pricingproducts);
            return pricingproducts;
        }

        async function getactivepricingprod() {
            const couponCodes = await price();
            if (couponCodes.length === 0) {
                console.log('No active coupon codes to apply.');
                return;
            }
            const firstCode = couponCodes[0];
            const couponToApply = couponCodes.find(coupon => coupon === pricingIp.pricingname);
            console.log(`Applying the first active price code ${firstCode}`);
            console.log(`getting an matching pricing code: ${couponToApply}`);
            
         const couponElement = await page.locator(`text="${couponToApply}"`);
  
         if (await couponElement.count() > 0) {
            await couponElement.first().click(); 
            console.log(`Successfully clicked the coupon: ${couponToApply}`);
        } else {
            console.log(`Coupon "${couponToApply}" not found on the page.`);
        }
    }

    async function applyfirstprod() {
        const pricingproducts = await pricingprod();
            if (pricingproducts.length === 0) {
                console.log('No active coupon codes to apply.');
                return;
            }
        const firstproduct = pricingproducts[0];
        console.log(`Applying the first pricing product-> ${firstproduct}`);


        await page.waitForTimeout(3000)
        await login.logout()
        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin( santyip.username1,santyip.password)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(firstproduct)
        await page.waitForTimeout(3000)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)       
    }

    await page.goto("https://demo.eazygain.com/app/login")
        await page.waitForTimeout(3000);
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await pricing.clickpricing()
        await page.waitForTimeout(3000);
        await getactivepricingprod()
        await page.waitForTimeout(3000);
        await applyfirstprod()
    });


    test('validate that we can able to Navigate to Checkout with TaxExclisive Products',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        let disc = new discPage(page)
        let login = new LoginPage(page);
        let buyerlogin = new Buyerloginpage(page);
        let pricing=new pricingpage(page);

        await santy.goto('/auth')
        await santy.login(santyip.username4,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname1)
        await page.waitForTimeout(2000)
        await cart.taxExclusivecalulationsingle()
        await page.waitForTimeout(3000)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)    
        

    });


});
