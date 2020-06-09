const { ObjectId } = require('mongodb')
const fcm = require('../utils/fcm')

// Mutation
const sendNotification = async (_, { token, title, body }, { db }) => {

  setTimeout(async () => {
    fcm.createPayloadAndSend(token, title, body)
  }, 500)

  return 'Sent'

}

// Export
module.exports = {

  Query: {},

  Mutation: {
    sendNotification
  }
}