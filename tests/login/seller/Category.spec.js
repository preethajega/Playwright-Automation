const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage = require("../../../Pages/Seller/SellerLoginpage ")
const categoryPage = require("../../../Pages/Seller/category")
const Buyerloginpage = require("../../../Pages/loginpage")
const categoryip=require("../../../input/Seller/category")
const santyip = require('../../../input/santy')
const santylogin=require('../../../Pages/samplesantypage')
const {getNextIncrement} = require("../../../Pages/counter")

const catinput=JSON.stringify (require('../../../input/Seller/category'))
//const catinputs=JSON.parse(JSON.stringify(require('../../../input/Seller/category')))
const { chromium } = require('playwright');

test.describe('Category PAGE' , () =>{
    let login;
    

    
    // test('Login With correct data of' , async ({page})=>{
    //     let buyerlogin = new Buyerloginpage(page);
    //     login = new LoginPage(page);
    //     await login.goto('/app/login')
    //     await login.ValidCredentails()
    //     await page.waitForTimeout(5000);
        
    //     let catpage = new categoryPage(page);
    
    //     await page.waitForTimeout(3000);
    //     await catpage.clickoncategory()
    //     await catpage.createcategory(categoryip.categoryname,categoryip.HandleName)

    //     await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)

        

    //     await page.waitForTimeout(8000);
    //     await catpage.Editcategory();
    //     await catpage.Editdata(categoryip.editcategoryname,categoryip.editHandleName)

    //     await page.waitForTimeout(3000)
    //     await catpage.deletecategory();

    //     // seller logout

    //     await login.logout()


    //     //buyer login 

    //     await page.goto("https://mobile.eazygain.com/in/auth")
    //     await buyerlogin.signin( santyip.username1,santyip.password)
    //    // await page.reload();
    //     await page.waitForTimeout(5000)
    //     await page.goto("https://mobile.eazygain.com/in/orders")

    //     await page.waitForTimeout(3000)
        


    // });

    // test('create a new Catgeory',async({})=>{
    
    //     let catpage = new categoryPage(page);
    //     await page.waitForTimeout(5000);

    //     await catpage.clickoncategory()
    //     await catpage.createcategory(catinput.categoryname,catinput.HandleName)

    // });

    test('Validate the created category displayed in the customer app',async({page})=>{
        test.setTimeout(150000);
        let buyerlogin = new Buyerloginpage(page);
        let catpage = new categoryPage(page);
        login = new LoginPage(page);
        let santy = new santylogin(page)



        await login.goto('/app/login')
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await catpage.clickoncategory()
        await page.waitForTimeout(2000);
        await catpage.createcategory(categoryip.categoryname,categoryip.HandleName)
        await page.waitForTimeout(2000)
        await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
        await page.waitForTimeout(5000)


        await login.logout()

      
        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin( santyip.username1,santyip.password)
        await santy.reload()
        await page.waitForTimeout(3000)
        await catpage.catvalidation(catpage.createdcatname,categoryip.categoryname)

        await page.goto("https://demo.eazygain.com/app/login")
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await catpage.clickoncategory()
        await page.waitForTimeout(2000);
        await catpage.deletecategory();
        await page.waitForTimeout(2000);
        await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
        await page.waitForTimeout(4000);



        
    });



    

    test('validate that try to navigate into newly created category  buyer app',async({page})=>{
        let buyerlogin = new Buyerloginpage(page);
        let catpage = new categoryPage(page);
        login = new LoginPage(page);
        let santy = new santylogin(page)

        await login.goto('/app/login')
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await catpage.clickoncategory()
        await page.waitForTimeout(2000);
        await catpage.createcategory(categoryip.categoryname,categoryip.HandleName)
        await page.waitForTimeout(2000)
        await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
        await page.waitForTimeout(5000)


        await login.logout()
        
        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin( santyip.username1,santyip.password)
        await santy.reload()
        await page.waitForTimeout(3000)
        await  catpage.categorylinkclick(catpage.createdcatlink)
        await page.waitForTimeout(5000)
        const currentURL = page.url();
        console.log("urllllllllllllllll",currentURL)
        expect(currentURL).toContain('/categories')

        await page.goto("https://demo.eazygain.com/app/login")
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await catpage.clickoncategory()
        await page.waitForTimeout(2000);
        await catpage.deletecategory();
        await page.waitForTimeout(2000);
        await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
        await page.waitForTimeout(4000);
        

    });


//     test(' Validate the updated category name & updated image displayed in the customer app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
        
//         await page.waitForTimeout(5000);
//         await catpage.createcategory(categoryip.categoryname,categoryip.HandleName)
//         await page.waitForTimeout(3000)
//         await catpage.Editcategory();
//         await page.waitForTimeout(3000);
//         await catpage.Editdata(categoryip.editcategoryname,categoryip.editHandleName)
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catupdatemsg,categoryip.catupdatemsg)
//         await page.waitForTimeout(4000);
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.catvalidation(catpage.createdcatname,categoryip.editcategoryname)


//  await page.goto("https://mobile.eazygain.com/in/auth")
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(6000);
//         await catpage.deletecategory();
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(4000);
        


//     });
   
    
//     test('Validate the deleted category displayed in the customer app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(6000);
//         await catpage.deletecategory();
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(4000);
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)

        

//     });

// test('Create nested category and verify its available in the customer app',async({page})=>{
//     test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         const counter = await getNextIncrement();
//         console.log("Counter value:", counter);
//         const catname=`sports${counter}`;

//         await login.goto('/app/login')
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(4000);
//         await catpage.createcategory(catname,categoryip.HandleName)
//         await page.waitForTimeout(6000);
//         await catpage.createNestedcategory(categoryip.categorynamenested,categoryip.HandleNamenested)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(4000);
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.catvalidation(catpage.majicatname,categoryip.categorynamenested)
//         await page.waitForTimeout(3000)

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deleteNestedcategory()
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)

//     });
//     test('Create doublenested category and verify its available in the customer app',async({page})=>{

//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         const counter = await getNextIncrement();
//         console.log("Counter value:", counter);
//         const catname=`sports${counter}`;


//         await login.goto('/app/login')
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(6000);
//         await catpage.createcategory(catname,categoryip.HandleName)
//         await page.waitForTimeout(6000);
//         await catpage.createNestedcategory(categoryip.categorynamenested,categoryip.HandleNamenested)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(4000);
//         await catpage.createdoubleNestedcategory(categoryip.categorynamenested1,categoryip.HandleNamenested1)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(2000);
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await  catpage.categorylinkclick(catpage.createdcatlink)
//         await page.waitForTimeout(5000)
//         await catpage.nestedcatvalidation(catpage.doublenextedcatName,categoryip.categorynamenested1)
//         await page.waitForTimeout(3000)

        

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deletedoubleNestedcategory()
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
        

//     });
    // test('Validate the created category displayed in the customer app',async({page})=>{
        

    // });


});
