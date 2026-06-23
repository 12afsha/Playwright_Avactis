import{test,expect} from '../fixtures/Base';

test('Form Authentication', async ({homePage, formAuthenticationPage }) => {
    await homePage.clickFormAuthentication();   
    await formAuthenticationPage.enterUsername('tomsmith', 'SuperSecretPassword!');
    const loginMessage = await formAuthenticationPage.checkLogin();
    expect(loginMessage).toContain('You logged into a secure area!');   

});
test('Form Authentication with invalid credentials', async ({homePage, formAuthenticationPage }) => {
    await homePage.clickFormAuthentication();   
    await formAuthenticationPage.enterUsername('invalidUser', 'invalidPassword');
    const errorMessage = await formAuthenticationPage.checkErrorMessage();
    expect(errorMessage).toContain('Your username is invalid!');        
});     