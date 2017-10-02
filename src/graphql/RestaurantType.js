const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat
} = require('graphql');

const RestaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    state: {
      type: GraphQLString
    },
    area: {
      type: GraphQLString
    },
    postalCode: {
      type: GraphQLString,
      resolve: obj => obj.postal_code
    },
    country: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLString
    },
    lat: {
      type: GraphQLFloat
    },
    lng: {
      type: GraphQLFloat
    },
    price: {
      type: GraphQLInt
    },
    imageUrl: {
      type: GraphQLString,
      resolve: obj => obj.image_url
    }
  }
});

module.exports = RestaurantType;
