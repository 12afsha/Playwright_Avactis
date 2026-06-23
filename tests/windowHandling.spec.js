import {test, expect} from '../fixtures/Base';

test("Validate the new window", async ({homePage, windowPage}) => {
    await homePage.clickWindows();
    await windowPage.clickNewWindow();
    const text = await windowPage.checkNewWindow();
    expect(text).toBe("New Window");
});
