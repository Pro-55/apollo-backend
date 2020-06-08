const MongoClient = require('mongodb')

let client

const connectDB = async () => {
  if (client) {
    return client
  }
  try {

    client = await MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

  } catch (err) {
    return err
  }
  return client
}

module.exports = connectDB