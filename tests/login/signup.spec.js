const { test, expect,page ,waitForSelector} = require('@playwright/test');
const SignupPage = require('./../../Pages/signup')
const input = JSON.parse(JSON.stringify(require('./../../input/signup.json')))



test.describe('Signup page Test', () => {
    let signup;
        for (const ip of input){
          test(`Test login with ${ip.testname}`, async ({ page }) => {
               signup = new SignupPage(page);
                await signup.goto('/auth')
                await signup.signupfn(ip.username,ip.email,ip.phoneno,ip.password)
                await signup.signupValidation(ip.errormsg)
           });
        }
   });