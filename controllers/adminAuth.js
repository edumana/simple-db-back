import { Admin } from '../models/admin.js'
import { AdminProfile } from '../models/adminProfile.js'

import jwt from 'jsonwebtoken'

//Admin holds password, email, and stores AdminProfile with full details
function signup(req, res) {
  Admin.findOne({ email: req.body.email })
  .then(admin => {
    if (admin) {
      console.error('Account already exists.')
      res.status(400).json({ message: 'Account already exists' })
    } else if (!process.env.SECRET) {
      console.error('no SECRET in .env file')
      res.status(500).json({ message: 'Missing secret in .ENV file' })
    } else {
      AdminProfile.create(req.body)
      .then(newAdminProfile => {
        req.body.profile = newAdminProfile._id
        Admin.create(req.body) //req.body holds email, password, and adminProfile
        .then(admin => {
          const token = createJWT(admin)
          console.log('Token: ', token)
          res.status(200).json({ token })
        })
        .catch(err => {
          AdminProfile.findByIdAndDelete(req.body.profile)
          console.error('Error creating admin', err)
          res.status(500).json({ message: 'Error creating admin' })
        })
      })
    }
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
}

function login(req, res) {
  Admin.findOne({ email: req.body.email })
  .then(admin => {
    if (!admin) return res.status(401).json({ message: 'User not found' })
    admin.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(admin)
        res.status(200).json({ token })
      } else {
        res.status(401).json({ message: 'Incorrect password' })
      }
    })
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
}

function changePassword(req, res) {
  Admin.findById(req.user._id)
  .then(admin => {
    if (!admin) return res.status(401).json({ err: 'Admin not found' })
    admin.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        admin.password = req.body.newPassword
        admin.save()
        .then(() => {
          const token = createJWT(admin)
          res.status(200).json({ token })
        })
      } else {
        res.status(401).json({ message: 'Incorrect password' })
      }
    })
  })
}

/* --== Helper Functions ==-- */

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
}

export { signup, login, changePassword }
