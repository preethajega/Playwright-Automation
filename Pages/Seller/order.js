const { test, expect,page,waitForSelector} = require('@playwright/test');
class order {
    constructor(page) {
        this.page = page

        //shipping address order summary
        this.nameship=page.getByTestId('shipping-first-name-input')
        this.addressline1ship=page.locator('input[name="shipping_address\\.address_1"]')
        this.addressline2ship=page.locator('input[name="shipping_address\\.address_2"]')
        this.postalcodeship=page.getByTestId('shipping-postal-code-input')
        this.cityship=page.getByTestId('shipping-city-input')
        this.countryship=page.getByTestId('shipping-country-select')
        this.stateship=page.getByTestId('shipping-province-input')
        this.phoneship=page.getByTestId('shipping-phone-input')

        this.billshipsameaddresscheckbox=page.getByTestId('billing-address-checkbox')


        //Billing address order summary
        this.namebill=page.getByTestId('billing-first-name-input')
        this.addressline1bill=page.locator('input[name="billing_address\\.address_1"]')
        this.addressline2bill=page.locator('input[name="billing_address\\.address_2"]')
        this.postalcodebill=page.getByTestId('billing-postal-input')
        this.citybill=page.getByTestId('billing-city-input')
        this.countrybill=page.getByTestId('billing-country-select')
        this.statebill=page.getByTestId('billing-province-input')
        this.phonebill=page.getByTestId('billing-phone-input')


        
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


        //product card
        
        this.unitpriceorderfirst=page.locator('(//span[@data-testid="product-unit-price"])[1]')
        this.unitpriceorderlast=page.locator('(//span[@data-testid="product-unit-price"])[last()]')
        this.listpriceorderfirst=page.locator('(//span[@data-testid="product-price"])[1]')
        this.listpriceorderlast=page.locator('(//span[@data-testid="product-price"])[last()]')


        this.subtotal=page.locator('//span[@data-testid="cart-subtotal"]')
        this.shipping=page.locator('//span[@data-testid="cart-shipping"]')
        this.tax=page.locator('(//span[@data-testid="cart-taxes"])[1]')
        this.PlatformFee=page.locator('(//span[@data-testid="cart-taxes"])[last()]')
        this.grandtot=page.locator('//span[@data-testid="cart-total"]')

        this.discountorgiftcode=page.getByTestId('add-discount-button')
        this.discountapplybtn=page.getByTestId('discount-apply-button')
        this.discounterrormsg=page.locator('//div[@data-testid="discount-error-message"]//span')
        this.discountinputbox=page.getByTestId('discount-input')
        this.discremoved=page.getByTestId('remove-discount-button')
        this.discappliedafter=page.locator('//span[@data-testid="discount-code"]')

    }

 
}

module.exports=order;