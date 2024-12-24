const { gql } = require('apollo-server');

const typeDefs = gql`
  type MenuItem {
    name: String!
    description: String
    price: Float
    halfPrice: Float
    fullPrice: Float
  }

  type Sandwich {
    cold: [MenuItem!]!
    hot: [MenuItem!]!
  }

  type Menu {
    appetizers: [MenuItem!]!
    entrees: [MenuItem!]!
    sandwiches: Sandwich!
  }

  type Query {
    menu: Menu
  }
`;

module.exports = typeDefs;

