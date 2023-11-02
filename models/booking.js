import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  time: { type: Date },
  clinician: { type: Schema.Types.ObjectId, ref: 'Clinician'},
  patient: { type: Number }
},{
  timestamps: true,
})

const Booking = mongoose.model('Booking', bookingSchema)

export { Booking }