const express = require('express');
const restaurants = require('../data/restaurants.json').restaurants;
const { int2kebab, kebab2int } = require('./seo-friendly');

const router = express.Router();

router.get('/', (req, res) => {
  const restaurant = restaurants.find(item => item.id === 1906);
  res.render('restaurant', restaurant);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!isNaN(id)) {
    const kebab = int2kebab(id);
    return res.redirect(`/restaurant/${kebab}`);
  }
  const restaurant = restaurants.find(item => item.id === kebab2int(req.params.id));
  return res.render('restaurant', restaurant);
});

module.exports = router;
