const route = require('express').Router();
const handler = require('./handlers');
const middleware = require('./jokesMiddleware');

route.get('/get-jokes', middleware, handler);

module.exports = route;
