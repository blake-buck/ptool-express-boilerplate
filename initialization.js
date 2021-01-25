const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./open-api-specification.json');

const {API_VERSION, FRONTEND_DIRECTORY_PATH} = require('./config');

const dependencyInjector = require('./dependency-injector');
const logger = require('./logger');

function initializeSwaggerUi(app){
    logger.info('Initializing Swagger UI...');
    app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    logger.info('Swagger UI initialized.');
}

function initializeStaticAssetServing(app){
    logger.info('Initializing static asset serving...');
    app.use(express.static(FRONTEND_DIRECTORY_PATH));
    logger.info('static asset serving initialized.');
}

function initializeStandardMiddleware(app){
    logger.info('Initializing standard middleware...');
    const cors = require('cors');
    const helmet = require('helmet');
    const { standardRateLimit } = require('./middleware/middleware');

    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    // app.use(standardRateLimit);
    logger.info('standard middleware initialized.');
}

function initializeApiVersion(app){
    app.use(`/api/${API_VERSION}`, (req, res, next) => next());
}

module.exports = {
    initializeStaticAssetServing,
    initializeStandardMiddleware,
    initializeApiVersion,
    initializeSwaggerUi
}