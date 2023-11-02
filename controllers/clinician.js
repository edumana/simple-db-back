import { Clinician } from '../models/clinician.js'


function create(req, res) {
  Clinician.create(req.body)
  .then(clinician => res.status(201).json(clinician))
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function index(req, res) {
  Clinician.find({})
  .then(results => res.status(200).json(results))
  .catch(err =>{
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function remove(req, res) {
  Clinician.findByIdAndDelete(req.params.id)
  .then(clinician => res.status(200).json(clinician))
  .catch(err =>{
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}


export { 
  create, 
  index, 
  remove
}
