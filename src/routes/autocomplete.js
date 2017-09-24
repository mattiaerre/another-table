const express = require('express');
const cities = require('../data/cities').cities;

const router = express.Router();

router.get('/', (req, res) => {
  const model = { title: 'Autocomplete', cities };
  res.render('autocomplete', model);
});

module.exports = router;
