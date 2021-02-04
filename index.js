const initializeModels = require('./models/initializeModels');
const initializeServices = require('./services/initializeServices');
const initializeControllers = require('./controllers/initializeControllers');
initializeControllers();
initializeServices();
initializeModels();


const initializeRoutes = require('./routes/initializeRoutes');

const {
    initializeStaticAssetServing,
    initializeStandardMiddleware,
    initializeSwaggerUi
} = require('./initialization');


const express = require('express');
const app = express();



initializeStaticAssetServing(app);

initializeSwaggerUi(app);

initializeStandardMiddleware(app);


initializeRoutes(app);

const standardLogger = require('./logger');
const {SERVER_PORT} = require('./config');
app.listen(SERVER_PORT, () => standardLogger.info(`Listening on ${SERVER_PORT}`));

app.on('uncaughtException', (error) => {
    standardLogger.error(error);
    process.exit(1);
});
