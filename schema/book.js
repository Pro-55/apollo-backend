const { gql } = require('apollo-server-express')

module.exports = gql`

  extend type Query {

    getBooks: [Book!]
    getBook(id: ID!): Book!

  }

  extend type Mutation {

    addBook(name: String!, genre: String!, authorId: String!): Book

  }

  type Book { 
    _id: ID!
    name: String!,
    genre: String!,
    author: Author!
  }

`