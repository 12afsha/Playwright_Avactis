export class HomePage {

 constructor(page)
    {
        this.page = page;

        this.framesLink = page.locator("a[href='/frames']");
        this.formAuthenticationLink = page.locator("a[href='/login']");
this.windowsLink = page.locator("a[href='/windows']");   

 }

    async navigate()
    {
        await this.page.goto("https://the-internet.herokuapp.com/");
    }

    async clickFrames()
    {
        await this.framesLink.click();
    }

    async clickFormAuthentication()
    {
        await this.formAuthenticationLink.click();
    }
    async clickWindows()
    {
        await this.windowsLink.click();
    }
}