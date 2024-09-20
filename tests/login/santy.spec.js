const { test, expect,page ,waitForSelector} = require('@playwright/test');
const santylogin=require('../../Pages/samplesantypage')

test.describe('santy Test', () => {
    

    test('login with buyer', async ({page}) => {
        let santy = new santylogin(page)
        test.setTimeout(150000);
        await santy.goto('/auth')
        await santy.login('preetha@mailto.plus','Admin@123')
        await page.waitForTimeout(3000)
        await santy.reload()
        await page.waitForTimeout(3000)

        await santy.plppage()
        await santy.PDPpage()
        
    

        await santy.logout()


        
    });
});

