import mongoose from 'mongoose'

const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: {type: String},
  location: {
    latitude: Number,
    longitude: Number
  },
  bookings: [{ type: Schema.Types.ObjectId, ref: 'BookingSchema'}],
},{
  timestamps: true,
})

const Patient = mongoose.model('Patient', patientSchema)

export { Patient }