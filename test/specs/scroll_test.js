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

    //Scroll to video testimonial section
    it('Should scroll to One of a million section', async () => {        
        const one_million_survivors_ref = await browser.findElement('xpath',"(//div[@data-autoid='videoTestimonials:container'])[1]")
        const one_million_survivors_el = $(one_million_survivors_ref)
        await one_million_survivors_el.scrollIntoView({ block: 'nearest', inline: 'nearest' });  
        
        await browser.pause(5000)
        
    });

});