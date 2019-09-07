class ApiRoutes {
    constructor() {
        const domain = 'https://api.giphy.com/v1/gifs';

        this.search = `${domain}/search`;
    }
}

export default new ApiRoutes();