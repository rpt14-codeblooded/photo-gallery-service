const {getProductDetails} = require('../database/index').getProductDetails;

// Test DB connection



// Test returned item from DB
test('getProductDetails should', () => {
  function callback(data) {
    expect(data.id).toBe(1);
    done();
  }
  getProductDetails(1, callback)
});


