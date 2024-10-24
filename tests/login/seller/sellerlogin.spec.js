const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage = require("../../../Pages/Seller/SellerLoginpage ")
const input=JSON.parse(JSON.stringify(require('../../../input/Seller/sellerlogin.json')))

test.describe('LOGIN PAGE' , () =>{
    let login;
     for(const ip of input){
        test(`Login With Incorrect data of ${ip.testname}`, async ({page})=>{
            login = new LoginPage(page);
            await login.goto('/app/login')
            await login.login(ip.email,ip.password)
            await login.IncorrectCredentails(ip.errormsg?ip.errormsg : "");


        });

        
    } 
    test('Login With correct data of' , async ({page})=>{
        login = new LoginPage(page);
        await login.goto('/app/login')
        await login.ValidCredentails()

    });
});