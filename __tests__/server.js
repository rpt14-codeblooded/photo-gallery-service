/**
 * @jest-environment node
 */

const request = require('supertest');
const app = require('../server/index.js');
const expect = require('chai').expect;

describe('Server', () => {
  test('It should respond back with a 200', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).to.be.oneOf([200, 302])
    })
  });

})

describe("API", () => {
  test("It should respond with an array of pictures", async () => {
    const response = await request(app).get("/pictures");
    expect(Array.isArray(response.body)).to.equal(true);
    expect(response.statusCode).to.equal(200);
  });
});