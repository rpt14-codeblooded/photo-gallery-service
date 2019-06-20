const express = require('express');
const router = express.Router();
const db = require('../database/index.js');

router.get('/id', (req, res) => {
  let id = req.query.id;
  db.get(id, (err, doc) => {

    err ? res.status(400).send() : res.status(200).send(doc[0].url);
  })
})

module.exports = router;