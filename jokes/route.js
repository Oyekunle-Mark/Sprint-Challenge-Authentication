const route = require('express').Router();
const handler = require('./handlers');

route.get('/get-jokes', handler);

module.exports = route;
