const { gql } = require('apollo-server-express')

module.exports = gql`

  extend type Query {

    getAuthors: [Author!]
    getAuthor(id: ID!): Author!

  }

  extend type Mutation {

    addAuthor(authorName: String!): Author

  }

  type Author { 
    _id: ID!
    name: String!
    books: [Book!]
  }
  
`