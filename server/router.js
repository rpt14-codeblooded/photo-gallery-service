const express = require('express');
const router = express.Router();
const db = require('../database/index.js');

router.get('/id', (req, res) => {
  console.log(req.query.id);
  res.send();
})

module.exports = router;