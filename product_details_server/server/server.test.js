const app = require('../server/index').app;
const request = require('supertest');
describe('Testing server', () => {

  test('It should respond back with a 200', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200)
    })
  });

})
