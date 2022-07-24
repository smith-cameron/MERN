const Joke = require('../models/joke.model');

module.exports = {
    getAll : (req, res) => {
        Joke.find()
        .then((allObjects) => {
            res.json({ jokes: allObjects })
        })
        .catch((err) => {
            console.log("Query *getAll* failed.")
            res.json({ message: 'Something went wrong', error: err })
        })
    },
    getById : (req, res) => {
        Joke.findOne({ _id: req.params.id })
        .then(oneSingleObject => {
            res.json({ joke: oneSingleObject })
        })
        .catch((err) => {
            console.log("Query *findOne* failed.")
            res.status(400).json({ message: 'Something went wrong', error: err })m
        })
    },
    create : (req, res) => {
        Joke.create(req.body)
        .then(newlyCreatedObject => {
            // console.log("req.body",req.body);
            res.json({ joke: newlyCreatedObject })
            // console.log("object",newlyCreatedObject);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    },
    updateById : (req, res) => {
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
        })
    },

    deleteById : (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }
}