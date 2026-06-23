export class FramePage {

    constructor(page)
    {
        this.page = page;

        this.iFrameLink = page.getByRole('link', { name: 'iFrame' });
        this.nestedFramesLink = page.getByRole('link', { name: 'Nested Frames' });
        this.topFrame=page.frameLocator('frame[name="frame-top"]');
        this.leftFrame = page
    .frameLocator('frame[name="frame-top"]')
    .frameLocator('frame[name="frame-left"]');

    }

    async clickIFrameLink()
    {
        await this.iFrameLink.click();
    }
    async clickNestedFramesLink()
    {
        await this.nestedFramesLink.click();
 
    }
    async enterTextInFrameI()
    {
        const iFrame = this.page.frameLocator('#mce_0_ifr');
        return await iFrame.locator('body').textContent();
    }
    async  enterTextInFrame()
    {
const text = await this.leftFrame
        .locator('body')
        .textContent();

    return text.trim();    }
}