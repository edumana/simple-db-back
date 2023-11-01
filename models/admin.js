import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 12
const Schema = mongoose.Schema

const adminSchema = new Schema({
  email: { type: String, required: true, lowercase: true },
  password: String,
  profile: { type: Schema.Types.ObjectId, ref: 'AdminProfile' },
}, {
  timestamps: true,
})

adminSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  }
})

adminSchema.pre('save', function (next) {
  const admin = this
  if (!admin.isModified('password')) return next()
  bcrypt.hash(admin.password, SALT_ROUNDS)
  .then(hash => {
    admin.password = hash
    next()
  })
  .catch(err => {
    next(err)
  })
})

adminSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

const Admin = mongoose.model('Admin', adminSchema)

export { Admin }
