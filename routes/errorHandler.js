const standardLogger = require('../logger');

function errorHandler(err, req, res, next){
    if(err){
        let status = 500;
        
        if(err.statusCode){
            status = err.statusCode;
        }
        if(err.status){
            status = err.status;
        }

        standardLogger.error(err);

        return res.status(status).json({
            name: err.name,
            message: err.message
        });
    }
}

module.exports = errorHandler;