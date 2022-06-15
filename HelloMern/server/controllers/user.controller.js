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
    User.findOne()
  }
}
