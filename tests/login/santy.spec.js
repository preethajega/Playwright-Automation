const { test, expect,page ,waitForSelector} = require('@playwright/test');
const santylogin=require('../../Pages/samplesantypage')
const santyip = require('../../input/santy')
const {getNextIncrement} = require("../../Pages/counter")

test.describe('santy Test', () => {
    
    let santy

    test('Verify the Existing buyer is able to login successfully with the email', async ({page}) => {
        santy = new santylogin(page)
        test.setTimeout(150000);
        await santy.goto('/auth')
        await santy.login('preetha@mailto.plus','Admin@123')
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await expect(santy.Homesearchbar).toBeVisible();
        
    });
    test('Verify the Home Screen,Product List page,Product detail pages post successfull login', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login('preetha@mailto.plus','Admin@123')
        await page.waitForTimeout(3000)
        await santy.reload()
        await santy.plppage()
        await page.waitForTimeout(3000)
        await santy.PDPpage()

    });

    test('Verify the user is able to logout from the application successfully', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login('preetha@mailto.plus','Admin@123')
        await page.waitForTimeout(3000)
        await santy.reload()
        await santy.logout()
        await expect(santy.logoutvalid).toBeVisible();

    });

    test('verifying Signup with new user with Email into the application successfully', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')

        const counter = await getNextIncrement();
        console.log("Counter value:", counter);
    
        const suserName=`Admin${counter}`;
        const sEmail=`admin${counter}@mailto.plus`;
        const  sMobileno=`987654321${counter}`;

        await santy.signupfn(suserName,sEmail,sMobileno,santyip.password)
       

        await santy.AddAddressSiginup(santyip.addressline1,santyip.addressline2,santyip.company,santyip.city,santyip.postalcode,santyip.state)

        await page.waitForTimeout(3000)
        await santy.reload()

        await santy.signupverify(suserName,sEmail,sMobileno)


    });


    test('Verify the user is able to add new delivery address successfully', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login('preetha@mailto.plus','Admin@123')
        await page.waitForTimeout(3000)
        await santy.reload()

        await santy.AddAddressHome(santyip.Name,santyip.addressline1,santyip.addressline2,santyip.city,santyip.postalcode,santyip.Phonenumber)
        await page.waitForTimeout(3000)
        // await santy.addressverify(santyip.Name,santyip.addressline1,santyip.addressline2,santyip.city,santyip.postalcode,santyip.Phonenumber)


    });

    test('verify Signup with new user with Email into the application successfully', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login('preetha@mailto.plus','Admin@123')
        await page.waitForTimeout(3000)
        await santy.reload()
        await santy.chooseaddress()
        await santy.reload()
        await santy.chooseAddressVerify()


    });
    test('Verify the selected products are available in Cart', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username2,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        // await santy.viewcarts()
        // await santy.removeProductUntilGone()
        await santy.addtocartwithsearch(santyip.productname)
        await santy.removeProduct()

    });

    test('Verify the products are removal from Cart, also clean the cart and verify the default page is displayed', async ({page}) => { 
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username2,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.addtocartwithsearch(santyip.productname1)
        await santy.cartclearverify(santyip.cartemptytxt)


    });

    test('Verify by adding products to cart and create an order successfuly', async ({page}) => { 
        test.setTimeout(150000);
        santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.productsearchadd(santyip.productname)
        await page.waitForTimeout(2000)
        await santy.productsearchadd(santyip.productname1)
        await page.waitForTimeout(2000)
        await santy.viewcarts()
        await page.waitForTimeout(5000)
        await santy.placeorder()
        await page.waitForTimeout(5000)
        await santy.placeorderverify(santyip.ordersucesstext)




    });

test('Verify the user is able to view the order histroy', async ({page}) => { 
    santy = new santylogin(page)
        await santy.goto('/auth')
        await santy.login(santyip.username1,santyip.password)
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)
        await santy.orderhistory()
        const currentURL = page.url();
        expect(currentURL).toContain('/orders')
});
    



});

