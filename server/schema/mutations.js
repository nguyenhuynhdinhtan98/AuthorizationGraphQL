const graphql = require("graphql");
const { GraphQLString, GraphQLSchema, GraphQLObjectType } = graphql;
const user_type = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: user_type,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, request) {
        return AuthService.signup({ email, password, req: request });
      }
    },
    logout: {
      type: user_type,
      resolve(parentValue, args, request) {
        const { user } = request;
        request.logout();
        return user;
      }
    },
    signin: {
      type: user_type,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, request) {
        return AuthService.login({ email, password, req: request });
      }
    }
  }
});
module.exports = mutation;
