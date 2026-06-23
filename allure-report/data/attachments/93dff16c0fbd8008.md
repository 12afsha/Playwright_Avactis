# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frameValidation.spec.js >> Validate the nested frame
- Location: tests\frameValidation.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "LEFT"
Received: ""
```

# Test source

```ts
  1  | import {test, expect} from '../fixtures/Base';
  2  | test("Validate the frame", async ({homePage, framePage}) => {
  3  |     await homePage.clickFrames();
  4  |     await framePage.clickIFrameLink();
  5  |     const text = await framePage.enterTextInFrameI("Hello World");
  6  |     expect(text).toBe("Your content goes here.");
  7  | });
  8  | test("Validate the nested frame", async ({homePage, framePage}) => {
  9  |     await homePage.clickFrames();
  10 |     await framePage.clickNestedFramesLink();
  11 |     const text=await framePage.enterTextInFrame();
> 12 |     expect(text).toBe("LEFT");
     |                  ^ Error: expect(received).toBe(expected) // Object.is equality
  13 | });
  14 | 
```