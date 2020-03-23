const graphql = require("graphql");
const { GraphQLString, GraphQLSchema, GraphQLObjectType, GraphQLID } = graphql;
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});
module.exports = UserType;
