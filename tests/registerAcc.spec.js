import {test, expect} from '../fixtures/BaseTest';
test("Register an account", async ({myAccountPage}) => {
    await myAccountPage.clickMyAccount();
});
