/**
 * @jest-environment node
 */
const db = require('../database/index.js');

describe("Database", () => {
  test('the database creates a document', done => {
    function callback(err, data) {
      expect(data).toBeTruthy();
      done();
    }
    db.deleteOne('http', (error, res) => {
      db.create('http', callback)
    })
  })

  test('the database gets a document', done => {
    function callback(err, data) {
      expect(Array.isArray(data)).toBe(true);
      done();
    }
    db.get(callback);
  })
})
