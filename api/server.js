const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();
const users = require('../jokes/route');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, O faithful developer.',
  }),
);

server.use('/api', users);

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'That URL will take you nowhere',
  }),
);

module.exports = server;
