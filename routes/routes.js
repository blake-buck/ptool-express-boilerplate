
const exampleRouter = require("./example.js");
const exampleRoutes = require('./example');
const errorHandler = require('./errorHandler');

function initializeRoutes(app){
	app.use(exampleRouter);

    app.use(exampleRoutes);

    app.use(errorHandler);
}

module.exports = initializeRoutes;