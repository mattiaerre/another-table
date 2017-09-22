const express = require('express');

const router = express.Router();

const restaurants = require('../data/restaurants.json').restaurants;

router.get('/:id', (req, res) => {
  const restaurant = restaurants.find(item => item.id === parseInt(req.params.id, 10));

  res.render('restaurant', restaurant);
});

module.exports = router;
