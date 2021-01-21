// logs basic information about the request
const logger = require('../logger');
module.exports = function(request, response, next){
    const information= {
        ip, 
        host, 
        method, 
        headers,
        path,
        originalUrl
    } = request;
    logger.info(information);
    next();
}