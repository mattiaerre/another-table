const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = require('graphql');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    answer: {
      resolve: () => 42,
      type: GraphQLInt
    },
    hello: {
      resolve: () => 'world',
      type: GraphQLString
    }
  }
});

const schema = new GraphQLSchema({
  query: QueryType
});

module.exports = schema;
