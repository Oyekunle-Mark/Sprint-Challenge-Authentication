const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

describe('/ [GET]', () => {
  it('Responds with status 200', () =>
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200));

  it('sends a welcome message', () =>
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.message).toEqual('Welcome, O faithful developer.');
      }));
});

describe('/ [POST]', () => {
  it('Returns a 201 after creating user', () =>
    request(server)
      .post('/api/auth/register')
      .send({ username: 'user', password: 'password' })
      .expect('Content-Type', /json/)
      .expect(201));

  it('Returns a message', () =>
    request(server)
      .post('/api/auth/register')
      .send({ username: 'user', password: 'password' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.body.message).toEqual('User created successfully.');
      }));
});
