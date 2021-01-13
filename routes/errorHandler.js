const standardLogger = require('../logger');

function errorHandler(err, req, res, next){
    if(err){
        standardLogger.error(err);
        return res.status(err.statusCode ? err.statusCode : 500).json({
            name: err.name,
            message: err.message
        });
    }
}

module.exports = errorHandler;