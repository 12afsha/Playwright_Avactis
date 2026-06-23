export class MyAccountPage {
    constructor(page) 
        {
            this.page=page;
            this.myAccount=page.getByRole('link',{name:'My Account'});
            this.register=page.getByRole('button',{name:'Register'});

        }
        async navigate()
        {
            await this.page.goto("http://localhost/Avactis/");
        }
    async clickMyAccount()
    {
        await this.myAccount.click();
        await this.register.click();
    }
}