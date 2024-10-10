const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage = require("../../../Pages/Seller/SellerLoginpage ")
const cartPage = require("../../../Pages/Buyer/cart")
const Buyerloginpage = require("../../../Pages/loginpage")
const cartip=require("../../../input/Buyer/cartip")
const santyip = require('../../../input/santy')
const santylogin=require('../../../Pages/samplesantypage')
const {getNextIncrement} = require("../../../Pages/counter")

test.describe('Cart PAGE' , () =>{

    test('Validate Products Added in PLP is reflected in cart',async({page})=>{
        test.setTimeout(150000);
        let  santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username3,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearch(santyip.productname)
    });

    test('Validate Products Added in PDP is reflected in cart',async({page})=>{
        test.setTimeout(150000);
        let  santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchPDP(santyip.productname1)
    });


    test('Validate Products details like name , unit price, asked qty ,uom, total price shown correctly in Cart page',async({page})=>{
        test.setTimeout(150000);
        let  santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username4,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname2)
        await cart.productvalidations(santy.productnamePDP,santy.productnamecartfirst)
        await cart.productvalidations(santy.productprice,santy.productpriceplpfirst)
        await cart.productvalidations(santy.addedqtyfirst,santy.addedqtyfirst)
        await cart.cartvalidation(santy.productunitpricefirst,santy.subtotal)
        
    });


    test('Validate line wise total is shown correctly when user increase & decrease the qty of the product',async({page})=>{
        test.setTimeout(150000);
        let  santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname2)
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
        await santy.login(santyip.username3,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearch(santyip.productname1)
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
        await santy.login(santyip.username2,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname2)
        await santy.increasebtnfirst.click()
        await page.waitForTimeout(2000)
        await santy.reload()
        await cart.cartvalidationcalulation(santy.unitqtyshow,santy.productunitpricefirst,santy.subtotal)
        await page.waitForTimeout(4000)
        await santy.deceracebtnfirst.click()
        await page.waitForTimeout(2000)
        await santy.reload()
        await cart.cartvalidationcalulation(santy.unitqtyshow,santy.productunitpricefirst,santy.subtotal)
    });

    
   test('Validate User able to Navigate to checkout without apply the discount',async({page})=>{
        test.setTimeout(150000);
        let santy = new santylogin(page)
        let cart = new cartPage(page)
        await santy.goto('/auth')
        await santy.login(santyip.username3,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.removeProductUntilGone()
        await santy.addtocartwithsearchalone(santyip.productname2)
        await santy.placeorderalone()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)

    });

    // test('Validate user able to apply empty gift card or discount  code and check price is affected or not',async({page})=>{

    // });
    

    // test('Validate Products Added in PDP is reflected in cart',async({page})=>{

    // });



});