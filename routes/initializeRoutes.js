const exampleRoutes = require('./example');
const errorHandler = require('./errorHandler');
const logger = require('../logger');
const { API_VERSION } = require('../config');
const routePrefix = `/api/${API_VERSION}`;

function initializeRoutes(app){
    logger.info('Initializing Routes...');
    app.use(routePrefix, exampleRoutes);

    app.use(errorHandler);
    logger.info('Routes initialized.');
}

module.exports = initializeRoutes;