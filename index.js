const {SERVER_PORT} = require('./config');
const exampleRoutes = require('./routes/example');

const express = require('express');

const app = express();

app.use(express.json());

app.use(exampleRoutes);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))