const exampleRoutes = require('./example');
const errorHandler = require('./errorHandler');

function initializeRoutes(app){
    app.use(exampleRoutes);

    app.use(errorHandler);
}

module.exports = initializeRoutes;