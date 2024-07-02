const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Dish {
    id: ID!
    name: String!
    price: Int!
    type: String!
    description: String!
    image: String!
  }

  type Query {
    getAllDishes: [Dish]
    getDishById(id: ID!): Dish
  }

  type Mutation {
    addDish(
      name: String!
      price: Int!
      type: String!
      description: String!
      image: String!
    ): Dish
    deleteDish(id: ID!): Dish
    updateDish(
      id: ID!
      name: String!
      price: Int!
      type: String!
      description: String!
      image: String!
    ): Dish
  }
`;
module.exports = { typeDefs };
