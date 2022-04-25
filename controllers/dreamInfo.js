const express = require ('express')
const router = express.Router()
const Dreams = require('../models/dreamModel')

//index -home
router.get('/', (req, res)=>{
    Dreams.find({}, (err, foundDreams)=>{
        res.json(foundDreams)
    })
})

//delete
router.delete('/:id', (req, res)=>{
    Dreams.findByIdAndRemove(req.params.id, (err, deletedDreams)=>{
        res.json(deletedDreams)
    })
})

//update
router.put('/:id', (req, res)=>{
    Dreams.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedDreams)=>{
        res.json(updatedDreams)
    })
})

//create
router.post('/', (req, res)=>{
    Dreams.create(req.body, (err, createdDream)=>{
        res.json(createdDream)
    })
})

//show
router.get('/:id', (req, res)=>{
    Dreams.findById(req.params.id, (err, foundDream)=>{
        res.json(foundDream)
    })
})

module.exports = router