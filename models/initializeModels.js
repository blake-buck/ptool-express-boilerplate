const dependencyInjector = require('../dependency-injector');
module.exports = () => {
    dependencyInjector.register('exampleModel', require('./example'))
}