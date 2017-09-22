var express = require('express');
var router = express.Router();

const restaurants = require('../data/restaurants.json').restaurants;

router.get('/', function (req, res, next) {
  const restaurant = restaurants.find(item => item.id === 1906);

  res.render('restaurant', restaurant);
});

module.exports = router;
