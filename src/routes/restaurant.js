const express = require('express');
const { restaurants } = require('../data/restaurants.json');
const factory = require('./factory');

const router = express.Router();

router.get('/', (req, res) => {
  const restaurant = factory(restaurants.find((item) => item.id === 1906));
  res.render('restaurant', restaurant);
});

module.exports = router;
