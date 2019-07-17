const express = require('express');
const app = express();
const port = 3003;
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');
const router = require('./router');
var cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gallery', {useNewUrlParser: true})
.then(() => {
  console.log('DB connected');
})

const dir = path.parse(__dirname).dir;
app.use(parser.urlencoded());
app.use(logger('dev'));
app.use(cors());

app.use('/', router);
app.use(express.static(dir + '/public'));
app.use('/:id', express.static(dir + '/public'));


module.exports = app;