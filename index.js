const express = require('express');

const {SERVER_PORT} = require('./config');
const standardLogger = require('./logger');
const initializeRoutes = require('./routes/routes');
const {
    initializeStaticAssetServing,
    initializeStandardMiddleware,
    initializeApiVersion
} = require('./initialization');


const app = express();

initializeStaticAssetServing(app);

initializeStandardMiddleware(app);

initializeApiVersion(app);

initializeRoutes(app);

app.listen(SERVER_PORT, () => standardLogger.info(`Listening on ${SERVER_PORT}`));

process.on('uncaughtException', (error) => {
    standardLogger.error(error);
    process.exit(1);
});