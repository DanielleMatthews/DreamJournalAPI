const mongoose = require('mongoose')

const dreamSchema = new mongoose.Schema({
    title: String,
    description: String,
    opinions: String,
    dayBefore: String,
    date: Date
})

const Dreams = mongoose.model('Dream', dreamSchema)
module.exports = Dreams