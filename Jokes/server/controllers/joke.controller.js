const Joke = require('../models/joke.model');

module.exports.getAll = (req, res) => {
    Joke.find()
        .then((allObjects) => {
            res.json({ jokes: allObjects })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.getById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleObject => {
            res.json({ joke: oneSingleObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.create = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedObject => {
            // console.log("req.body",req.body);
            res.json({ joke: newlyCreatedObject })
            // console.log("object",newlyCreatedObject);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateById = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ joke: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteById = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}