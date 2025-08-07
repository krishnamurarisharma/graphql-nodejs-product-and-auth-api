const userResolvers = require("./user");
const productResolvers = require("./product");

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolvers.Mutation,
  },
};
