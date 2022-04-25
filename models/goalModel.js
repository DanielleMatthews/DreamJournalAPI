const mongoose = require('mongoose')

const goalSchmea = new mongoose.Schema({
    title: String,
    descripton: String,
    completeBy: Number,
    completed: Boolean
})

const Goals = mongoose.model('Goal', goalSchmea)
module.exports = Goals