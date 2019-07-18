const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const getProductDetails = require('../database/index').getProductDetails;
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id',express.static(__dirname + '/../client/dist'));

app.get('/api/productdetails/:id', (req, res) => {
  let id = req.params.id;
  getProductDetails(id, (results) => {
    res.send(results);
  })
})


module.exports.app = app;