const express = require('express');

const router = express.Router();

const restaurants = require('../data/restaurants.json').restaurants;

const dollars = {
  2: '$$',
  3: '$$$',
  4: '$$$$'
};

router.get('/:id', (req, res) => {
  const restaurant = restaurants.find(item => item.id === parseInt(req.params.id, 10));
  const model = Object.assign({}, restaurant);
  model.title = `${restaurant.name} - ${restaurant.city} | AnotherTable`;
  model.price = dollars[restaurant.price];

  res.render('restaurant', model);
});

module.exports = router;
