import {test, expect} from '../fixtures/Base';
test("Validate the frame", async ({homePage, framePage}) => {
    await homePage.clickFrames();
    await framePage.clickIFrameLink();
    const text = await framePage.enterTextInFrameI("Hello World");
    expect(text).toBe("Your content goes here.");
});
test("Validate the nested frame", async ({homePage, framePage}) => {
    await homePage.clickFrames();
    await framePage.clickNestedFramesLink();
    const text=await framePage.enterTextInFrame();
    expect(text).toBe("LEFT");
});
