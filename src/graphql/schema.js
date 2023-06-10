import { gql } from "apollo-server"
import { userTypeDefs } from "./user/typedefs"
import { userResolvers } from "./user/resolver"
import { postTypeDefs } from "./post/typedefs"
import { postResolvers } from "./post/resolver"


const rootTypeDefs = gql`
type Query {
  _empty: Boolean
}
`
const rootResolvers = {
  Query: {
    _empty: () => true
  }
}
export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs]
export const resolvers = [rootResolvers, userResolvers,postResolvers]
