const route = require('express').Router();
const handlers = require('./handlers');

route.get('/get-jokes', handlers.getJokes);

module.exports = route;
