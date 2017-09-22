var express = require('express');
var router = express.Router();

const restaurants = require('../data/restaurants.json').restaurants;

router.get('/:id', function (req, res, next) {
	let id=parseInt(req.params.id);
  const restaurant = restaurants.find(item => item.id === id);

  res.render('restaurant', restaurant);
});

module.exports = router;
