const express = require('express');
const restaurants = require('../data/restaurants.json').restaurants;

const router = express.Router();

function formatPhone (phoneString) {
  return '+1 ' + phoneString.substring(0,3) + '-' + phoneString.substring(3,6) + '-' + phoneString.substring(6,10)
}

router.get('/:restaurant_id', (req, res) => {
  const restaurant = restaurants.find(item => item.id === Number(req.params.restaurant_id));
  // Make a deep copy
  // Figure area code based on location
  // Length of phone number
  restaurant.phone = formatPhone(restaurant.phone)
  res.render('restaurant', restaurant);
});

module.exports = router;
