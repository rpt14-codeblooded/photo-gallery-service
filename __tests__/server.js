const request = require('supertest');
const app = require('../server/index.js');

describe("GET /pictures ", () => {
  test("It should respond with an array of pictures", async () => {
    const response = await request(app).get("/pictures");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.statusCode).toBe(200);
  });
});