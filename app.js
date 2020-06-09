const Express = require('express')
const connectDB = require('./connections')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
require('dotenv/config')

const port = process.env.PORT

const app = Express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    const client = await connectDB()
    const db = await client.db()
    return { db, client, res, req }
  }
})

app.get('/', (req, res) => {
  res.send('Welcome to PASS API')
})

server.applyMiddleware({ app })

app.listen({ port }, () => callBack())

function callBack() {
  console.log('Server is up on: http://localhost:' + port + server.graphqlPath)
}