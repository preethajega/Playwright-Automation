const { test, expect,page,waitForSelector} = require('@playwright/test');
const {getNextIncrement} = require("../Pages/counter")

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
        this.firstsubcategory=page.locator('(//div[@class="relative w-full h-full"]//img)[2]')
        this.plppdpback=page.locator("//div[contains(@class,'mr-1 flex w-12')]//a//*[name()='svg']")
        this.firstproduct=page.locator('(//div[@class="h-32 w-30 relative rounded-xl border "])[1]')
        this.plpaddsinglefirst=page.locator("(//button[text()='Add'])[1]")
        this.pdpaddsinglefirst=page.locator("//button[text()='Add to Cart']")
        this.Homesearchbar=page.getByPlaceholder('Search for Products')
        this.logoutvalid=page.getByTestId('login-page')
        //setting page
        this.settingicon=page.locator('a').first()
        this.Namesettings=page.locator("//p[@class='font-bold text-lg']")
        this.Emailsettings=page.locator('//p[@class="text-gray-500 text-sm"][1]')
        this.mobnumsettings=page.locator('//p[@class="text-gray-500 text-sm"][2]')
        
        // siginup page 
        this.signupusername=page.getByTestId('first-name-input')
        this.signupemail=page.getByTestId('email-input')
        this.signupphonceno=page.getByTestId('phone-input')
        this.signuppassword=page.getByTestId('password-input')
        this.register=page.getByTestId('register-button')
        this.signin=page.getByRole('button', { name: 'Sign in' })
        this.signuperrormsg=page.getByTestId('register-error')

        //Address page
        this.fullname=page.getByTestId('shipping-first-name-input')
        this.Addressline1=page.locator('input[name="address_1"]')
        this.Addressline2=page.locator('input[name="address_2"]')
        this.company=page.locator("//input[@name='company']")
        this.city=page.getByTestId('shipping-city-input')
        this.postalcode=page.getByTestId('shipping-postal-code-input')
        this.state=page.getByTestId('shipping-province-input')
        this.phoneno=page.getByTestId('shipping-phone-input')
        this.Addressavebtn=page.getByTestId('Add-Address')

        //AddAddresshome page 
        this.addresEdit=page.locator('(//button[@data-testid="edit-address-button"])[last()]')
        this.addresclose=page.locator('div').filter({ hasText: /^Select Address$/ }).locator('svg')
        this.editaddressclose=page.getByLabel('Edit Address').locator('svg')
        this.selectaddresbtn2=page.locator("//*[name()='path' and contains(@fill-rule,'evenodd')]")
        
        this.selectaddresbtn=page.locator('div').filter({ hasText: /^Select Your Address$/ }).getByRole('img')
        this.addAddress=page.getByRole('button', { name: 'Add New Address' })
        this.nameaddress=page.getByPlaceholder('Name')
        this.AddressLine1add=page.getByPlaceholder('Address Line 1')
        this.AddressLine2add=page.getByPlaceholder('Address Line 2')
        this.Cityaddress=page.getByPlaceholder('City')
        this.PostalCodeaddress=page.getByPlaceholder('Postal Code')
        this.PhoneNumberaddress=page.getByPlaceholder('Phone Number')
        this.saveaddressbtn=page.getByRole('button', { name: 'Save Address' })


        this.chooseaddresfirst=page.locator('(//div[@class="overflow-y-auto"]/div/li)[1]')
        this.chooseaddreslast=page.locator('(//div[@class="overflow-y-auto"]/div/li)[last()]')
        this.selectedaddressshow=page.locator("//p[contains(@class,'font-semibold text-xs text-baseContrast')]")

        //products page
        this.addtocartbtn=page.getByRole('button', { name: 'Add to Cart' })
        this.addbtn=page.locator("(//button[normalize-space()='Add'])[1]")
        this.addbtnsearch=page.getByRole('button', { name: 'Add' })
        this.deceracebtnfirst=page.locator("(//body//main//button//span[1]//*[name()='svg'])[1]")
        this.increasebtnfirst=page.locator("(//body//main//span[3]//*[name()='svg'])[1]")
        this.rasiproducttext=page.locator("//a[normalize-space()='Rassi Maida 500G']")
        this.productnamefirstPLP=page.locator('//h2[@class="text-sm font-semibold text-black-400"]//a')
        this.productnamefirstplp=page.locator("//div[contains(@class,'grid grid-cols-2 gap-x-2 gap-y-4')]//div[1]//div[1]//div[2]//div[1]//h2[1]")
        this.productnamelastplp=page.locator("//div[contains(@class,'grid grid-cols-2 gap-x-2 gap-y-4')]//div[last()]//div[1]//div[2]//div[1]//h2[1]")
        this.addedqtyfirst=page.locator("(//span[@class='text-base text-baseContrast m-1'])[1]")
        this.addedqtylast=page.locator("(//span[@class='text-base text-baseContrast m-1'])[last()]")

        
        //order page
        this.addreseditorder=page.getByTestId('edit-address-button')
        this.deliveryeditorder=page.getByTestId('edit-delivery-button')
        this.paymenteditorder=page.getByTestId('edit-payment-button')
        this.continuedeliverybtn=page.getByTestId('submit-address-button')
        this.continuetopaymnet=page.getByTestId('submit-delivery-option-button')
        this.continuetoreview= page.getByTestId('submit-payment-button')
        this.adddiscount=page.getByTestId('add-discount-button')
        this.appydiscbtn=page.getByTestId('discount-apply-button')
        this.discerrmsg=page.getByText('Gift card with code: was not')
        this.placeorderbtn=page.locator("(//button[text()='Place Order'])[last()]")
        this.gotohomebtn=page.getByRole('button', { name: 'Go to Home' })
        this.orderpage=page.getByRole('link', { name: 'Orders' })
        this.orderpagetxt=page.getByText('Orders')
        this.orderpageback=page.getByRole('link').first()

        this.productnamefirstorder=page.locator('//tr[@data-testid="product-row"][1]//td[2]//p[1]')
        this.productnamelastorder=page.locator('//tr[@data-testid="product-row"][last()]//td[2]//p[1]')

        this.carttextorder=page.locator("//h2[normalize-space()='In your Cart']")
        this.carttotal=page.locator("//span[normalize-space()='Total']")





        //cart page 
        this.viewcart=page.getByRole('link', { name: 'View Cart' })
        this.checkoutbtn=page.getByRole('button', { name: 'Go to checkout' })
        this.cartbackbtn=page.locator("//span[text()='Back']")
        this.productnamecartfirst=page.locator('(//p[@class="text-medium w-auto"])[1]')
        this.productnamecartlast=page.locator('(//p[@class="text-medium w-auto"])[last()]')
        this.cartitemfirst=page.locator('//div[contains(@class,"sm:mb-5 md:mb-2  px-2")]//div[@class="mb-2"][1]')
        this.cartclosebtn=page.getByRole('link').first()
        this.exploreproductcart=page.getByRole('link', { name: 'Explore Products' })
        
        //sucesspage
        this.ordersucessmsg=page.locator('(//h1//span)[2]')
        this.ordersummarytxt=page.locator("//p[contains(@class,'fg-base flex items-center gap-x-2 ml-3')]")

    }

    async removeProduct(){
        await this.deceracebtnfirst.click()

    }

    async viewcarts(){
        await this.viewcart.click()
        
    }
    async isProductInCart(){
        await this.cartitemfirst.click()
        try {
            console.log('entered in isproductincart try ...');
            await this.page.waitForSelector(this.cartitemfirst, { state: 'attached', timeout: 1000 });
            //await this.deceracebtnfirst.waitForSelector();
            return true;
        } 
        catch (e) {
            console.log('entered in isproductincart catch ...');
            return false;
        }
        
    }
    async removeProductUntilGone() {
        while (await this.isProductInCart()) {
          console.log('Product found in cart, removing...');
          await this.removeProduct();
    
          // Optionally wait for cart to update
          await this.page.waitForTimeout(2000); // Wait 2 seconds before checking again
    
          // Refresh or check for dynamic updates
          await this.reload();
        }
        console.log('Product is no longer in the cart.');
      }

      async cartclearverify(cartemptytxt){
        await this.removeProduct()
        await this.reload()
        await this.page.waitForTimeout(5000)
        const cartcleartext= await this.exploreproductcart.textContent()
        await expect(cartcleartext.trim()).toBe(cartemptytxt);
      }
      async productsearchadd(productname){
        await this.Homesearchbar.click()
        await this.Homesearchbar.fill(productname)
        await this.addbtnsearch.click()
        await this.Homesearchbar.clear()
      }

      async placeorder(){
        const productnamecarttxt1 = await this.productnamecartfirst.textContent()
        const  productnamecarttxt2 = await this.productnamecartlast.textContent()
        await this.checkoutbtn.click()
        await this.page.waitForTimeout(5000)
        await this.reload()
        await this.page.waitForTimeout(5000)
        await this.carttotal.scrollIntoViewIfNeeded()
        await this.page.waitForTimeout(5000)
        const productnameordertxt1 = await this.productnamefirstorder.textContent()
        await this.page.waitForTimeout(2000)
        const  productnameordertxt2 = await this.productnamelastorder.textContent()

        // await expect(productnamecarttxt1.trim()).toBe(productnameordertxt1.trim());
        // await expect(productnamecarttxt2.trim()).toBe(productnameordertxt2.trim());
        await this.placeorderbtn.click()
        await this.page.waitForTimeout(5000)

      }

      async orderhistory(){
        await this.settingicon.click()
        await this.orderpage.click()
        await this.page.waitForTimeout(5000)
      }

      async placeorderverify(ordersucesstext){
        const ordersucesstxt =await this.ordersucessmsg.textContent()
        await expect(ordersucesstxt.trim()).toBe(ordersucesstext)
        

      }


    async addtocartwithsearch(productname){
        await this.Homesearchbar.click()
        await this.Homesearchbar.fill(productname)
        await this.addbtnsearch.click()
        const productnametxt = await this.productnamefirstPLP.textContent()
        const  addedqty = await this.addedqtyfirst.textContent()
        await this.viewcart.click()
        await this.page.waitForTimeout(5000)



        const productnametxtcart = await this.productnamecartfirst.textContent()
        const  addedqtycart = await this.addedqtyfirst.textContent()

        await expect(productnametxt.trim()).toBe(productnametxtcart.trim());
        await expect(addedqty.trim()).toBe(addedqtycart.trim());
        
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
    async AddAddressSiginup (addressline1,addressline2,CompanyName,City,Postalcode,State){
        await this.Addressline1.fill(addressline1)
        await this.Addressline2.fill(addressline2)
        await this.company.fill(CompanyName)
        await this.city.fill(City)
        await this.postalcode.fill(Postalcode)
        await this.state.fill(State)
        await this.Addressavebtn.click()
    }
    async AddAddressHome(Fullname,addressline1,addressline2,City,Postalcode,Phonenumb){
        await this.selectaddresbtn.click()
        await this.addAddress.click()
        await this.nameaddress.fill(Fullname)
        await this.AddressLine1add.fill(addressline1)
        await this.AddressLine2add.fill(addressline2)
        await this.Cityaddress.fill(City)
        await this.PostalCodeaddress.fill(Postalcode)
        await this.PhoneNumberaddress.fill(Phonenumb)
        await this.saveaddressbtn.click()

    }



    async addressverify(expectedNameText,expectedAddressline1Text,expectedaddressline2Text,expectedcityText,expectedPostalcodeText,expectedPhoneNumText){

        await this.selectaddresbtn.click()
        await this.page.waitForLoadState("networkidle")
        await this.addresEdit.scrollIntoViewIfNeeded()
        await this.addresEdit.click()
        await this.page.waitForLoadState("networkidle")
        await this.page.waitForTimeout(5000);


        await this.nameaddress.waitFor({ state: 'visible' });
        await this.nameaddress.click()
        await this.page.waitForTimeout(5000);
        
        await this.nameaddress.waitFor({ state: 'visible' });
        const Name = await this.nameaddress.textContent()
        console.log('Name Address:', Name)
        await this.page.waitForLoadState("networkidle")
        const addressline1 = await this.AddressLine1add.textContent()
        console.log('Name Address:', addressline1)
        await this.page.waitForLoadState("networkidle")
        const addressline2 = await this.AddressLine2add.textContent()
        console.log('Name Address:', addressline2)
        await this.page.waitForLoadState("networkidle")
        const city = await this.Cityaddress.textContent()
        console.log('Name Address:', city)
        await this.page.waitForLoadState("networkidle")
        const postalcode = await this.PostalCodeaddress.textContent()
        console.log('Name Address:', postalcode)
        await this.page.waitForLoadState("networkidle")
        const phonenum = await this.PhoneNumberaddress.textContent()
        console.log('Name Address:', phonenum)
        await this.page.waitForTimeout(5000);

        await expect(Name.trim()).toBe(expectedNameText);
        await expect(addressline1.trim()).toBe(expectedAddressline1Text);
        await expect(addressline2.trim()).toBe(expectedaddressline2Text);
        await expect(city.trim()).toBe(expectedcityText);
        await expect(postalcode.trim()).toBe(expectedPostalcodeText);
        await expect(phonenum.trim()).toBe(expectedPhoneNumText);

        await this.editaddressclose.click()
        await this.addresclose.click()
    }

    async chooseaddress(){
        await this.selectaddresbtn.click()
        await this.chooseaddreslast.scrollIntoViewIfNeeded()
        await this.chooseaddresfirst.click()
    }
    async chooseAddressVerify(){
        
        const PreviousAddress = await this.selectedaddressshow.textContent()
        await this.page.waitForTimeout(3000);
        await this.selectaddresbtn2.click({ force: true });
        await this.chooseaddreslast.scrollIntoViewIfNeeded()
        await this.chooseaddreslast.click()
        const currectAddress = await this.selectedaddressshow.textContent()
        await expect(PreviousAddress.trim()).not.toBe(currectAddress.trim());
        
    }
    async signupverify(expectedNameText,expectedEmailText,expectedMobNumText){

        await this.settingicon.click()
        const Name = await this.Namesettings.textContent()
        const Email = await this.Emailsettings.textContent()
        const Mobnum = await this.mobnumsettings.textContent()

        await expect(Name.trim()).toBe(expectedNameText);
        await expect(Email.trim()).toBe(expectedEmailText);
        await expect(Mobnum.trim()).toBe(expectedMobNumText);
    
    }

    async incerementcounter(addressline1,addressline2,Phonenumb){
        const counter = await getNextIncrement();
        addressline1 =`RR Nagar${counter}`;
        addressline2=`RR Main Road${counter}`;
        Phonenumb=`987654321${counter}`;
    }

    async signupfn(username,email,phoneno,pwd){
        await this.signup.click();
        await this.signupusername.fill(username)
        await this.signupemail.fill(email)
        await this.signupphonceno.fill(phoneno)
        await this.signuppassword.fill(pwd)
        await this.register.click()
        await this.page.waitForLoadState("networkidle")

    }
    async signupValidation(errormsg){
        await expect(errormsg).toHaveText(errormsg)
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
        await this.plppdpback.click();

     }

    



}

module.exports=santy;