const route = require('express').Router();
const handlers = require('./handlers');
const middleware = require('./authMiddleware');

route.post('/register', middleware, handlers.register);
route.post('/login', middleware, handlers.login);

module.exports = route;
