import mongoose from 'mongoose'

const Schema = mongoose.Schema

const clinicianSchema = new Schema({
  name: {type: String},
  specialty: {type: [String]},
  location: {
    lat: Number,
    lng: Number
  },
  bookings: [{ type: Schema.Types.ObjectId, ref: 'BookingSchema'}],
  availableSlots: {type: [Date]}
},{
  timestamps: true,
})

const Clinician = mongoose.model('Clinician', clinicianSchema)

export { Clinician }