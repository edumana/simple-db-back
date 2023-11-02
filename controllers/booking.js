import { Booking } from '../models/booking.js'


function create(req, res) {
  Booking.create(req.body)
  .then(booking => res.status(201).json(booking))
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function index(req, res) {
  Booking.find({})
  .then(booking => res.status(200).json(results))
  .catch(err =>{
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

// function remove(req, res) {
//   Booking.findByIdAndDelete(req.params.id)
//   .then(clinician => res.status(200).json(clinician))
//   .catch(err =>{
//     console.log(err)
//     res.status(500).json({ message: 'Internal server error' })
//   })
// }


export { 
  create, 
  index, 
}
