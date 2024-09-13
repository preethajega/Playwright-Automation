const { test, expect,page,waitForSelector} = require('@playwright/test');


class LoginPage {
    constructor(page) {
      this.page = page;

      this.userName=page.getByTestId('email-input')
      this.passWord =page.getByTestId('password-input')
      this.submit =page.getByTestId('sign-in-button')
      this.errormsg=page.getByTestId('login-error-message')
      this.signup=page.getByTestId('register-button')
      
  

    }

      async signin(username, password) {
        await this.userName.fill(username)
        await this.passWord.fill(password)
        await this.submit.click();
        await this.page.waitForLoadState("networkidle")
     
      }
      async IncorrectCredentails(errmsg) {
      expect(this.errormsg).toHaveText(errmsg)
     
      }

      async goto(input) {
        await this.page.goto(input);
      }

    

    }


    module.exports=LoginPage;