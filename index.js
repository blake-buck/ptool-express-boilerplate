const express = require('express');

const {SERVER_PORT} = require('./config');
const standardLogger = require('./logger');
const {
    initializeStaticAssetServing,
    initializeStandardMiddleware,
    initializeApiVersion,
    initializeSwaggerUi,
    initializeSqlite
} = require('./initialization');
const initializeModels = require('./models/initializeModels');
const initializeServices = require('./services/initializeServices');
const initializeControllers = require('./controllers/initializeControllers');


const app = express();

// register dependencies with injection container
initializeSqlite();
initializeModels();
initializeServices();
initializeControllers();

initializeStaticAssetServing(app);

initializeSwaggerUi(app);

initializeStandardMiddleware(app);

initializeApiVersion(app);

const initializeRoutes = require('./routes/routes');
initializeRoutes(app);

app.listen(SERVER_PORT, () => standardLogger.info(`Listening on ${SERVER_PORT}`));

app.on('uncaughtException', (error) => {
    standardLogger.error(error);
    process.exit(1);
});