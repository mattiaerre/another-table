const restaurants = require('../data/restaurants').restaurants;

const name2kebab = name => (name.toLowerCase().split(' ').join('-'));

const int2kebab = (id) => {
  const data = restaurants.find(restaurant => restaurant.id === id);
  return name2kebab(data.name);
};

const kebab2int = id => (
  restaurants.find(restaurant => (
    name2kebab(restaurant.name) === id)
  ).id
);

module.exports = { int2kebab, kebab2int };
