const express = require('express');
const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const restaurants = require('../data/restaurants.json').restaurants;

const router = express.Router();

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
  model.phone = phoneUtil.format(phoneUtil.parse(restaurant.phone, 'US'), PNF.INTERNATIONAL);

  res.render('restaurant', model);
});

module.exports = router;
