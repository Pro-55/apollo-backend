const authorResolvers = require('./author')
const bookResolvers = require('./book')
const notificationResolvers = require('./notification')

module.exports = [
  authorResolvers,
  bookResolvers,
  notificationResolvers
] 