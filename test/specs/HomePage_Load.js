const assert = require("assert");
const webdriverio = require('webdriverio');
 
describe("VolvoCars Demo Test", () => {

    // Verify page title
    it("VolvoCars Demo TestCase", async() => {
        await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");        
        const page_title = await browser.getTitle();
        const page_title_template = "A million more | Volvo Cars - International";        
        assert.strictEqual(page_title, page_title_template);   
        browser.pause(2000)     
    });


    // Cookie pop-up test    
    it('should get header text from home page', async () => {        
        const cookies_popup = await browser.findElement('xpath', "//button[@id='onetrust-accept-btn-handler']");
        const cookie_element = await $(cookies_popup)
        await cookie_element.click()
        browser.pause(2000)
    });
    
    // Verify header text on the home page
    it('should get header text from home page', async () => {        
        const hedertextRef = await browser.findElement('xpath', "//section[@data-autoid='ModelIntro']/h2");
        const headertextEl = await $(hedertextRef);
        const headertext =  await headertextEl.getText();
        // using a different headertext template so that the test fails
        const headertext_template = "Ideas that change the world are usually the most controversial."
        assert.strictEqual(headertext, headertext_template);    
        browser.pause(2000)      
    });
});