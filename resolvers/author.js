const { ObjectId } = require('mongodb')

// Query
const getAuthors = async (_, { }, { db }) => {
  const authors = await db.collection('authors').find().toArray()
  return authors
}

const getAuthor = async (_, { id }, { db }) => {
  const author = await db.collection('authors').findOne({ _id: ObjectId(id) })
  return author
}

// Mutation
const addAuthor = async (_, { authorName }, { db }) => {
  const author = {
    _id: ObjectId(),
    name: authorName
  }

  await db.collection('authors').insertOne(author)

  return author
}

// Export
module.exports = {
  Query: {
    getAuthors,
    getAuthor
  },
  Mutation: {
    addAuthor
  },
  Author: {
    books: async (parent, { }, { db }) => db.collection('books').find({ authorId: parent._id.toString() }).toArray()
  }
}