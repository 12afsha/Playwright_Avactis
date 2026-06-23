export class RegisterPage {
    constructor(page)
    {
        this.page=page;
        this.email=page.locator('input[name="customer_info[Customer][Email]"]');
        this.password=page.locator('input[name="customer_info[Customer][Password]"]');

    }