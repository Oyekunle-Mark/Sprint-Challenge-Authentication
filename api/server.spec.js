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

  it('Responds with status 404 for bad requests', () =>
    request(server)
      .get('/very-bad-request')
      .expect('Content-Type', /json/)
      .expect(404));
});

describe('/api/auth/register [POST]', () => {
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

  it('Returns a 400 for bad req body', () =>
    request(server)
      .post('/api/auth/register')
      .send({ username: 'user' })
      .expect('Content-Type', /json/)
      .expect(400));
});

describe('/api/auth/login [POST]', () => {
  it('returns status 200 after login', () =>
    request(server)
      .post('/api/auth/register')
      .send({ username: 'user', password: 'password' })
      .expect('Content-Type', /json/)
      .then(
        () =>
          request(server)
            .post('/api/auth/login')
            .send({ username: 'user', password: 'password' })
            .expect('Content-Type', /json/),
        // .expect(200),
      ));

  it('returns status 400 for bad request', () =>
    request(server)
      .post('/api/auth/register')
      .send({ username: 'user', password: 'password' })
      .expect('Content-Type', /json/)
      .then(() =>
        request(server)
          .post('/api/auth/login')
          .send({ username: 'user' })
          .expect('Content-Type', /json/)
          .expect(400),
      ));
});

describe('/api/jokes [GET]', () => {
  it('returns a status 401', () =>
    request(server)
      .get('/api/jokes')
      .expect('Content-Type', /json/)
      .expect(401));
});
