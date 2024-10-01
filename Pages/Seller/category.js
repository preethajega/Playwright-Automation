const { test, expect,page,waitForSelector} = require('@playwright/test');
class Category {
    constructor(page) {
        this.page = page

       this.catmenu=page.locator("//span[contains(text(),'Categories')]")
       this.AddCategory=page.getByText('Add category')
       this.addcategoryplusbtn=page.locator('(//span[@data-state="closed"])[last()]//button')
       this.Name = page.locator("//input[@placeholder='Give this category a name']")
       this.handle = page.locator("//input[@placeholder='Custom handle']")
       this.saveCategory=page.getByText('Save category')
       this.statusexpanbtn=page.locator('#is_active svg')
       this.visablityexpanbtn=page.locator('#is_public svg')
       this.activestatus=page.locator("//span[text()='Active']")
       this.inactivestatus=page.locator("//span[text()='Inactive']")
       this.privatevisablity=page.locator("//span[text()='Private']")
       this.publicvisablity=page.locator("//span[text()='Public']")
       this.moreoptBtn=page.locator("(//*[name()='svg'])[last()]")
       this.editcatBtn=page.locator("//button[@class='btn btn-ghost btn-small flex w-full justify-start']")
       this.deletecatBtn =page.locator("//button[@class='btn btn-ghost btn-small flex w-full justify-start text-rose-50']")
   
       this.catexpand=page.locator('(//div[contains(@class,"cursor-pointer items-center justify-center")]//span)[last()]')


       this.catdeletemsg=page.locator("//span[text()='Category deleted']")
       this.catcreatemsg=page.locator("//span[text()='Successfully created a category']")
       this.catupdatemsg=page.locator("//span[text()='Successfully updated the category']")


       
       


       //buyer side

       this.createdcatname=page.locator('((//div[@class="max-w-2xl  pt-4 pb-2 lg:max-w-none"])[last()]//p)[1]')
       this.createdcatlink=page.locator('(//div[@class="relative w-full h-full"])[last()]')
       this.majicatname=page.locator('((//div[@class="max-w-2xl  pt-4 pb-2 lg:max-w-none"])[last()]//p)[2]')
       this.doublenextedcatName=page.locator('(//div[@class="lg:text-start lg:w-full"])[last()]//p')



        
    //     this.catmenu="//span[contains(text(),'Categories')]"
    //     this.AddCategory="//span[normalize-space()='Add category']"
    //     this.Name = page.getByPlaceholder('Give this category a name')
    //    this.handle = page.getByPlaceholder('Custom handle')
    //     //this.Name=page.getByRole(input,{name:"name"})
    //    //this.handle=page.getByRole(input,{name:"handle"})
    //     this.saveCategory ="//span[normalize-space()='Save category']"
        

}

async reloadcheck(){
    await this.page.setJavaScriptEnabled(false);
await this.page.reload({ timeout: 100000, waitUntil: 'load' });
await this.page.setJavaScriptEnabled(true); 
}
async snackbarvalidation(sankbarelement,snakbartext){
    const snakbarvar= await sankbarelement.textContent()
    await expect(snakbarvar.trim()).toBe(snakbartext);

}

async catvalidation(catelement,createdcat){
    await catelement.scrollIntoViewIfNeeded()
    await this.page.waitForTimeout(6000)
    const catname= await catelement.textContent()
    await expect(catname.trim()).toBe(createdcat);

}
async nestedcatvalidation(catelement,createdcat){
    await this.page.waitForTimeout(6000)
    const catname= await catelement.textContent()
    await expect(catname.trim()).toBe(createdcat);

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
async createNestedcategory(categoryname,handlename){
    await this.addcategoryplusbtn.click()
    await this.Name.fill(categoryname);
    await this.handle.fill(handlename);
    await this.saveCategory.click();
}
async createdoubleNestedcategory(categoryname,handlename){
    await this.catexpand.click()
    await this.addcategoryplusbtn.click()
    await this.Name.fill(categoryname);
    await this.handle.fill(handlename);
    await this.saveCategory.click();
}

async deletecategory(){
    await this.moreoptBtn.click();
    await this.page.waitForLoadState("networkidle")
    await this.deletecatBtn.click();
    }
    
async deleteNestedcategory(){
    await this.catexpand.click()
    await this.moreoptBtn.click();
    await this.page.waitForLoadState("networkidle")
    await this.deletecatBtn.click();
}
async deletedoubleNestedcategory(){
    await this.catexpand.click()
    await this.catexpand.click()
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
async categorylinkclick(catlinkele){
    await catlinkele.scrollIntoViewIfNeeded()
    await this.page.waitForTimeout(4000)
    await catlinkele.click();

}

}

module.exports=Category;