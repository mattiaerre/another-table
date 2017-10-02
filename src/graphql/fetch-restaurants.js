const debug = require('debug')('another-table:graphql/fetch-restaurants');
const appendQuery = require('append-query');
const fetch = require('node-fetch');

const fetchRestaurants = (args) => {
  const url = appendQuery('http://opentable.herokuapp.com/api/restaurants', args);
  debug(url);
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      const { restaurants, ...rest } = data;
      debug(rest);
      return restaurants;
    });
};

module.exports = fetchRestaurants;
