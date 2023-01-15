const assert = require("assert");
const webdriverio = require('webdriverio');
 
describe("VolvoCars Demo Test", () => {

    // Accept cookie popup
    it("Should accept cookie popup", async() => {
        await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");        
        const cookies_popup = await browser.findElement('xpath', "//button[@id='onetrust-accept-btn-handler']");
        const cookie_element = await $(cookies_popup)
        await cookie_element.click()
         
        browser.pause(2000)     
    });

    it('Play real car crash survivors videos', async () => {        
        
        const menu_el = $('#sitenav-sidenav-toggle')
        const menutext =  await menu_el.getText();
        
        
        await menu_el.click()        
        browser.pause(500)

        const buy_link_ref = await browser.findElement('xpath', "(//div[@class='_SN-i']/button/em)[1]")
        const buy_link_el = await $(buy_link_ref)
        const buy_text = await buy_link_el.getText();
 
        browser.pause(3000)
        
        //await buy_text.click()

    });
    
    
    

    
});