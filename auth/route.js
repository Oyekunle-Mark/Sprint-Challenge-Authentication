const route = require('express').Router();
const handlers = require('./handlers');

route.post('/register', handlers.register);
route.post('/login', handlers.login);

module.exports = route;
