export class FormAuthenticationPage {

    constructor(page)
    {
        this.page = page;   
        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.loginCheck = page.locator('#flash');
        this.errorMessage = page.locator('#flash');
    }

    async enterUsername(username, password)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);   
        await this.loginButton.click();  
        
    }  
    async checkLogin()
    {
        return await this.loginCheck.textContent();
    }
    async checkErrorMessage()
    {
        return await this.errorMessage.textContent();
    }
}