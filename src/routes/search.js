const express = require('express');

const router = express.Router();
const restaurants = require('../data/restaurants').restaurants;

router.get('/api', (req, res) => {
  const data = restaurants;
  res.send(data);
});

router.get('/', (req, res) => {
  const model = { title: 'Search' };
  res.render('search', model);
});

module.exports = router;
