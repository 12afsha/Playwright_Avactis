import { HomePage } from '../pages/HomePage';
import { FramePage } from '../pages/FramePage';
import { FormAuthenticationPage } from '../pages/FormAuthenticationPage';
import { WindowPage } from '../pages/WindowPage';
import {test as base,expect} from '@playwright/test';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await use(homePage);
    },
    framePage: async ({ page }, use) => {
        const framePage = new FramePage(page);
        await use(framePage);
    },
    formAuthenticationPage: async ({ page }, use) => {
        const formAuthenticationPage = new FormAuthenticationPage(page);
        await use(formAuthenticationPage);
    },
    windowPage: async ({ page }, use) => {
        const windowPage = new WindowPage(page);
        await use(windowPage);
    }       

});
export { expect };