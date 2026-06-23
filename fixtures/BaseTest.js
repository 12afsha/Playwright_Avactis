import { MyAccountPage } from "../pages/MyAccountPage";
import { test as base, expect } from "@playwright/test";

export const test = base.extend({
    myAccountPage: async ({ page }, use) => {
        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.navigate();
        await use(myAccountPage);
    }       
});
export  {  expect };

