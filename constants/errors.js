class BadRequestError extends Error{
    constructor(...params){
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BadRequestError)
        }

        this.name = 'BadRequestError'
        this.status = 400;
    }
}

class UnAuthenticatedRequestError extends Error{
    constructor(...params){
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnAuthenticatedRequestError)
        }

        this.name = 'UnAuthenticatedRequestError'
        this.status = 401;
    }
}

class UnAuthorizedRequestError extends Error{
    constructor(...params){
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnAuthorizedRequestError)
        }

        this.name = 'UnAuthorizedRequestError'
        this.status = 403;
    }
}

class TooManyRequestsError extends Error{
    constructor(...params){
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TooManyRequestsError)
        }

        this.name = 'TooManyRequestsError'
        this.status = 429;
    }
}

class ServerError extends Error{
    constructor(...params){
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ServerError)
        }

        this.name = 'ServerError'
        this.status = 500;
    }
}


module.exports = {
    BadRequestError,
    UnAuthenticatedRequestError,
    UnAuthorizedRequestError,
    TooManyRequestsError,
    ServerError
}