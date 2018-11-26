const express = require('express');
const { restaurants } = require('../data/restaurants.json');

const router = express.Router();

router.get('/:id', (req, res) => {
  const includeMenuV2 = false; // FIXME

  const restaurant = restaurants.find(
    item => item.id === parseInt(req.params.id, 10)
  );

  const model = Object.assign({}, restaurant, { includeMenuV2 });

  res.render('restaurant', model);
});

module.exports = router;
