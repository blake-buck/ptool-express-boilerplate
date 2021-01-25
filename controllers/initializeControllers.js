const dependencyInjector = require('../dependency-injector');
module.exports = () => {
    dependencyInjector.register('exampleController', require('./example'));
}
