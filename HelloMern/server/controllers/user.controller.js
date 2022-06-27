const User = require('../models/User.model');

module.exports = {
  getAll : (req, res) => {
    User.find()
    .then((allObjects) => {
      res.json({ users: allObjects })
    })
    .catch((err) => {
      console.log("Query *getAll* failed.")
      res.json({ message: 'Something went wrong', error: err })
    })
  },
  createNew: (req, res) => {
    User.create(req.body)
    .then(newObject => {
      console.log("newObject: ",newObject);
      res.json({ user: newObject })
    })
    .catch((err) => {
      console.log("Query *createNew* failed.")
      res.status(400).json({ message: 'Something went wrong', error: err })
    })
  },
  getById : (req, res) => {
    User.findOne({_id: req.params.id})
    .then((oneObject) => {
      console.log(oneObject);
      res.json(oneObject)
    })
    .catch((err) => {
      console.log("Query *findOne* failed.")
      res.status(400).json({ message: 'Something went wrong', error: err })
    })
  },
  deleteById : (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then((deletedObject) => {
      console.log(deletedObject);
      res.json(deletedObject)
    })
    .catch((err) => {
      console.log("Query *deleteOne* failed.")
      res.status(400).json({ message: 'Something went wrong', error: err })
    })
  },
  updateById : (req, res) => {
    User.updateOne({_id: req.params.id},
      req.body,
      {new: true, runValidators: true}
      )
    .then((updatedObject) => {
      console.log(updatedObject);
      res.json(updatedObject)
    })
    .catch((err) => {
      console.log("Query *updateOne* failed.")
      res.status(400).json({ message: 'Something went wrong', error: err })
    })
  }
}
