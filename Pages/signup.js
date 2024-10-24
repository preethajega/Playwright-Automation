const { test, expect,page,waitForSelector} = require('@playwright/test');


class SignupPage{
     constructor(page){
        this.page =page
        this.username=page.getByTestId('first-name-input')
        this.email=page.getByTestId('email-input')
        this.phonceno=page.getByTestId('phone-input')
        this.password=page.getByTestId('password-input')
        this.register=page.getByTestId('register-button')
        this.signin=page.getByRole('button', { name: 'Sign in' })
        this.signup=page.getByTestId('register-button')
        this.errormsg=page.getByTestId('register-error')



     }

     async goto(input) {
        await this.page.goto(input);
      }

      async signupfn(username,email,phoneno,pwd){
        await this.signup.click();
        await this.username.fill(username)
        await this.email.fill(email)
        await this.phoneno.fill(phoneno)
        await this.password.fill(pwd)
        await this.register.click()
        await this.page.waitForLoadState("networkidle")

      }

      async signupValidation(errormsg){
        await expect(errormsg).toHaveText(errormsg)
      }

}


module.exports=SignupPage;