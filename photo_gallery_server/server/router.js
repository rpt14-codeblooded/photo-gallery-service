const express = require('express');
const router = express.Router();
const db = require('../database/index.js');

router.get('/pictures', (req, res) => {
  db.get((err, doc) => {
    err ? res.status(400).send() : res.status(200).send(doc);
  })
})

router.get('/', (req, res) => {
  res.redirect('/1')
})

module.exports = router;