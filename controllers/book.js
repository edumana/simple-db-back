import { Book } from '../models/book.js'

function create(req, res) {
  Book.create(req.body)
  .then(book => res.status(201).json(book))
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function indexNoPopulate(req, res) {
  Book.find({})
  .then(results => {
    results.populate(([
      { path: 'author', model: 'Author' },
    ]))
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json({ message: 'Internal server error' })
  })
}

function index(req, res) {
  console.log('In Index')
  Book.find({})
  .populate([{ path: 'author', model: 'Author' }])
  .then(books => {
      res.json(books); 
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  });
}

function remove(req, res) {
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
