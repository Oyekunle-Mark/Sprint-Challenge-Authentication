const db = require('../database/dbConfig');

const get = id =>
  db('users')
    .where({ id })
    .first();

const add = async user => {
  const [id] = await db('users').insert(user);

  return get(id);
};

const getByUsername = username =>
  db('users')
    .where({ username })
    .first();

module.exports = {
  add,
  get,
  getByUsername,
};
