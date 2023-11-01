import { Sample } from '../models/sample.js'


function create(req, res) {
  Sample.create(req.body)
  .then(sample => res.status(201).json(sample))
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function index(req, res) {
  Sample.find({})
  .then(results => res.status(200).json(results))
  .catch(err =>{
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function remove(req, res) {
  console.log('in remove')
  console.log(req.params.id)
  Sample.findByIdAndDelete(req.params.id)
  .then(sample => res.status(200).json(sample))
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
