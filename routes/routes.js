const exampleRoutes = require('./example');

function initializeRoutes(app){
    app.use(exampleRoutes);
}

module.exports = initializeRoutes;