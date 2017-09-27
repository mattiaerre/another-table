const express = require('express');
const restaurants = require('../data/restaurants.json').restaurants;

const router = express.Router();

router.get('/', (req, res) => {
  const restaurant = restaurants.find(item => item.id === req.params.restaurant_id);
  res.render('reactaurant', restaurant);
});

module.exports = router;
