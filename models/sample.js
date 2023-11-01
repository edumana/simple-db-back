import mongoose from 'mongoose'

const Schema = mongoose.Schema

const sampleSchema = new Schema({
  //referencedModel: { type: Schema.Types.ObjectId, ref: 'GrowerProfile'},
  value1: {type: String},
  value2: {type: String},
},{
  timestamps: true,
})

const Sample = mongoose.model('Sample', sampleSchema)

export { Sample }