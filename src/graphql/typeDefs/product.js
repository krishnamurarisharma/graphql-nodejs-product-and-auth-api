const { gql } = require('apollo-server-express');

module.exports = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    category: String
    stock: Int
    images: [String]
    isActive: Boolean
    createdAt: String
    updatedAt: String
  }

  input ProductInput {
    name: String!
    description: String
    price: Float!
    category: String
    stock: Int
    images: [String]
    isActive: Boolean
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(id: ID!, input: ProductInput!): Product
    deleteProduct(id: ID!): Boolean
  }
`;
