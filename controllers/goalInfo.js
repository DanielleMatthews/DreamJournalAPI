const express = require ('express')
const router = express.Router()
const Goals = require('../models/goalModel')

//index -home
router.get('/', (req, res)=>{
    Goals.find({}, (err, foundGoals)=>{
        res.json(foundGoals)
    })
})

//delete
router.delete('/:id', (req, res)=>{
    Goals.findByIdAndRemove(req.params.id, (err, deletedGoals)=>{
        res.json(deletedGoals)
    })
})

//update
router.put('/:id', (req, res)=>{
    Goals.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGoals)=>{
        res.json(updatedGoals)
    })
})

//create
router.post('/', (req, res)=>{
    Goals.create(req.body, (err, createdGoal)=>{
        res.json(createdGoal)
    })
})

//show
router.get('/:id', (req, res)=>{
    Goals.findById(req.params.id, (err, foundGoal)=>{
        res.json(foundGoal)
    })
})

module.exports = router