import { randomUUID } from "crypto"
const posts = () => {
  return [
    {
      id: randomUUID(),
      title: 'Graphql'
    },
    {
      id: randomUUID(),
      title: 'apollo-server'
    }
  ]
}
export const postResolvers = {
  Query: {
    post: () => {
      return {
        id: randomUUID(),
        title: 'Graphql'
      }
    },
    posts,
  }
}
