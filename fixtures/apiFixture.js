import { test as base, expect } from '@playwright/test';

import { apiClient } from '../api/apiClient';

export const test = base.extend({

    APIClient: async ({ request }, use) => {

        const APIClient = new apiClient(
            request,
            'https://reqres.in'
        );

        await use(APIClient);
    }

});

export { expect };