const express = require('express');

const router = express.Router();

const restaurants = require('../data/restaurants.json').restaurants;

router.get('/:id', (req, res) => {
  const restaurant = restaurants.find(item => item.id === parseInt(req.params.id, 10));
  const model = Object.assign({}, restaurant);
  model.title = `${restaurant.name} - ${restaurant.city} | AnotherTable`;

  res.render('restaurant', model);
});

module.exports = router;
