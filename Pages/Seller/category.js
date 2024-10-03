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
       this.isactivestatus=page.locator("//span[text()='Active']")
       this.isactivestatusedit=page.getByRole('option', { name: 'Active', exact: true }).locator('span').first()
       this.isdeactivestatus=page.locator("//span[text()='Inactive']")
       this.isdeactivestatusedit=page.getByRole('option', { name: 'Inactive' }).locator('span').first()
       this.privatevisablity=page.locator("//span[text()='Private']")
       this.publicvisablity=page.locator("//span[text()='Public']")
       this.privatevisablityedit=page.getByRole('option', { name: 'Private' }).locator('span').first()
       this.publicvisablityedit=page.getByRole('option', { name: 'Public' }).locator('span').first()
       this.moreoptBtn=page.locator("(//*[name()='svg'])[last()]")
       this.moreoptBtnsports=page.locator('li').filter({ hasText: 'sports' }).getByRole('button').nth(1)
       this.moreoptBtnsport=page.locator('li').filter({ hasText: 'sport' }).getByRole('button').nth(1)
       this.moreoptBtntoys=page.locator('li').filter({ hasText: 'Toys' }).getByRole('button').nth(1)
       this.moreoptBtnclock=page.locator('li').filter({ hasText: 'clock' }).getByRole('button').nth(1)
       this.moreoptBtnPens=page.locator('li').filter({ hasText: 'Pens' }).getByRole('button').nth(1)

       this.moreoptBtnNewsport=page.locator('li').filter({ hasText: 'Newsports' }).getByRole('button').nth(1)
       this.moreoptBtnNewsportsNEWProtective=page.locator('li').filter({ hasText: 'NewsportsNEWProtective equip' }).getByRole('button').nth(3)

       this.moreoptBtnSpecialsports=page.locator('li').filter({ hasText: 'Specialsports' }).getByRole('button').nth(1)
       this.moreoptBtnSpecialsportsProtective=page.locator('li').filter({ hasText: 'SpecialsportsProtective' }).getByRole('button').nth(3)
       this.moreoptBtnTrainingEquip=page.locator('li').filter({ hasText: /^Training equipment$/ }).getByRole('button').nth(1)

       this.moreoptBtnactive=page.locator('li').filter({ hasText: 'Actives' }).getByRole('button').nth(1)
       this.moreoptBtnpublic=page.locator('li').filter({ hasText: 'Publics' }).getByRole('button').nth(1)
       this.moreoptBtnnewactive=page.locator('li').filter({ hasText: 'NewActives' }).getByRole('button').nth(1)
       this.moreoptBtnnewpublic=page.locator('li').filter({ hasText: 'NewPublics' }).getByRole('button').nth(1)

       this.editcatBtn=page.locator("//button[@class='btn btn-ghost btn-small flex w-full justify-start']")
       this.deletecatBtn =page.locator("//button[@class='btn btn-ghost btn-small flex w-full justify-start text-rose-50']")
   
       this.catexpand=page.locator('(//div[contains(@class,"cursor-pointer items-center justify-center")]//span)[last()]')

       this.catexpandnewsports=page.locator('li').filter({ hasText: 'Newsports' }).getByRole('img').nth(1)
       this.catexpandspecialsports= page.locator('li').filter({ hasText: 'Specialsports' }).getByRole('img').nth(1)
       this.catexpandProtectiveequip=page.locator('li').filter({ hasText: /^Protective equipment$/ }).getByRole('img').nth(1)

       this.addcategoryplusbtnNewsportsAdd=page.locator('li').filter({ hasText: 'Newsports' }).getByRole('button').first()
       
       this.addcategoryplusbtnspecialsports=page.locator('li').filter({ hasText: 'Specialsports' }).getByRole('button').first()
       this.addcategoryplusbtnSpecialsportsProtective=page.locator('li').filter({ hasText: 'SpecialsportsProtective' }).getByRole('button').nth(2)
       this.addcategoryplusbtnProtectiveequip= page.locator('li').filter({ hasText: /^Protective equipmentTraining equipment$/ }).getByRole('button').first()
       

       this.catdeletemsg=page.locator("//span[text()='Category deleted']")
       this.catcreatemsg=page.locator("//span[text()='Successfully created a category']")
       this.catupdatemsg=page.locator("//span[text()='Successfully updated the category']")


      this.Editacivetext= page.locator('#is_active div').filter({ hasText: 'Active' }).nth(1)


       
       


       //buyer side

       this.createdcatname=page.locator('((//div[@class="max-w-2xl  pt-4 pb-2 lg:max-w-none"])[last()]//p)[1]')
       this.createdcatnamesports=page.getByText('sports').first()
       this.createdcatlink=page.locator('(//div[@class="relative w-full h-full"])[last()]')
       this.majicatname=page.locator('((//div[@class="max-w-2xl  pt-4 pb-2 lg:max-w-none"])[last()]//p)[2]')
       this.nextedcatname=page.locator("//p[normalize-space()='NEWProtective equip']")
       this.doublenextedcatName=page.locator('(//div[@class="lg:text-start lg:w-full"])[last()]//p')



        
    //     this.catmenu="//span[contains(text(),'Categories')]"
    //     this.AddCategory="//span[normalize-space()='Add category']"
    //     this.Name = page.getByPlaceholder('Give this category a name')
    //    this.handle = page.getByPlaceholder('Custom handle')
    //     //this.Name=page.getByRole(input,{name:"name"})
    //    //this.handle=page.getByRole(input,{name:"handle"})
    //     this.saveCategory ="//span[normalize-space()='Save category']"
        

}

