import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: {type: String},
  books: { type: [Schema.Types.ObjectId], ref: 'Book'},
},{
  timestamps: true,
})

const Author = mongoose.model('Author', authorSchema)

export { Author }