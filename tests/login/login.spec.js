const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage =  require('../../Pages/loginpage')
const input=JSON.parse(JSON.stringify(require('./../../input/login.json')))



test.describe('Login page Test', () => {
  let login;
      for (const ip of input){
        test(`Test login with ${ip.testname}`, async ({ page }) => {
              login = new LoginPage(page);
              await login.goto('/auth')
              await login.signin(ip.email,ip.password)
              await login.IncorrectCredentails(ip.errormsg?ip.errormsg : "");
              
         });
      }
 });