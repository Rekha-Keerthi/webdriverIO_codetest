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

    it('Watch the story video', async () => {
        
        const watch_video_ref = await browser.findElement('xpath', "//div[@class='a dj']/button/span");
        const  watch_video_element = await $(watch_video_ref)
        await watch_video_element.click()    
        await browser.setTimeout({ 'script': 60000 })
        await browser.executeAsync((done) => {
            console.log('this should not fail')        
        })    
        setTimeout(done, 59)
    });

});