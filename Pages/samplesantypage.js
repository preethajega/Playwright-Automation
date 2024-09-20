const { test, expect,page,waitForSelector} = require('@playwright/test');

class santy{

    constructor(page){
        this.page=page;

        this.userName=page.getByTestId('email-input')
        this.passWord =page.getByTestId('password-input')
        this.submit =page.getByTestId('sign-in-button')
        this.errormsg=page.getByTestId('login-error-message')
        this.signup=page.getByTestId('register-button')
        this.logouticon=page.locator("//a[@href='/in/menu']//*[name()='svg']")
        this.logoutBtn=page.locator("//button[normalize-space()='Log Out']")
        this.firstsubcategory=page.locator('//body[1]/main[1]/div[3]/div[1]/div[1]/ul[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]')
        this.plppdpback=page.locator("//div[contains(@class,'mr-1 flex w-12')]//a//*[name()='svg']")
        this.firstproduct=page.locator("//body[1]/main[1]/div[3]/div[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[1]/div[1]")
        this.firstplpaddsingle=page.locator("(//button[text()='Add'])[1]")
        this.firstpdpaddsingle=page.locator("//button[text()='Add to Cart']")
    

 


    }

    async login(username,password){
        await this.userName.fill(username)
        await this.passWord.fill(password)
        await this.submit.click();
        await this.page.waitForLoadState("networkidle")
    }
    async logout(){
        await this.logouticon.click();
        await this.page.waitForLoadState("networkidle")
        await this.logoutBtn.click();
    }
    async goto(input) {
        await this.page.goto(input);
    }
     async reload(){
        await this.page.reload({timeout: 100000, waitUntil: 'load'});
     }
     async PLPPDPback(){
        await this.plppdpback.click();
     }

     async plppage(){
        await this.firstsubcategory.click();
        await this.page.waitForLoadState("networkidle")
        await this.plppdpback.click();
        await this.page.waitForLoadState("networkidle")

     }

     async PDPpage(){
        await this.firstsubcategory.click();
        await this.page.waitForLoadState("networkidle")
        await this.firstproduct.click();
        await this.page.waitForLoadState("networkidle")
        await this.plppdpback.click();
        await this.page.waitForLoadState("networkidle")

     }

}

module.exports=santy;