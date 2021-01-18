const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./open-api-specification.json');

const {API_VERSION, FRONTEND_DIRECTORY_PATH} = require('./config');
const { standardRateLimit } = require('./middleware/middleware');

const logger = require('./logger');

function initializeSwaggerUi(app){
    app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

function initializeStaticAssetServing(app){
    app.use(express.static(FRONTEND_DIRECTORY_PATH));
}

function initializeStandardMiddleware(app){
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    // app.use(standardRateLimit);
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
const sqlite3 = require('sqlite3');
const {DATABASE_FILE} = require('./config');

let sqlite = {};
function initializeSqlite(dbFile){
    const db = new sqlite3.Database(dbFile ? dbFile : DATABASE_FILE);
    db.serialize();
    sqlite.db = db;
}

module.exports.initializeSqlite = initializeSqlite;
module.exports.sqlite = sqlite;