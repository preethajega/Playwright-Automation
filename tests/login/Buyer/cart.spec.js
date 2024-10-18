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

test.describe('Cart PAGE' , () =>{

    test('Validate Products Added in PLP & PDP is reflected in cart',async({page})=>{
        test.setTimeout(150000);
        let  santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearch(santyip.productname)
        await page.waitForTimeout(1000)
        await santy.cartclearverify(santyip.cartemptytxt)
        await page.waitForTimeout(1000)
        await santy.reload()
        await santy.exploreproductcart.click();
        await page.waitForTimeout(3000)
        await santy.addtocartwithsearchPDP(santyip.productname)

    });
//taxinclusive
    test('Validate Products details like name , unit price, asked qty ,uom, total price shown correctly in Cart page',async({page})=>{
        test.setTimeout(200000);
        let  santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username2,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname2)
        await cart.productvalidations(santy.productnamePDP,santy.productnamecartfirst)
        await cart.productvalidations(santy.productprice,santy.productpriceplpfirst)
        await cart.productvalidations(santy.addedqtyfirst,santy.addedqtyfirst)
        await cart.taxinclusivecalulation()
        // await cart.cartvalidation(santy.productunitpricefirst,santy.grandtot)
        
    });


    test('Validate line wise total is shown correctly when user increase & decrease the qty of the product',async({page})=>{
        test.setTimeout(150000);
        let  santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username5,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname)
        await cart.increaseAndDescrese(santy.increasebtnfirst,santy.addedqtyfirst,santy.unitqtyshow)
        await page.waitForTimeout(3000)
        await santy.increasebtnfirst.click()
        await page.waitForTimeout(3000)
        await cart.increaseAndDescrese(santy.deceracebtnfirst,santy.addedqtyfirst,santy.unitqtyshow)
    });
    

    test('Validate User able to remove products completly in cart page and make cart is empty and When cart is empty validate the close it should redirects to home page',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username4,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearch(santyip.productname2)
        await santy.cartclearverify(santyip.cartemptytxt)
    });
    
    test('Validate Added Products Respective variants are showed in cart page properly',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchvarientproduct(santyip.productname3)
        await cart.productvalidations(santy.varientnameaddPDPfirst,cart.productvarientnamecartfirst)

    });

    test(' Validate User able to increase & decrease product qty and it reflects in price summary',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username5,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname1)
        await santy.increasebtnfirst.click()
        await page.waitForTimeout(2000)
        await santy.reload()
        await cart.cartvalidationcalulation(santy.unitqtyshow,santy.productunitpricefirst,santy.grandtot)
        await page.waitForTimeout(4000)
        await santy.deceracebtnfirst.click()
        await page.waitForTimeout(2000)
        await santy.reload()
        await cart.cartvalidationcalulation(santy.unitqtyshow,santy.productunitpricefirst,santy.grandtot)
    });

    
   test('Validate User able to Navigate to checkout without apply the discount',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username4,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname2)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)

    });

    test('Validate user able to apply empty gift card or discount  code and check price is affected or not',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username4,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname)
        await cart.applydiscout(cartip.disccodeEmpty)
        await page.waitForTimeout(2000)
        await cart.invaliddiscvalidtion(cart.discounterrormsg,cartip.discerror)
    });
    
    test('Validate user able to apply expired gift card or discount code and check price is affected or not',async({page})=>{
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
            const expiredRows = await cart.activecommons;
            const rowCount = await expiredRows.count();
                
            console.log("expiredRowscountss", rowCount);
                
            if (rowCount === 0) {
                    console.log('No rows with "expired" status found.');
                    return;
            }
            for (let j = 0; j < rowCount; j++) {
                const expired = await cart.stauscommon.nth(j).textContent();
                    
                if (expired.includes('Expired')) {
                    console.log('expired status found:', expired);
            
                    const elementID = j; 
                    console.log('expired element ID (row number):', elementID);
        
                    const codeElement = await expiredRows.locator('xpath=(//tbody[@role="rowgroup"])//tr//td[1]/div/div/span').nth(j);
                    const code = (await codeElement.textContent()).trim();
    
                    console.log('expired Coupon Code:', code);
                    couponCodes.push(code);
                }
            }
            console.log("Coupon codes collected:", couponCodes);
            return couponCodes;
        }
        async function applyFirstDiscount() {
            const couponCodes = await discss();
        
            if (couponCodes.length === 0) {
                console.log('No expired coupon codes to apply.');
                return;
            }
            const firstCode = couponCodes[0];
            console.log(`Applying the first expired coupon code: ${firstCode}`);
            await page.waitForTimeout(3000)
            await login.logout()
            await page.goto("https://mobile.eazygain.com/in/auth")
            await buyerlogin.signin( santyip.username2,santyip.password)
            await santy.reload()
            await page.waitForTimeout(3000)
            await santy.removeProductUntilGone()
            await santy.addtocartwithsearchalone(santyip.productname2)
            await page.waitForTimeout(3000)
    
            await cart.removedisc()
            await applydiscout(firstCode);
            // await cart.discvalid()
            await cart.invaliddiscvalidtion(cart.discounterrormsg,cartip.discerror)
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

   
 test('validate that we can able Navigate to checkout with addding any discount coupon (TaxExclusive)',async({page})=>{
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



    test('Validate User able to navigate the checkout page with single product or multiple products',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.productsearchadd(santyip.productname)
        await page.waitForTimeout(2000)
        await santy.productsearchadd(santyip.productname2)
        await page.waitForTimeout(2000)
        await santy.addtocartwithsearchalone(santyip.productname1)
        await page.waitForTimeout(2000)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)

    });

    
     test('Validate user able to apply invaild gift card or discount code and check price is affected or not',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username4,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname1)
        await page.waitForTimeout(2000)
        await cart.removedisc()
        await cart.applydiscout(cartip.disccodeinvalid)
        await page.waitForTimeout(2000)
        await cart.invaliddiscvalidtion(cart.discounterrormsg,cartip.discerror)
        await cart.discvalid()

     });


     test('validate that we can able to Navigate to Checkout with TaxInclisive Products',async({page})=>{
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
        await settings.taxinclusivecheckedtrue()
        await page.waitForTimeout(1000);
        await settings.sucessmsgvalid(settings.currencysucessmsg,settingsIp.currencysucessmsg)
        
        await settings.backtosetting()
        await page.waitForTimeout(3000);

        await settings.region()
        await page.waitForTimeout(1000);
        await settings.regiontaxchnagetrue(settings.cancelbtn,settings.saveandclosebtn)
        await page.waitForTimeout(1000);
        await settings.sucessmsgvalid(settings.regionsucessmsg,settingsIp.regionsucessmsg)
        await settings.backtosetting()

        await page.waitForTimeout(3000)
        await login.logout()

        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin( santyip.username2,santyip.password)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname)
        await page.waitForTimeout(3000)
        await cart.taxinclusivesinglecaluvalid()
        await page.waitForTimeout(3000)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)

     });



});


