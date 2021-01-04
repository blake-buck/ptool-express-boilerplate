const {SERVER_PORT, API_VERSION, FRONTEND_DIRECTORY_PATH} = require('./config');
const exampleRoutes = require('./routes/example');

const standardLogger = require('./logger');

const cors = require('cors');
const helmet = require('helmet');

const express = require('express');
const { standardRateLimit } = require('./middleware/middleware');

const app = express();


app.use(express.static(FRONTEND_DIRECTORY_PATH))

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(standardRateLimit);

app.use(`/api/${API_VERSION}`, (req, res, next) => next());
app.use(exampleRoutes);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));

process.on('uncaughtException', (error) => {
    standardLogger.error(error);
    process.exit(1);
});