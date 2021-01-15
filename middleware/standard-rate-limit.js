const rateLimit = require('express-rate-limit');

module.exports = (req, res, next) => rateLimit({
    max:100,
    windowMs: 30 * 60 * 1000
})