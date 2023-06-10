import { gql } from "apollo-server";


export const userTypeDefs = gql`
 extend type Query {
 user(id: ID!): User!
 users: [User!]!
},

type User {
  id: ID!
  userName: String!
  firstName: String!
  lastName: String!
  oserName: String!
  indexRef: Int!
  createdAt: String!
}
`;


