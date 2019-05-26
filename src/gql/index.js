const { GraphQLServer } = require('graphql-yoga')
// const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
// const db = require('./db')

const server = new GraphQLServer({
  typeDefs: 'src/gql/schema.graphql',
  resolvers: {
    // Mutation,
    Query
  }
})
module.exports = server
