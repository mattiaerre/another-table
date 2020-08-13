const express = require('express');
const { restaurants } = require('../data/restaurants.json');

const router = express.Router();

router.get('/', (req, res) => {
  const restaurant = restaurants.find((item) => item.id === 1906);
  res.render('restaurant', restaurant);
});

module.exports = router;
