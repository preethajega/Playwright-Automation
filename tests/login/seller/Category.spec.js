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


// pls run the spec webkit  & chnage the baseurl into webdev



test.describe('Category PAGE' , () =>{
    let login;
    
//     test('validate that try to navigate into newly created category  buyer app',async({page})=>{
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)
//         test.setTimeout(150000);

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000)
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(2000);
//         await catpage.createcategory(categoryip.categoryname1,categoryip.HandleName1)
//         await page.waitForTimeout(2000)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(5000)

//         await login.logout()
//         await page.waitForTimeout(2000)
        
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username2,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await  catpage.categorylinkclick(catpage.createdcatlink)
//         await page.waitForTimeout(5000)
//         const currentURL = page.url();
//         console.log("urllllllllllllllll",currentURL)
//         expect(currentURL).toContain('/categories')

//         await page.goto("https://demo.eazygain.com/app/login")
//         await page.waitForTimeout(2000)
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(2000);
//         await catpage.deletecategory(catpage.moreoptBtntoys);
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(4000);
        

//     });

//     test('Validate the created category displayed in the customer app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(2000);
//         await catpage.createcategory(categoryip.categoryname,categoryip.HandleName)
//         await page.waitForTimeout(2000)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(5000)

//         await login.logout()
//         await page.waitForTimeout(2000)

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.catvalidation(catpage.createdcatnamesports,categoryip.categoryname)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(2000);
//         await catpage.deletecategory(catpage.moreoptBtnsports);
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
//         await page.waitForTimeout(3000);
//         await catpage.createcategory(categoryip.categoryname2,categoryip.HandleName2)
//         await page.waitForTimeout(6000);
//         await catpage.deletecategory(catpage.moreoptBtnclock);
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(4000);
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.catdeletevalidation(catpage.createdcatname,categoryip.categoryname2)
//     });


//     test(' Validate the updated category name & updated image displayed in the customer app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
        
