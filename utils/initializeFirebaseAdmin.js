const admin = require('firebase-admin')
const serviceAccount = require('./omdb-dev-firebase-adminsdk-i3lsh-6cd0bd06f6.json')
require('dotenv/config')

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL
})