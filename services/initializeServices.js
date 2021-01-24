const dependencyInjector = require('../dependency-injector');

module.exports = () => {
    dependencyInjector.register('exampleService', require('./example'))
}