//         await page.waitForTimeout(5000);
//         await catpage.createcategory(categoryip.categoryname3,categoryip.HandleName3)
//         await page.waitForTimeout(3000)
//         await catpage.Editcategory(catpage.moreoptBtnPens);
//         await page.waitForTimeout(3000);
//         await catpage.Editdata(categoryip.editcategoryname,categoryip.editHandleName)
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catupdatemsg,categoryip.catupdatemsg)
//         await page.waitForTimeout(4000);
//         await login.logout()
//         await page.waitForTimeout(3000);

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.catvalidation(catpage.createdcatname,categoryip.editcategoryname)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await page.waitForTimeout(3000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(4000);
//         await catpage.deletecategory(catpage.moreoptBtnsport);
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(4000);
//     });
   
    

// test('Create nested category and verify its available in the customer app',async({page})=>{
//     test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(3000);
//         await catpage.createcategory(categoryip.categorynamenew,categoryip.HandleNamenew)
//         await page.waitForTimeout(6000);
//         await catpage.createNestedcategory(catpage.addcategoryplusbtnNewsportsAdd,categoryip.categorynamenesteds,categoryip.HandleNamenesteds)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(2000);

//         await login.logout()
//         await page.waitForTimeout(3000);

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await page.waitForTimeout(3000);
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.catvalidation(catpage.nextedcatname,categoryip.categorynamenesteds)
//         await page.waitForTimeout(3000)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deleteNestedcategory(catpage.catexpandnewsports,catpage.moreoptBtnNewsportsNEWProtective)
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(2000);
//         await catpage.deletecategory(catpage.moreoptBtnNewsport);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//     });

//     test('Create doublenested category and verify its available in the customer app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(6000);
//         await catpage.createcategory(categoryip.categoryname4,categoryip.HandleName4)
//         await page.waitForTimeout(6000);
//         await catpage.createNestedcategory(catpage.addcategoryplusbtnspecialsports,categoryip.categorynamenested,categoryip.HandleNamenested)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(4000);
//         await catpage.createdoubleNestedcategory(catpage.catexpandspecialsports,catpage.addcategoryplusbtnSpecialsportsProtective,categoryip.categorynamenested2,categoryip.HandleNamenested2)
//         await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
//         await page.waitForTimeout(2000);

//         await login.logout()
//         await page.waitForTimeout(3000);
        
//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await  catpage.categorylinkclick(catpage.createdcatlink)
//         await page.waitForTimeout(5000)
//         // await catpage.nestedcatvalidation(catpage.doublenextedcatName,categoryip.categorynamenested1)
//         await page.waitForTimeout(3000)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deletedoubleNestedcategory(catpage.catexpandspecialsports,catpage.catexpandProtectiveequip,catpage.moreoptBtnTrainingEquip)
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await santy.reload()
//         await page.waitForTimeout(2000);
//         await catpage.deleteNestedcategory(catpage.catexpandspecialsports,catpage.moreoptBtnSpecialsportsProtective)
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//         await page.waitForTimeout(2000);
//         await catpage.deletecategory(catpage.moreoptBtnSpecialsports);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)   
//     });

//     test('update the deactive categortory into Active and Check visibility in customer App',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(3000);
//         await catpage.createcategory(categoryip.categorynameactive,categoryip.HandleNameactive)
//         await page.waitForTimeout(3000);
//         await catpage.Statusvisablitychange(catpage.moreoptBtnactive,catpage.statusexpanbtn,catpage.isdeactivestatusedit)
//         await page.waitForTimeout(3000);
//         await catpage.Statusvisablitychange(catpage.moreoptBtnactive,catpage.statusexpanbtn,catpage.isactivestatusedit)
//         await page.waitForTimeout(2000);
//         await catpage.snackbarvalidation(catpage.catupdatemsg,categoryip.catupdatemsg)
//         await page.waitForTimeout(2000);

//         await login.logout()
//         await page.waitForTimeout(3000);

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.visibilityCheckTrue(categoryip.categorynameactive)
//         await page.waitForTimeout(2000)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deletecategory(catpage.moreoptBtnactive);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//     });

//     test('Inactivate the category and verify the category is disappeared from the app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(3000);
//         await catpage.createcategory(categoryip.categorynameactive1,categoryip.HandleNameactive1)
//         await page.waitForTimeout(3000);
//         await catpage.Statusvisablitychange(catpage.moreoptBtnnewactive,catpage.statusexpanbtn,catpage.isdeactivestatusedit)
//         await page.waitForTimeout(3000);
//         await catpage.snackbarvalidation(catpage.catupdatemsg,categoryip.catupdatemsg)
//         await page.waitForTimeout(2000);

//         await login.logout()
//         await page.waitForTimeout(3000);

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.visibilityCheckFalse(categoryip.categorynameactive1)
//         await page.waitForTimeout(2000)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deletecategory(catpage.moreoptBtnnewactive);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//     });

//     test('update the Public categortory into Private  and Check visibility in customer app',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(3000);
//         await catpage.createcategory(categoryip.categorynamePublic,categoryip.HandleNameapublic)
//         await page.waitForTimeout(3000);
//         await catpage.Statusvisablitychange(catpage.moreoptBtnpublic,catpage.visablityexpanbtn,catpage.privatevisablityedit)
//         await page.waitForTimeout(3000);
//         await catpage.snackbarvalidation(catpage.catupdatemsg,categoryip.catupdatemsg)
//         await page.waitForTimeout(2000);

//         await login.logout()
//         await page.waitForTimeout(3000);

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.visibilityCheckFalse(categoryip.categorynamePublic)
//         await page.waitForTimeout(2000)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deletecategory(catpage.moreoptBtnpublic);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)
//     });

//     test('update the Private categortory into Public and Check visibility in customer App',async({page})=>{
//         test.setTimeout(150000);
//         let buyerlogin = new Buyerloginpage(page);
//         let catpage = new categoryPage(page);
//         login = new LoginPage(page);
//         let santy = new santylogin(page)

//         await login.goto('/app/login')
//         await page.waitForTimeout(2000);
//         await login.ValidCredentails()
//         await page.waitForTimeout(5000);
//         await catpage.clickoncategory()
//         await page.waitForTimeout(3000);
//         await catpage.createcategory(categoryip.categorynamePublic1,categoryip.HandleNameapublic1)
//         await page.waitForTimeout(3000);
//         await catpage.Statusvisablitychange(catpage.moreoptBtnnewpublic,catpage.visablityexpanbtn,catpage.privatevisablityedit)
//         await page.waitForTimeout(3000);
//         await catpage.Statusvisablitychange(catpage.moreoptBtnnewpublic,catpage.visablityexpanbtn,catpage.publicvisablityedit)
//         await page.waitForTimeout(3000);
//         await catpage.snackbarvalidation(catpage.catupdatemsg,categoryip.catupdatemsg)
//         await page.waitForTimeout(2000);

//         await login.logout()
//         await page.waitForTimeout(3000);

//         await page.goto("https://mobile.eazygain.com/in/auth")
//         await buyerlogin.signin( santyip.username1,santyip.password)
//         await santy.reload()
//         await page.waitForTimeout(3000)
//         await catpage.visibilityCheckTrue(categoryip.categorynamePublic1)
//         await page.waitForTimeout(2000)

//         await page.goto("https://demo.eazygain.com/app/login")
//         await login.ValidCredentails()
//         await page.waitForTimeout(2000);
//         await catpage.clickoncategory()        
//         await page.waitForTimeout(4000);
//         await catpage.deletecategory(catpage.moreoptBtnnewpublic);
//         await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)   
//     });

    test('Reorganize the Categories and observe its updated in the customer app',async({page})=>{
        test.setTimeout(150000);
        let buyerlogin = new Buyerloginpage(page);
        let catpage = new categoryPage(page);
        login = new LoginPage(page);
        let santy = new santylogin(page)

        await login.goto('/app/login')
        await page.waitForTimeout(2000);
        await login.ValidCredentails()
        await page.waitForTimeout(5000);
        await catpage.clickoncategory()
        await page.waitForTimeout(3000);
        // await catpage.createcategory(categoryip.categoryname5,categoryip.HandleName5)
        // await page.waitForTimeout(3000);
        // await catpage.snackbarvalidation(catpage.catcreatemsg,categoryip.catsucessmsg)
        // await page.waitForTimeout(2000);
        await catpage.reorganizeCategory()
        await catpage.snackbarvalidation(catpage.catswapmsg,categoryip.catswapmsg)
        await page.waitForTimeout(2000);
        

        await login.logout()
        await page.waitForTimeout(3000);

        await page.goto("https://mobile.eazygain.com/in/auth")
        await buyerlogin.signin( santyip.username1,santyip.password)
        await santy.reload()
        await page.waitForTimeout(3000)
        await catpage.visibilityCheckTrue(categoryip.categorynamePublic1)
        await page.waitForTimeout(2000)

        await page.goto("https://demo.eazygain.com/app/login")
        await login.ValidCredentails()
        await page.waitForTimeout(2000);
        await catpage.clickoncategory()        
        await page.waitForTimeout(4000);
        await catpage.deletecategory(catpage.moreoptBtnnewpublic);
        await catpage.snackbarvalidation(catpage.catdeletemsg,categoryip.catdeltemsg)   
    });


});
