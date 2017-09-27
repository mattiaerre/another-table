const express = require('express');
const restaurants = require('../data/restaurants.json').restaurants;

const router = express.Router();

router.get('/', (req, res) => {
  const restaurant = restaurants.find(item => item.id === 1906);
  res.render('reactaurant', { restaurant });
});

module.exports = router;
