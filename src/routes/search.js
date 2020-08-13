const express = require('express');
const { restaurants } = require('../data/restaurants');
const { restart } = require('nodemon');

const router = express.Router();

function blocklist(restaurant) {
  return ![27691, 74941, 4057, 76462, 83107].includes(restaurant.id);
}

router.get('/', (req, res) => {
  const model = {
    title: 'Search',
    restaurants: restaurants.filter(blocklist).map((restaurant) => ({
      ...restaurant,
      resizer_url: `https://resizer.otstatic.com/v2/profiles/legacy/${restaurant.id}.jpg`
    }))
  };
  res.render('search', model);
});

module.exports = router;
