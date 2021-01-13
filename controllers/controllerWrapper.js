// catches async errors for middleware handling without needing to worry about try-catch blocks
const controllerWrapper = controllerFunction => {
    return (req, res, next) => {
      controllerFunction(req, res, next).catch(next);
    };
};

module.exports = controllerWrapper;