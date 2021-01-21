const exampleRoutes = require('./example');
const errorHandler = require('./errorHandler');
const logger = require('../logger');

function initializeRoutes(app){
    logger.info('Initializing Routes...');
    app.use(exampleRoutes);

    app.use(errorHandler);
    logger.info('Routes initialized.');
}

module.exports = initializeRoutes;