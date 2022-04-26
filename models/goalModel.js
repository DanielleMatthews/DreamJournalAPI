const mongoose = require('mongoose')

const goalSchmea = new mongoose.Schema({
    title: String,
    description: String,
    completeBy: Date,
    completed: Boolean
})

const Goals = mongoose.model('Goal', goalSchmea)
module.exports = Goals