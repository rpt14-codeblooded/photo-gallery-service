/**
 * @jest-environment node
 */
// const db = require('../database/index.js');

// describe("Database", () => {
//   test('the database creates a document', done => {
//     function callback(err, data) {
//       expect(data).toBeTruthy();
//       done();
//     }
//     db.deleteOne('http', (error, res) => {
//       db.create('http', callback)
//     })
//   })

//   test('the database gets a document', done => {
//     function callback(err, data) {
//       expect(Array.isArray(data)).toBe(true);
//       done();
//     }
//     db.get(callback);
//   })
// })

const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb://localhost/gallery", {
      useNewUrlParser: true,
    });
    db = await connection.db("gallery");
  });

  afterAll(async () => {
    await db.dropCollection('users');
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});
