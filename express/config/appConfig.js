let appConfig = {};

appConfig.port=3000;

appConfig.env="dev";
appConfig.db = {
    uri: 'mongodb+srv://ajaysree25:Vu5NRgYb4bqy76gg@cluster0-1vpeq.mongodb.net/IndianRecipe?retryWrites=true&w=majority'
}
appConfig.apiVersion = '/api/v1';

module.exports = {
    port:appConfig.port,

    environment:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
}//end of module exports