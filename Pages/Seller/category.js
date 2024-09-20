const { test, expect,page,waitForSelector} = require('@playwright/test');
class Category {
    constructor(page) {
        this.page = page

       this.catmenu=page.locator("//span[contains(text(),'Categories')]")
       this.AddCategory=page.getByText('Add category')
       this.Name = page.locator("//input[@placeholder='Give this category a name']")
       this.handle = page.locator("//input[@placeholder='Custom handle']")
       this.saveCategory=page.getByText('Save category')
       this.moreoptBtn=page.locator("(//*[name()='svg'])[last()]")
       this.editcatBtn=page.locator("//button[@class='btn btn-ghost btn-small flex w-full justify-start']")
       this.deletecatBtn =page.locator("//button[@class='btn btn-ghost btn-small flex w-full justify-start text-rose-50']")


        
    //     this.catmenu="//span[contains(text(),'Categories')]"
    //     this.AddCategory="//span[normalize-space()='Add category']"
    //     this.Name = page.getByPlaceholder('Give this category a name')
    //    this.handle = page.getByPlaceholder('Custom handle')
    //     //this.Name=page.getByRole(input,{name:"name"})
    //    //this.handle=page.getByRole(input,{name:"handle"})
    //     this.saveCategory ="//span[normalize-space()='Save category']"
        

}

async clickoncategory(){
    await this.catmenu.click();
    await this.page.waitForLoadState("networkidle")
}
async createcategory(categoryname,handlename){
    await this.page.waitForLoadState("networkidle")
    await this.AddCategory.click();
    await this.Name.fill(categoryname);
    await this.handle.fill(handlename);
    await this.saveCategory.click();

} 
async deletecategory(){
    await this.moreoptBtn.click();
    await this.page.waitForLoadState("networkidle")
    await this.deletecatBtn.click();
}

async Editcategory(){
    await this.moreoptBtn.click();
    await this.page.waitForLoadState("networkidle")
    await this.editcatBtn.click();
    await this.page.waitForLoadState("networkidle")
}

async Editdata(categoryname,handlename){
    await this.Name.clear()
    await this.Name.fill(categoryname);
    await this.handle.clear()
    await this.handle.fill(handlename);
    await this.saveCategory.click();
    await this.page.waitForLoadState("networkidle")
}

}

module.exports=Category;