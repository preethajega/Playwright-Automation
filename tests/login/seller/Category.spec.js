const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage = require("../../../Pages/Seller/SellerLoginpage ")
const categoryPage = require("../../../Pages/Seller/category")
const Buyerloginpage = require("../../../Pages/loginpage")

const catinput=JSON.stringify (require('../../../input/Seller/category'))
//const catinputs=JSON.parse(JSON.stringify(require('../../../input/Seller/category')))

test.describe('Category PAGE' , () =>{
    let login;
    
    test('Login With correct data of' , async ({page})=>{
        let buyerlogin = new Buyerloginpage(page);
        login = new LoginPage(page);
        await login.goto('/app/login')
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        
        let catpage = new categoryPage(page);
    
        await page.waitForTimeout(3000);
        await catpage.clickoncategory()
        await catpage.createcategory('sports','NewSports')

        

        await page.waitForTimeout(8000);
        await catpage.Editcategory();
        await catpage.Editdata('sport','NewSport')

        await page.waitForTimeout(3000)
        await catpage.deletecategory();

        // seller logout

        await login.logout()


        //buyer login 

        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin('preetha@mailto.plus','Admin@123')
       // await page.reload();
        await page.waitForTimeout(5000)
        await page.goto("https://mobile.eazygain.com/in/orders")

        await page.waitForTimeout(3000)
        


    });
    // test('create a new Catgeory',async({})=>{
    
    //     let catpage = new categoryPage(page);
    //     await page.waitForTimeout(5000);

    //     await catpage.clickoncategory()
    //     await catpage.createcategory(catinput.categoryname,catinput.HandleName)

    // });


});
