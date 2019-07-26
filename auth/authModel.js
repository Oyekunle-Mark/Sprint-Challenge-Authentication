const db = require('../database/dbConfig');

const get = id =>
  db('users')
    .where({ id })
    .first();

const add = async user => db('users').insert(user);

module.exports = {
  add,
  get,
};
