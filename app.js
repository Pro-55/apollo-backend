const Express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./connections')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
require('dotenv/config')

const port = process.env.PORT

const app = Express()

const corsOptions = {
  credentials: true
}

app.use(
  cors(corsOptions),
  bodyParser.json({ limit: '50mb' }),
  bodyParser.urlencoded({ extended: true })
)

app.use((req, res, next) => {
  res.removeHeader("X-Powered-By")
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

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

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port }, () => callBack());

function callBack() {
  console.log('Server is up on: http://localhost:' + port + server.graphqlPath)
}