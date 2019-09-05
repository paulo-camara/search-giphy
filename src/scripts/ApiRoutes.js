class ApiRoutes {
    constructor() {
        const domain = 'https://api.giphy.com/v1/gifs/search';

        this.search = `${domain}/search`;
    }
}

export default new ApiRoutes();