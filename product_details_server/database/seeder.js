const saveProductDetails = require('./index').saveProductDetails;
const deleteDB = require('./index').deleteDB;
const data = require('./fakeDataGenerator').data;

deleteDB()
saveProductDetails(data);


