const express = require('express');

const router = express.Router();
const cities = require('../data/cities').cities;

router.get('/', (req, res) => {
  const model = { cities };
  res.render('autocomplete', model);
});

module.exports = router;
