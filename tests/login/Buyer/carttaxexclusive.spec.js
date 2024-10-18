const { test, expect,page ,waitForSelector} = require('@playwright/test');
const LoginPage = require("../../../Pages/Seller/SellerLoginpage ")
const cartPage = require("../../../Pages/Buyer/cart")
const Buyerloginpage = require("../../../Pages/loginpage")
const cartip=require("../../../input/Buyer/cartip")
const santyip = require('../../../input/santy')
const santylogin=require('../../../Pages/samplesantypage')
const {getNextIncrement} = require("../../../Pages/counter")
const discPage = require("../../../Pages/Seller/discount")
const discIp = require("../../../Pages/Seller/discount")
const settingspage = require("../../../Pages/Seller/settings")
const settingsIp = require("../../../input/Seller/settings")

test.describe('Cart TaxExclusive ' , () =>{

    test('validate that we can able Navigate to checkout without addding any discount coupon',async({page})=>{

    });


    test('validate that we can able Navigate to checkout with addding any discount coupon ',async({page})=>{

    });


    test('hat we can able to Navigate to checkout with with the pricing Product',async({page})=>{

    });


    test('validate that we can able to Navigate to Checkout with TaxExclisive Products',async({page})=>{

    });


    test('Validate tax amount is excluded in linewise total when tax is not mapped with product',async({page})=>{

    });


    // test('Validate tax amount is excluded in linewise total when tax is not mapped with product',async({page})=>{

    // });


    // test('Validate tax amount is excluded in linewise total when tax is not mapped with product',async({page})=>{

    // });



    // test('Validate tax amount is excluded in linewise total when tax is not mapped with product',async({page})=>{

    // });


});
