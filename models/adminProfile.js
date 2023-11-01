import mongoose from 'mongoose'

const Schema = mongoose.Schema

const adminProfileSchema = new Schema({
  name: String,
  photo: String,
},{
  timestamps: true,
})

const AdminProfile = mongoose.model('AdminProfile', adminProfileSchema)

export { AdminProfile }
