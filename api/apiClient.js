export class apiClient {
    constructor(request, baseURL) {
        this.request = request;     
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        const response = await this.request.get(endpoint);
        return response;
    }
    async post(endpoint, data) {
        const response = await this.request.post(`${this.baseURL}${endpoint}`, {
            data: data
        });
        return response;
    }
    async delete(endpoint) {
        const response = await this.request.delete(`${this.baseURL}${endpoint}`);
        return response;
    }
}