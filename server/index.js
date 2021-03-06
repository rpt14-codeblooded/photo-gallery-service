const express = require('express');
const app = express();
const port = 3003;
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');
const router = require('./router');
var cors = require('cors')
const mongoose = require('mongoose');
const db = require('../database/index.js');

mongoose.connect(host='mongodb://172.17.0.2:27017/pictures', {useNewUrlParser: true})
.then(() => {
  console.log('DB connected');
  db.populateDb();
})
.catch((e) => {
  console.log(e);
})

const dir = path.parse(__dirname).dir;
app.use(parser.urlencoded());
app.use(logger('dev'));
app.use(cors());

app.use('/', router);
app.use(express.static(dir + '/public'));
app.use('/:id', express.static(dir + '/public'));


module.exports = app;