// async reloadcheck(){
//     await this.page.setJavaScriptEnabled(false);
// await this.page.reload({ timeout: 100000, waitUntil: 'load' });
// await this.page.setJavaScriptEnabled(true); 
// }
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
async catdeletevalidation(catelement,createdcat){
    await catelement.scrollIntoViewIfNeeded()
    await this.page.waitForTimeout(6000)
    const catname= await catelement.textContent()
    await expect(catname.trim()).not.toBe(createdcat);

}
async visibilityCheckTrue(text) {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await this.page.waitForTimeout(1000); 
    const textExists = await this.page.evaluate((text) => {
        return document.body.innerText.includes(text);
    },text);
  
    if (textExists === true) {
        console.log('Text is  visible and the value is true');
    } 
  }
  async visibilityCheckFalse(text) {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await this.page.waitForTimeout(1000); 
    const textExists = await this.page.evaluate((text) => {
        return document.body.innerText.includes(text);
    },text);
  
    if (textExists === false) {
        console.log('Text is not visible and the value is false');
    } 
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
async createNestedcategory(addcategoryplusbtn,categoryname,handlename){
    await addcategoryplusbtn.click()
    await this.Name.fill(categoryname);
    await this.handle.fill(handlename);
    await this.saveCategory.click();
}

async createdoubleNestedcategory(catexpand,addcategoryplusbtn,categoryname,handlename){
    await catexpand.click()
    await addcategoryplusbtn.click()
    await this.Name.fill(categoryname);
    await this.handle.fill(handlename);
    await this.saveCategory.click();
}

async deletecategory(moreoptBtns){
    await moreoptBtns.click();
    await this.page.waitForLoadState("networkidle")
    await this.deletecatBtn.click();
    }
    
async deleteNestedcategory(catexpand,moreoptBtn){
    await catexpand.click()
    await moreoptBtn.click();
    await this.page.waitForLoadState("networkidle")
    await this.deletecatBtn.click();
}
async deletedoubleNestedcategory(catexpand1,catexpand2,moreoptBtn){
    await catexpand1.click()
    await catexpand2.click()
    await moreoptBtn.click();
    await this.page.waitForLoadState("networkidle")
    await this.deletecatBtn.click();
}


async Editcategory(moreopt){
    await moreopt.click();
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
async Statusvisablitychange(moreopt,statusvisablityexpandbtn,statuschnage){
    await moreopt.click()
    await this.editcatBtn.click()
    await this.page.waitForTimeout(2000)
    await statusvisablityexpandbtn.click()
    await statuschnage.click()
    await this.page.waitForTimeout(2000)
    await this.saveCategory.click()
}

}

module.exports=Category;