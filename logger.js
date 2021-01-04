const bunyan = require('bunyan');

const standardLogger = bunyan.createLogger({name: 'standardLogger'});

module.exports = standardLogger;