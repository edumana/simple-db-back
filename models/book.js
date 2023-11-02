import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {type: String},
  isbn: {type: Number},
  genre: {type: [String]},
  author: { type: Schema.Types.ObjectId, ref: 'Author'},
  price: {type: Number, min: 1},
  onSale: {type: Boolean, default: 'false'},
  salePrice: {type: Number, min: 1},
},{
  timestamps: true,
})

const Book = mongoose.model('Book', bookSchema)

export { Book }