const { gql } = require('apollo-server-express')

module.exports = gql`

  extend type Mutation {

    sendNotification(token: String!, title: String!, body: String): String

  }

  type Notification {
    _id: ID!
    title: String!
    body: String
  }

`