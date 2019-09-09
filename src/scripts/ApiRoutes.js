class ApiRoutes {
    constructor() {
        const domain = 'https://api.giphy.com/v1/gifs';

        // Em caso de mais rotas adicionar aqui para 
        //  que fique facil a utilização
        this.search = `${domain}/search`;
    }
}

export default new ApiRoutes();