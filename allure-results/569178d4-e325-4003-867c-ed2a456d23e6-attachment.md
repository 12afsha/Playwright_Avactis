# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTest\apiResponse.spec.js >> GET Users API
- Location: tests\apiTest\apiResponse.spec.js:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/apiFixture';
  2  | 
  3  | test('GET Users API', async ({ APIClient }) => {
  4  | 
  5  |     const response = await APIClient.get('https://reqres.in/api/test-suite/collections/users/records');
  6  | 
> 7  |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  8  | 
  9  |     const body = await response.json();
  10 | 
  11 |     console.log(body);
  12 | });
```