// test.describe('User 1 Tests',()=>{

//     test.beforeEach(async ({ page }) => {
//         let santy = new santylogin(page);
//         await santy.goto('/auth');
//         await santy.login(santyip.username1, santyip.password);
//         await page.waitForTimeout(3000)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await santy.removeProductUntilGone(); 
//     });



//     test('Validate Products Added in PLP & PDP is reflected in cart',async({page})=>{
//         test.setTimeout(150000);
//         let  santy = new santylogin(page)
//         await santy.addtocartwithsearch(santyip.productname)
//         await page.waitForTimeout(3000)
//         await santy.cartclearverify(santyip.cartemptytxt)
//         await page.waitForTimeout(1000)
//         await santy.exploreproductcart.click();
//         await page.waitForTimeout(3000)
//         await santy.addtocartwithsearchPDP(santyip.productname)

//     });

//     test('Validate line wise total is shown correctly when user increase & decrease the qty of the product',async({page})=>{
//         test.setTimeout(150000);
//         let  santy = new santylogin(page)
//         let cart = new cartPage(page)
//         await santy.addtocartwithsearchalone(santyip.productname)
//         await cart.increaseAndDescrese(santy.increasebtnfirst,santy.addedqtyfirst,santy.unitqtyshow)
//         await page.waitForTimeout(3000)
//         await santy.increasebtnfirst.click()
//         await page.waitForTimeout(3000)
//         await cart.increaseAndDescrese(santy.deceracebtnfirst,santy.addedqtyfirst,santy.unitqtyshow)
//     });
    


//     test('Validate User able to remove products completly in cart page and make cart is empty and When cart is empty validate the close it should redirects to home page',async({page})=>{
//         test.setTimeout(150000);
//         let santy = new santylogin(page)
//         await santy.addtocartwithsearch(santyip.productname2)
//         await santy.cartclearverify(santyip.cartemptytxt)
//     });
    
//     test('Validate Added Products Respective variants are showed in cart page properly',async({page})=>{
//         test.setTimeout(150000);
//         let santy = new santylogin(page)
//         let cart = new cartPage(page)
//         await santy.addtocartwithsearchvarientproduct(santyip.productname3)
//         await cart.productvalidations(santy.varientnameaddPDPfirst,cart.productvarientnamecartfirst)

//     });



// });

// test.describe('User 2 Tests',()=>{

// });

// test.describe('User 3 Tests',()=>{

// });

// test.describe('User 4 Tests',()=>{

// });