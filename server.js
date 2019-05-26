const app = require('./src/index')
const gqlServer = require('./src/gql')

const httpPort = 3000
const gqlPort = 4000

const httpServer = require('http').createServer(app)

httpServer.listen(httpPort, () => {
  console.log(`HTTP server running at http://localhost:${httpPort}`)
})

gqlServer.start(() => console.log(`GraphQL server running at http://localhost:${gqlPort}`))
