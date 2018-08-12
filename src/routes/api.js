const express = require('express');
const { restaurants } = require('../data/restaurants.json');

const router = express.Router();

router.get('/restaurants', (req, res) => {
  res.send({ data: restaurants });
});

module.exports = router;
