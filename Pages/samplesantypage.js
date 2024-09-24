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