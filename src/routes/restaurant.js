const express = require('express');

const router = express.Router();

const restaurants = require('../data/restaurants.json').restaurants;

router.get('/', (req, res) => {
  const restaurant = restaurants.find(item => item.id === 1906);

  res.render('restaurant', restaurant);
});

module.exports = router;
