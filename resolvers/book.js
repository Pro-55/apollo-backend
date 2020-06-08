const { ObjectId } = require('mongodb')

// Query
const getBooks = async (_, { }, { db }) => {
  const books = await db.collection('books').find().toArray()
  return books
}

const getBook = async (_, { id }, { db }) => {
  const book = await db.collection('books').findOne({ _id: ObjectId(id) })
  return book
}

// Mutation
const addBook = async (_, { name, genre, authorId }, { db }) => {
  const book = {
    _id: ObjectId(),
    name: name,
    genre: genre,
    authorId: authorId
  }

  await db.collection('books').insertOne(book)

  return book
}

// Export
module.exports = {
  Query: {
    getBooks,
    getBook
  },
  Mutation: {
    addBook
  },
  Book: {
    author: async (parent, { }, { db }) => db.collection('authors').findOne({ _id: ObjectId(parent.authorId) })
  }
}