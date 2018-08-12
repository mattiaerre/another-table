const express = require('express');
const { restaurants } = require('../data/restaurants');

const router = express.Router();

router.get('/', (req, res) => {
  const model = { title: 'Search', restaurants };
  res.render('search', model);
});

module.exports = router;
