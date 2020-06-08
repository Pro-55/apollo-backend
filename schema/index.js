const authorSchema = require('./author')
const bookSchema = require('./book')
const { gql } = require('apollo-server-express')

const rootSchema = gql`

  type Query {

    _: Boolean
  
  }

  type Mutation {
  
    _: Boolean
  
  }

  type Subscription {
  
    _: Boolean
  
  }
`

module.exports = [
  rootSchema,
  authorSchema,
  bookSchema
]