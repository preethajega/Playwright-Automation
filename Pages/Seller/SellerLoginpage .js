
const { test, expect,waitForSelector} = require('@playwright/test');
class LoginPage {
    constructor (page){
        this.page=page

      this.userName=page.getByPlaceholder('Email')
      this.passWord =page.getByPlaceholder('Password')
      this.submit =page.getByText('Continue')
      this.errormsg=page.getByText('These credentials do not match our records.')
      this.logouticon=page.locator("//div[@id='radix-:r0:']")
      this.logoutbtn=page.getByText("Sign out")
    
      
    }


    async login(username, password) {
        await this.userName.fill(username)
        await this.passWord.fill(password)
        await this.submit.click();
        await this.page.waitForLoadState("networkidle")
     
      }

      async logout(){
        await this.logouticon.click()
        await this.page.waitForLoadState("networkidle")
        await this.logoutbtn.click();

      }
      async IncorrectCredentails(errmsg) {
        expect(this.errormsg).toHaveText(errmsg)
    }


      async goto(input) {
        await this.page.goto(input);
      }
      async ValidCredentails(){
        await this.page.getByPlaceholder('Email').fill("preetha@apptino.com")
        await this.page.getByPlaceholder('Password').fill("Admin@123")
        await this.page.getByText('Continue').click()
        await this.page.waitForLoadState("networkidle")
        
      }

}
module.exports=LoginPage;