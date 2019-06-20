const db = require('../database/index.js');


test('the server creates a document', done => {
  function callback(err, data) {
    expect(data).toBeTruthy();
    done();
  }
  db.create('http', callback);
})