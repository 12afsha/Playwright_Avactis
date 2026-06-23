export class WindowPage {

    constructor(page)
    {
        this.page = page;   
        this.newWindowButton = page.locator("a[href='/windows/new']");
        this.newWindowCheck = page.locator('h3');
    }
    async clickNewWindow()
    {
        // Listen for new page
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newWindowButton.click()
        ]);

        this.newPage = newPage;

        // Wait until new page fully loads
        await this.newPage.waitForLoadState();
    }

    async checkNewWindow()
    {
        return await this.newPage.locator('h3').textContent();
    }
       
}