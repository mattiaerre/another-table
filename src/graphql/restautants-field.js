const {
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql');

const RestaurantType = require('./RestaurantType');
const fetchRestaurants = require('./fetch-restaurants');

const restaurantsField = {
  type: new GraphQLList(RestaurantType),
  args: {
    name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    state: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    zip: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    page: {
      type: GraphQLInt
    },
    per_page: {
      type: GraphQLInt
    }
  },
  resolve: (_, args) => (fetchRestaurants(args))
};

module.exports = restaurantsField;
