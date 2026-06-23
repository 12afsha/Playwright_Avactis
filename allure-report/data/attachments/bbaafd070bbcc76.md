# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerAcc.spec.js >> Register an account
- Location: tests\registerAcc.spec.js:2:5

# Error details

```
Error: page.goto: Could not connect to server
Call log:
  - navigating to "http://localhost/Avactis/", waiting until "load"

```

# Test source

```ts
  1  | export class MyAccountPage {
  2  |     constructor(page) 
  3  |         {
  4  |             this.page=page;
  5  |             this.myAccount=page.getByRole('link',{name:'My Account'});
  6  |             this.register=page.getByRole('button',{name:'Register'});
  7  | 
  8  |         }
  9  |         async navigate()
  10 |         {
> 11 |             await this.page.goto("http://localhost/Avactis/");
     |                             ^ Error: page.goto: Could not connect to server
  12 |         }
  13 |     async clickMyAccount()
  14 |     {
  15 |         await this.myAccount.click();
  16 |         await this.register.click();
  17 |     }
  18 | }
```