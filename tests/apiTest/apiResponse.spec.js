import { test, expect } from '../../fixtures/apiFixture';

test('GET Users API', async ({ APIClient }) => {

    const response = await APIClient.get('https://automationexercise.com/api/productsList');

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);
});