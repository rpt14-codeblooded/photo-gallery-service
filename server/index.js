const express = require('express');
const app = express();
const port = 3003;
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');
const router = require('./router');

const dir = path.parse(__dirname).dir;
app.use(parser.urlencoded());
app.use(logger('dev'));

app.use('/', router);
app.use(express.static(dir + '/public'));


app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});