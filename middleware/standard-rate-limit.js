const rateLimit = require('express-rate-limit');
const {TooManyRequestsError} = require('../constants/errors');

module.exports = rateLimit({
    max:100,
    windowMs: 30 * 60 * 1000,
    handler:(req, res, next) => {
        next(
            new TooManyRequestsError(
                'You have sent too many requests - wait half an hour and lower your request rate.'
            )
        )
    }
})