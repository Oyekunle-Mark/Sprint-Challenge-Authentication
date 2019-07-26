const route = require('express').Router();
const handlers = require('./handlers');

route.post('/register', handlers.register);

module.exports = route;
